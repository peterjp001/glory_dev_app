interface Scripture {
  [key: number]: {
    verse: number;
    text: string;
  };
}

interface ChapterProps {
  book: number;
  chapter: number;
  scripture: Scripture;
}

const BibleReader: React.FC<ChapterProps> = ({ book, chapter, scripture }) => {
  return (
    <div className='w-full max-w-3xl mt-4 bg-base-200 rounded-lg shadow-sm p-6'>
      <h2 className='text-xl font-bold mb-4'>
        Book {book}, Chapter {chapter}
      </h2>
      <div className='space-y-3 text-base-content/90'>
        {Object.values(scripture).map((verseObj) => (
          <p key={verseObj.verse} className='leading-relaxed'>
            <sup className='font-bold text-primary mr-1'>{verseObj.verse}</sup>
            {verseObj.text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default BibleReader;
