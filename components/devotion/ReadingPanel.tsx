'use client';

import { useState } from 'react';
import type { TabData } from '@/lib/dbRequest';

export function ReadingPanel({ tabs }: { tabs: TabData[] }) {
  const [active, setActive] = useState(0);
  const [fontSize, setFontSize] = useState(17);

  const clampSize = (n: number) => Math.min(Math.max(n, 12), 32);

  if (tabs.length === 0) {
    return (
      <p className='text-base-content/40 text-sm italic py-4'>
        Aucune lecture trouvée pour aujourd&apos;hui.
      </p>
    );
  }

  return (
    <div className='max-w-2xl'>
      {/* Controls bar */}
      <div className='sticky top-0 z-10 flex items-center justify-between gap-4 py-3 mb-10 border-b border-base-content/8 bg-base-100/80 backdrop-blur-md'>
        {/* Tabs */}
        <div className='flex items-center gap-1 overflow-x-auto bg-base-200/30 border border-base-content/10 rounded-lg px-1 py-1.5'>
          {tabs.map((tab, i) => (
            <button
              key={tab.label}
              onClick={() => {
                setActive(i);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-all cursor-pointer tracking-wide ${
                active === i
                  ? 'bg-primary text-primary-content shadow-sm'
                  : 'text-base-content/40 hover:text-base-content/70 hover:bg-base-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Font size */}
        {/* Font size */}
        <div className='flex items-center gap-2.5 shrink-0'>
          <button
            onClick={() => setFontSize((p) => clampSize(p - 1))}
            title='Diminuer'
            className='text-base-content/25 hover:text-base-content/60 transition-colors cursor-pointer select-none'
            style={{ fontSize: 10, fontWeight: 700, fontFamily: 'Georgia, serif' }}
          >
            A
          </button>

          <div className='relative flex items-center w-20 group'>
            <input
              type='range'
              min={12}
              max={32}
              value={fontSize}
              onChange={(e) => setFontSize(Number(e.target.value))}
              className='w-full h-0.5 appearance-none bg-base-content/15 rounded-full outline-none cursor-pointer
        [&::-webkit-slider-thumb]:appearance-none
        [&::-webkit-slider-thumb]:w-3
        [&::-webkit-slider-thumb]:h-3
        [&::-webkit-slider-thumb]:rounded-full
        [&::-webkit-slider-thumb]:bg-base-content
        [&::-webkit-slider-thumb]:shadow-sm
        [&::-webkit-slider-thumb]:transition-transform
        [&::-webkit-slider-thumb]:duration-150
        group-hover:[&::-webkit-slider-thumb]:scale-125'
            />
          </div>

          <button
            onClick={() => setFontSize((p) => clampSize(p + 1))}
            title='Augmenter'
            className='text-base-content/25 hover:text-base-content/60 transition-colors cursor-pointer select-none'
            style={{ fontSize: 15, fontWeight: 700, fontFamily: 'Georgia, serif' }}
          >
            A
          </button>
        </div>
      </div>

      {/* Verses */}
      <div
        key={active}
        className='animate-tab flex flex-col gap-5 font-serif text-base-content/90'
        style={{ fontSize }}
      >
        {tabs[active].content.map((v) => (
          <p key={v.verse} className='leading-[1.85] text-justify'>
            <sup
              className='text-primary font-bold mr-1.5 select-none not-italic'
              style={{ fontSize: '0.6em' }}
            >
              {v.verse}
            </sup>
            {v.text}
          </p>
        ))}
      </div>
    </div>
  );
}
