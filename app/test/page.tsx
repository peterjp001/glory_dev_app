'use client';

import { getChaptersByBook, listAllBooks } from '@/lib/bbService';
import { useState, useMemo, useRef, useEffect } from 'react';

type ComboBoxProps = {
  items: { label: string; value: number }[];
  selected: number | null;
  onSelect: (value: number) => void;
  placeholder: string;
};

const ComboBox = ({ items, selected, onSelect, placeholder }: ComboBoxProps) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const ref = useRef<HTMLDivElement>(null);

  const filtered = items.filter((i) => i.label.toLowerCase().includes(search.toLowerCase()));

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className='relative w-full' ref={ref}>
      <button
        type='button'
        className='input input-bordered w-full text-left flex justify-between items-center'
        onClick={() => setOpen(!open)}
      >
        {selected !== null ? items.find((i) => i.value === selected)?.label : placeholder}
        <span className='ml-2'>&#x25BC;</span>
      </button>

      {open && (
        <div className='absolute z-50 mt-1 w-full bg-base-200 shadow-lg rounded-lg border border-base-300'>
          <div className='p-2 border-b border-base-300'>
            <input
              type='text'
              className='input input-sm w-full'
              placeholder='Search...'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              autoFocus
            />
          </div>
          <ul className='max-h-64 overflow-y-auto'>
            {filtered.length > 0 ? (
              filtered.map((i) => (
                <li key={i.value}>
                  <button
                    type='button'
                    className={`w-full text-left px-4 py-2 hover:bg-primary hover:text-white transition-all ${
                      selected === i.value ? 'bg-primary text-white' : ''
                    }`}
                    onClick={() => {
                      onSelect(i.value);
                      setOpen(false);
                      setSearch('');
                    }}
                  >
                    {i.label}
                  </button>
                </li>
              ))
            ) : (
              <li className='px-4 py-2 text-gray-500'>No items found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default function Home() {
  const [lang, setLang] = useState<'en' | 'fr' | 'es'>('en');
  const [book, setBook] = useState<number | null>(1);
  const [chapter, setChapter] = useState<number | null>(null);

  const books = useMemo(
    () => listAllBooks(lang).map((b) => ({ label: b.name, value: b.index })),
    [lang],
  );

  const chapters = useMemo(() => {
    const c = getChaptersByBook(lang, book ?? 1);
    return c.chapters.map((num) => ({ label: `Chapter ${num}`, value: num }));
  }, [lang, book]);

  const handleStartReading = () => {
    if (!book || !chapter) {
      alert('Please select a book and chapter');
      return;
    }

    const bookName = books.find((b) => b.value === book)?.value;
    const bookChapter = chapter;
    const bookLang = lang;
    alert(`Start reading book ${bookName} Chapter ${bookChapter} in ${bookLang}`);
  };

  return (
    <>
      <div className='flex flex-col sm:flex-row gap-4 w-full max-w-md mb-6'>
        <select
          value={lang}
          onChange={(e) => {
            setLang(e.target.value as 'en' | 'fr' | 'es');
            setBook(1);
            setChapter(null);
          }}
          className='select select-primary w-full sm:w-32'
        >
          <option value='en'>English</option>
          <option value='fr'>Français</option>
          <option value='es'>Español</option>
        </select>

        <ComboBox items={books} selected={book} onSelect={setBook} placeholder='Select a book' />
        <ComboBox
          items={chapters}
          selected={chapter}
          onSelect={setChapter}
          placeholder='Select a chapter'
        />
      </div>

      <button
        className='btn btn-primary btn-lg'
        onClick={handleStartReading}
        disabled={!book || !chapter}
      >
        Start Reading
      </button>
    </>
  );
}
