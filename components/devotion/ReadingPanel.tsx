'use client';

import { useState } from 'react';
import type { TabData } from '@/lib/dbRequest';

export function ReadingPanel({ tabs }: { tabs: TabData[] }) {
  const [active, setActive] = useState(0);
  // State for font size (defaulting to 17px as per your current setup)
  const [fontSize, setFontSize] = useState(17);

  const adjustSize = (delta: number) => {
    setFontSize((prev) => Math.min(Math.max(prev + delta, 12), 32)); // Clamped between 12px and 32px
  };

  if (tabs.length === 0) {
    return (
      <p className='text-base-content/40 text-sm'>Aucune lecture trouvée pour aujourd&apos;hui.</p>
    );
  }

  return (
    <div className='max-w-2xl'>
      {/* Tab bar and Controls */}
      <div className='sticky top-20 z-10 flex flex-row items-start justify-between mb-8'>
        <div className='flex gap-1.5 p-1.5 bg-base-200 rounded-xl w-fit overflow-x-auto'>
          {tabs.map((tab, i) => (
            <button
              key={tab.label}
              onClick={() => {
                setActive(i);
                // Smooth scroll to the top of the page
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`px-4 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                active === i
                  ? 'bg-primary text-primary-content font-semibold shadow-sm'
                  : 'text-base-content/40 hover:text-base-content/60 hover:bg-base-300/60'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Text Size Controls */}
        <div className='join bg-base-200 p-1 rounded-xl shadow-sm border border-base-300/50'>
          <button
            onClick={() => adjustSize(-1)}
            className='btn btn-ghost btn-xs join-item font-bold'
            title='Diminuer la taille'
          >
            A-
          </button>
          <div className='join-item px-2 flex items-center justify-center border-x border-base-300/50'>
            <span className='text-[10px] font-mono opacity-50'>{fontSize}px</span>
          </div>
          <button
            onClick={() => adjustSize(1)}
            className='btn btn-ghost btn-xs join-item font-bold'
            title='Augmenter la taille'
          >
            A+
          </button>
        </div>
      </div>

      {/* Reading content */}
      <div key={active} className='animate-tab'>
        {/* Dynamic style attribute applies the font size */}
        <div
          className='font-serif text-base-content flex flex-col gap-6'
          style={{ fontSize: `${fontSize}px` }}
        >
          {tabs[active].content.map((v) => (
            <p key={v.verse} className='leading-[1.8] text-justify'>
              <span
                className='text-primary font-bold mr-2 select-none align-super'
                style={{ fontSize: '0.65em' }} // Keeps verse number relative to text size
              >
                {v.verse}
              </span>
              <span className='opacity-90'>{v.text}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
