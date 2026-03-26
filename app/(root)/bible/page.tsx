import SearchInBible from '@/components/SearchInBible';
import { getReadingRequest } from '@/lib/dbRequest';

function fixEncoding(str: string, lang: string = 'en'): string {
  // Fix double-encoded UTF-8 first (if needed)
  const fixed = lang === 'fr' ? Buffer.from(str, 'binary').toString('utf8') : str;
  // Remove unwanted characters like ¶ and �
  return fixed.replace(/[\u00B6\uFFFD]/g, ''); // \u00B6 = ¶, \uFFFD = �
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ book?: string; chapter?: string; lang?: string }>;
}) {
  // unwrap the promise
  const sp = await searchParams;

  const bookNum = Number(sp.book ?? 1);
  const chapterNum = Number(sp.chapter ?? 1);
  const lang = sp.lang ?? 'en';

  const res = await getReadingRequest(bookNum, chapterNum, lang);

  return (
    <div className='min-h-screen bg-base-100 mb-4 flex flex-col items-center'>
      <header className='text-center mb-6'>
        <h1 className='text-3xl font-bold text-primary mb-1'>📖 The Holy Bible</h1>
        <p className='text-sm text-base-content/70'>
          Select language, book, and chapter to start reading
        </p>
      </header>

      <SearchInBible />

      <div className='w-full max-w-3xl mt-6 bg-base-200 rounded-2xl shadow-md p-6 flex-1'>
        <div className='text-base text-base-content/80'>
          {/* Chapter Header */}
          <h2 className='text-2xl font-extrabold mb-6 text-center sm:text-left'>
            Select language, book, and chapter to start reading
          </h2>

          {/* Verses */}
          <div className='space-y-4'>
            {res?.scripture &&
              Object.values(res.scripture).map((verse) => (
                <p
                  key={verse.verse}
                  className='flex flex-wrap gap-2 text-justify sm:text-left leading-relaxed'
                >
                  <span className='font-bold text-primary min-w-[2ch]'>{verse.verse}.</span>
                  <span className='flex-1 font-medium'>{fixEncoding(verse.text, lang)}</span>
                </p>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
