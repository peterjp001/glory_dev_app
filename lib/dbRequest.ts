'use server';

import db from './prisma';
import { BibleBooksDict, BibleBooksDictType } from './bbService';

interface Verse {
  verse: number;
  text: string;
}

interface BibleResponse {
  book: number;
  chapter: number;
  scripture: Record<number, Verse>;
}

export async function getReadingRequest(
  book: number,
  chapter: number,
  lang: string,
): Promise<BibleResponse | null> {
  if (lang === 'fr') {
    const res = await fetchFrenchBibleVersion({ book, chapter });
    return res;
  } else if (lang === 'en') {
    const res = await fetchEnglishBibleVersion({ book, chapter });
    return res;
  } else if (lang === 'es') {
    const res = await fetchSpanishBibleVersion({ book, chapter });
    return res;
  } else if (lang === 'ht') {
    const res = await fetchCreoleBibleVersion({ book, chapter });
    return res;
  } else {
    return null;
  }
}

export async function fetchFrenchBibleVersion(params: { book: number; chapter: number }) {
  const verses: Verse[] = await db.bible_verses_segond_1910.findMany({
    select: { verse: true, text: true },
    where: {
      book: Number(params.book),
      chapter: Number(params.chapter),
    },
    orderBy: { verse: 'asc' },
  });

  const scripture: Record<number, Verse> = {};
  verses.forEach((v) => {
    scripture[v.verse] = v;
  });

  return { book: params.book, chapter: params.chapter, scripture };
}

export async function fetchEnglishBibleVersion(params: { book: number; chapter: number }) {
  const verses: Verse[] = await db.bible_verses_kjv.findMany({
    select: { verse: true, text: true },
    where: {
      book: Number(params.book),
      chapter: Number(params.chapter),
    },
    orderBy: { verse: 'asc' },
  });

  const scripture: Record<number, Verse> = {};
  verses.forEach((v) => {
    scripture[v.verse] = v;
  });

  return { book: params.book, chapter: params.chapter, scripture };
}

export async function fetchSpanishBibleVersion(params: { book: number; chapter: number }) {
  const verses: Verse[] = await db.bible_verses_rvg.findMany({
    select: { verse: true, text: true },
    where: {
      book: Number(params.book),
      chapter: Number(params.chapter),
    },
    orderBy: { verse: 'asc' },
  });

  const scripture: Record<number, Verse> = {};
  verses.forEach((v) => {
    scripture[v.verse] = v;
  });

  return { book: params.book, chapter: params.chapter, scripture };
}

export async function fetchCreoleBibleVersion(params: { book: number; chapter: number }) {
  const verses: Verse[] = await db.bible_verses_hcv.findMany({
    select: { verse: true, text: true },
    where: {
      book: Number(params.book),
      chapter: Number(params.chapter),
    },
    orderBy: { verse: 'asc' },
  });

  const scripture: Record<number, Verse> = {};
  verses.forEach((v) => {
    scripture[v.verse] = v;
  });

  return { book: params.book, chapter: params.chapter, scripture };
}

export interface ReadingEntry {
  book_number: number;
  chapter: number | null; // null = single-chapter whole-book (Obadiah, Philemon, etc.)
  verse_start: number | null;
  verse_end: number | null;
}

export interface TodayPlan {
  id: number;
  year: number;
  day: number;
  month: number;
  readings: ReadingEntry[];
}

export async function getTodayReadingPlan(): Promise<TodayPlan | null> {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();

  const result = await db.reading_plan.findFirst({
    where: { year, month, day },
  });

  if (!result) return null;

  return {
    id: result.id,
    year: result.year,
    day: result.day,
    month: result.month,
    readings: result.readings as unknown as ReadingEntry[],
  };
}

// ─── New additions ────────────────────────────────────────────────────────────

export type TabData = {
  label: string;
  content: { verse: number; text: string }[];
};

export async function getChapterVerses(
  book: number,
  chapter: number,
  lang: string,
  verseStart?: number,
  verseEnd?: number,
): Promise<{ verse: number; text: string }[]> {
  const where = {
    book: Number(book),
    chapter: Number(chapter),
    ...(verseStart !== undefined && verseEnd !== undefined
      ? { verse: { gte: verseStart, lte: verseEnd } }
      : {}),
  };

  const select = { verse: true, text: true };
  const orderBy = { verse: 'asc' as const };

  if (lang === 'en') return db.bible_verses_kjv.findMany({ select, where, orderBy });
  if (lang === 'es') return db.bible_verses_rvg.findMany({ select, where, orderBy });
  if (lang === 'ht') return db.bible_verses_hcv.findMany({ select, where, orderBy });
  return db.bible_verses_segond_1910.findMany({ select, where, orderBy }); // 'fr' + default
}

export async function getTodayTabs(lang: string = 'fr'): Promise<TabData[]> {
  const plan = await getTodayReadingPlan();
  if (!plan) return [];

  const bookDict = BibleBooksDict[lang as keyof BibleBooksDictType] ?? BibleBooksDict['fr'];
  const tabs: TabData[] = [];

  for (const entry of plan.readings) {
    const bookName = bookDict[entry.book_number]?.name ?? `Livre ${entry.book_number}`;
    const chapter = entry.chapter ?? 1; // whole-book entries: single-chapter book, use 1

    const label =
      entry.verse_start !== null
        ? `${bookName} ${chapter}.${entry.verse_start}-${entry.verse_end}`
        : entry.chapter !== null
          ? `${bookName} ${chapter}`
          : bookName; // no chapter number for whole-book entries

    const content = await getChapterVerses(
      entry.book_number,
      chapter,
      lang,
      entry.verse_start ?? undefined,
      entry.verse_end ?? undefined,
    );

    tabs.push({ label, content });
  }

  return tabs;
}
