'use server';

import db from './prisma';

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

  // Convert array to an object keyed by verse number
  const scripture: Record<number, Verse> = {};
  verses.forEach((v) => {
    scripture[v.verse] = v;
  });

  const res: BibleResponse = {
    book: params.book,
    chapter: params.chapter,
    scripture,
  };

  return res;
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

  // Convert array to an object keyed by verse number
  const scripture: Record<number, Verse> = {};
  verses.forEach((v) => {
    scripture[v.verse] = v;
  });

  const res: BibleResponse = {
    book: params.book,
    chapter: params.chapter,
    scripture,
  };

  return res;
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

  // Convert array to an object keyed by verse number
  const scripture: Record<number, Verse> = {};
  verses.forEach((v) => {
    scripture[v.verse] = v;
  });

  const res: BibleResponse = {
    book: params.book,
    chapter: params.chapter,
    scripture,
  };

  return res;
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

  // Convert array to an object keyed by verse number
  const scripture: Record<number, Verse> = {};
  verses.forEach((v) => {
    scripture[v.verse] = v;
  });

  const res: BibleResponse = {
    book: params.book,
    chapter: params.chapter,
    scripture,
  };

  return res;
}



export interface ReadingEntry {
  book_number: number;
  chapter_start: number;
  chapter_end: number;
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
  const month = now.getMonth() + 1; // getMonth() is 0-indexed
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

