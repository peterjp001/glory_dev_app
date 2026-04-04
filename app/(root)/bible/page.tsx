import SearchInBible from '@/components/bible/SearchInBible';
import { getReadingRequest } from '@/lib/dbRequest';

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ book?: string; chapter?: string; lang?: string }>;
}) {
  // Résoudre la promesse des paramètres de recherche
  const sp = await searchParams;

  const bookNum = Number(sp.book ?? 1);
  const chapterNum = Number(sp.chapter ?? 1);
  const lang = sp.lang ?? 'fr';

  const res = await getReadingRequest(bookNum, chapterNum, lang);

  return (
    <div className='min-h-screen bg-base-100 mb-4 flex flex-col items-center'>
      <header className='text-center mb-6'>
        <h1 className='text-3xl font-bold text-primary mb-1'>📖 La Sainte Bible</h1>
        <p className='text-sm text-base-content/70'>
          Sélectionnez la langue, le livre et le chapitre pour commencer la lecture
        </p>
      </header>

      <SearchInBible />

      <div className='w-full max-w-3xl mt-6 bg-base-200 rounded-2xl shadow-md p-6 flex-1'>
        <div className='text-base text-base-content/80'>
          {/* Versets */}
          <div className='space-y-4'>
            {res?.scripture &&
              Object.values(res.scripture).map((verse) => (
                <p
                  key={verse.verse}
                  className='flex flex-wrap gap-2 text-justify sm:text-left leading-relaxed'
                >
                  <span className='font-bold text-primary min-w-[2ch]'>{verse.verse}.</span>
                  <span className='flex-1 font-medium'>{verse.text}</span>
                </p>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
