'use client';

import { submitDevotion } from '@/lib/bbAction';
import React from 'react';

const fields = [
  { key: 'verset', label: 'Verset médité', placeholder: 'Quel verset méditez-vous ?', rows: 2 },
  {
    key: 'explication',
    label: 'Que dit la Parole ?',
    placeholder: 'Expliquez le verset...',
    rows: 3,
  },
  {
    key: 'interpretation',
    label: "Saint-Esprit, qu'est-ce que cela veut dire ?",
    placeholder: 'Quelle révélation...',
    rows: 3,
  },
  {
    key: 'action',
    label: 'Saint-Esprit, que dois-je faire ?',
    placeholder: 'Quelle action...',
    rows: 3,
  },
  { key: 'priere', label: 'Prière', placeholder: 'Écrivez votre prière…', rows: 4 },
] as const;

const DevotionForm = ({ bare = false }: { bare?: boolean }) => {
  // The 'action' prop automatically receives the FormData
  const content = (
    <form
      action={async (formData) => {
        await submitDevotion(formData);
      }}
      className='flex flex-col gap-5'
    >
      {fields.map(({ key, label, placeholder, rows }) => (
        <div key={key} className='flex flex-col gap-1.5'>
          <label className='text-[11px] font-semibold tracking-wider uppercase text-base-content/50 dark:text-base-content/80'>
            {label}
          </label>
          <textarea
            name={key} // Crucial: This identifies the data in the Server Action
            rows={rows}
            placeholder={placeholder}
            className='textarea textarea-ghost bg-base-200 w-full text-sm leading-relaxed focus:outline-none placeholder:text-base-content/30'
            required
          />
        </div>
      ))}
      <button type='submit' className='btn btn-primary btn-md w-full'>
        Soumettre
      </button>
    </form>
  );

  if (bare) return content;

  return (
    <div className=' flex flex-col '>
      <h2 className='text-sm font-bold mb-4 opacity-50 uppercase tracking-widest'>Ma Dévotion</h2>{' '}
      {content}
    </div>
  );
};

export default DevotionForm;
