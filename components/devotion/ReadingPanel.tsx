'use client';

import { useState } from 'react';

const tabs = [
  {
    label: 'Genèse 1',
    content: [
      { verse: 1, text: 'Au commencement, Dieu créa les cieux et la terre.' },
      {
        verse: 2,
        text: "La terre était informe et vide, les ténèbres couvraient l'abîme, et l'Esprit de Dieu se mouvait au-dessus des eaux.",
      },
      { verse: 3, text: 'Dieu dit : Que la lumière soit ! Et la lumière fut.' },
      {
        verse: 4,
        text: "Dieu vit que la lumière était bonne ; et Dieu sépara la lumière d'avec les ténèbres.",
      },
    ],
  },
  {
    label: 'Psaume 23',
    content: [
      { verse: 1, text: "L'Éternel est mon berger : je ne manquerai de rien." },
      {
        verse: 2,
        text: 'Il me fait reposer dans de verts pâturages, Il me dirige près des eaux paisibles.',
      },
      {
        verse: 3,
        text: 'Il restaure mon âme, Il me conduit dans les sentiers de la justice, à cause de son nom.',
      },
    ],
  },
  {
    label: 'Jean 3',
    content: [
      {
        verse: 1,
        text: 'Il y avait parmi les pharisiens un homme appelé Nicodème, un chef des Juifs.',
      },
      {
        verse: 2,
        text: "Cet homme vint auprès de Jésus de nuit, et lui dit : Rabbi, nous savons que tu es un docteur venu de Dieu ; car personne ne peut faire les miracles que tu fais, si Dieu n'est pas avec lui.",
      },
    ],
  },
];

export function ReadingPanel() {
  const [active, setActive] = useState(0);

  return (
    <div className='max-w-2xl'>
      {/* Tab bar */}
      <div className='flex gap-1.5 p-1.5 bg-base-200 rounded-xl w-fit overflow-x-auto mb-8'>
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            onClick={() => setActive(i)}
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

      {/* Reading content */}
      <div key={active} className='animate-tab'>
        <div className='font-serif text-[17px] leading-[2.1] text-base-content text-justify'>
          {tabs[active].content.map((v) => (
            <span key={v.verse} className='inline mr-1.5'>
              {/* Verse marker using your theme's primary color */}
              <span className='text-primary font-bold text-[11px] mr-1 select-none align-super'>
                {v.verse}
              </span>
              <span className='opacity-90'>{v.text}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
