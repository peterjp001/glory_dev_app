'use client';
import { useState, useMemo } from 'react';
import CustomComboBox from './CustomComboBox';
import { getChaptersByBook, listAllBooks } from '@/lib/bbService';
import { useRouter, useSearchParams } from 'next/navigation';

const SearchInBible = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Initial values from URL
  const initialLang = (searchParams.get('lang') as 'en' | 'fr' | 'es' | 'ht') || 'en';
  const initialBook = Number(searchParams.get('book')) || 1;
  const initialChapter = Number(searchParams.get('chapter')) || 1;

  const [lang, setLang] = useState<'en' | 'fr' | 'es' | 'ht'>(initialLang);
  const [book, setBook] = useState<number | null>(initialBook);
  const [chapter, setChapter] = useState<number | null>(initialChapter);

  const books = useMemo(
    () => listAllBooks(lang).map((b) => ({ label: b.name, value: b.index })),
    [lang],
  );

  const chapters = useMemo(() => {
    const c = getChaptersByBook(lang, book ?? 1);
    return c.chapters.map((num) => ({ label: `Chapter ${num}`, value: num }));
  }, [lang, book]);

  const handleStartReading = () => {
    router.push(`/bible?book=${book}&chapter=${chapter}&lang=${lang}`);
  };

  return (
    <div className='flex flex-col sm:flex-row gap-2 w-full max-w-3xl items-center mb-4'>
      <select
        value={lang}
        onChange={(e) => {
          setLang(e.target.value as 'en' | 'fr' | 'es');
          setBook(1);
          setChapter(1);
        }}
        className='select select-primary w-full sm:w-28'
      >
        <option value='en'>English</option>
        <option value='fr'>Français</option>
        <option value='es'>Español</option>
        <option value='ht'>Kreyòl Ayisyen</option>
      </select>

      <CustomComboBox items={books} selected={book} onSelect={setBook} placeholder='Book' />
      <CustomComboBox
        items={chapters}
        selected={chapter}
        onSelect={setChapter}
        placeholder='Chapter'
      />

      <button
        className='btn btn-primary btn-sm sm:btn-md ml-2 whitespace-nowrap'
        onClick={handleStartReading}
        disabled={!book || !chapter}
      >
        Lire{' '}
      </button>
    </div>
  );
};

export default SearchInBible;
