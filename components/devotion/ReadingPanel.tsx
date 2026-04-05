'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { TabData } from '@/lib/dbRequest';

export function ReadingPanel({ tabs }: { tabs: TabData[] }) {
  const [active, setActive] = useState(0);
  const [fontSize, setFontSize] = useState(17);

  const hasPrev = active > 0;
  const hasNext = active < tabs.length - 1;
  const prev = () => goTo(active - 1);
  const next = () => goTo(active + 1);

  const clampSize = (n: number) => Math.min(Math.max(n, 12), 32);
  const goTo = (i: number) => {
    setActive(i);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (tabs.length === 0) {
    return (
      <p className='text-base-content/40 text-sm italic py-4'>
        Aucune lecture trouvée pour aujourd&apos;hui.
      </p>
    );
  }

  const tab = tabs[active];

  return (
    <div className='max-w-2xl'>
      {/* Sticky controls */}
      <div className='sticky top-0 z-10 backdrop-blur-md border-b border-base-content/8 mb-10 border bg-base-100 bg-linear-to-br from-base-100 to-base-300'>
        {/* Tab bar */}
        {tabs.length > 1 && (
          <div className='flex items-center gap-1 overflow-x-auto pt-3 pb-0 scrollbar-none'>
            {tabs.map((t, i) => (
              <button
                key={t.label}
                onClick={() => goTo(i)}
                className={`px-4 pb-2.5 pt-1 text-xs font-semibold whitespace-nowrap border-b-2 transition-all cursor-pointer tracking-wide ${
                  active === i
                    ? 'border-primary text-base-content'
                    : 'border-transparent text-base-content/35 hover:text-base-content/60'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        )}

        {/* Font size + navigation */}
        <div className='flex items-center justify-between py-2 border-t border-base-content/8'>
          {/* Prev / Next */}
          <div className='flex items-center gap-1'>
            <button
              onClick={prev}
              disabled={!hasPrev}
              className='p-1.5 rounded-lg text-base-content/30 hover:text-base-content/70 hover:bg-base-200 disabled:opacity-20 disabled:pointer-events-none transition-all'
            >
              <ChevronLeft className='w-4 h-4' />
            </button>
            <span className='text-xs text-base-content/30 tabular-nums'>
              {active + 1} / {tabs.length}
            </span>
            <button
              onClick={next}
              disabled={!hasNext}
              className='p-1.5 rounded-lg text-base-content/30 hover:text-base-content/70 hover:bg-base-200 disabled:opacity-20 disabled:pointer-events-none transition-all'
            >
              <ChevronRight className='w-4 h-4' />
            </button>
          </div>

          {/* Font size */}
          <div className='flex items-center gap-1'>
            <button
              onClick={() => setFontSize((p) => clampSize(p - 1))}
              className='w-7 h-7 flex items-center justify-center rounded-lg text-base-content/30 hover:text-base-content/70 hover:bg-base-200 transition-all cursor-pointer select-none font-serif text-[11px] font-bold'
            >
              A-
            </button>
            <div className='w-px h-3 bg-base-content/10' />
            <button
              onClick={() => setFontSize((p) => clampSize(p + 1))}
              className='w-7 h-7 flex items-center justify-center rounded-lg text-base-content/30 hover:text-base-content/70 hover:bg-base-200 transition-all cursor-pointer select-none font-serif text-[15px] font-bold'
            >
              A+
            </button>
          </div>
        </div>
      </div>

      {/* Chapter title */}
      <h2 className='font-serif text-xl font-semibold text-base-content mb-8'>{tab.label}</h2>

      {/* Verses */}
      <div
        key={active}
        className='animate-tab flex flex-col gap-1 font-serif text-base-content/85'
        style={{ fontSize }}
      >
        {tab.content.map((v) => (
          <p
            key={v.verse}
            className='leading-[1.9] text-justify hover:text-base-content transition-colors duration-200 group'
          >
            <sup className='inline-flex items-center justify-center w-5 h-5 mr-1 text-[12px] font-bold font-sans text-primary bg-primary/8 rounded group-hover:bg-primary/15 transition-colors select-none not-italic align-top mt-1'>
              {v.verse}
            </sup>
            {v.text}
          </p>
        ))}
      </div>

      {tabs.length > 1 && (
        <div className='flex items-center justify-between gap-4 mt-5 pt-5 border-t border-base-content/8'>
          <button
            onClick={prev}
            disabled={!hasPrev}
            className='group flex items-center gap-2.5 px-4 py-2.5 bg-base-100 bg-linear-to-br from-base-200 to-base-300 rounded-xl border border-base-content/10 hover:border-base-content/25 hover:bg-base-200/50 disabled:opacity-20 disabled:pointer-events-none transition-all'
          >
            <ChevronLeft className='w-4 h-4 text-base-content/40 group-hover:text-base-content transition-colors' />
            <div className='text-left'>
              <p className='text-[10px] text-base-content/30 uppercase tracking-widest'>
                Précédent
              </p>
              <p className='text-xs font-semibold text-base-content/60 group-hover:text-base-content transition-colors'>
                {tabs[active - 1]?.label}
              </p>
            </div>
          </button>

          <button
            onClick={next}
            disabled={!hasNext}
            className='group flex items-center gap-2.5 px-4 py-2.5 bg-base-100 bg-linear-to-br from-base-200 to-base-300 rounded-xl border border-base-content/10 hover:border-base-content/25 hover:bg-base-200/50 disabled:opacity-20 disabled:pointer-events-none transition-all'
          >
            <div className='text-right'>
              <p className='text-[10px] text-base-content/30 uppercase tracking-widest'>Suivant</p>
              <p className='text-xs font-semibold text-base-content/60 group-hover:text-base-content transition-colors'>
                {tabs[active + 1]?.label}
              </p>
            </div>
            <ChevronRight className='w-4 h-4 text-base-content/40 group-hover:text-base-content transition-colors' />
          </button>
        </div>
      )}
    </div>
  );
}
