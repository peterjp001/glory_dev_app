'use client';

import React, { useRef, useEffect } from 'react';
import DevotionForm from './DevotionForm';
import { PenLine, X } from 'lucide-react';

const ModalDevotion = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && dialogRef.current?.open) {
        dialogRef.current.close();
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* FAB — mobile only */}
      <button
        onClick={() => dialogRef.current?.showModal()}
        className='fixed bottom-24 right-6 z-50 lg:hidden flex items-center gap-2 px-4 py-3 rounded-2xl bg-primary text-primary-content  hover:brightness-105 active:scale-95 transition-all'
        aria-label='Soumettre ma dévotion'
      >
        <PenLine className='w-4 h-4' />
        <span className='text-sm font-semibold'>Dévotion</span>
      </button>

      <dialog ref={dialogRef} className='modal modal-bottom sm:modal-middle'>
        <div className='modal-box p-0 flex flex-col max-h-[92dvh] sm:max-h-[85dvh] bg-base-100 rounded-t-3xl sm:rounded-2xl overflow-hidden'>
          {/* Drag handle — mobile */}
          <div className='flex justify-center pt-3 pb-1 sm:hidden'>
            <div className='w-10 h-1 rounded-full bg-base-content/15' />
          </div>

          {/* Header */}
          <div className='flex items-center justify-between px-6 py-4 border-b border-base-content/8'>
            <div>
              <p className='text-[10px] font-semibold tracking-widest uppercase text-primary mb-0.5'>
                {new Date().toLocaleDateString('fr-FR', {
                  weekday: 'long',
                  day: 'numeric',
                  month: 'long',
                })}
              </p>
              <h3 className='text-lg font-bold text-base-content'>Ma dévotion</h3>
            </div>
            <button
              onClick={() => dialogRef.current?.close()}
              className='w-8 h-8 flex items-center justify-center rounded-full bg-base-200 hover:bg-base-300 text-base-content/50 hover:text-base-content transition-all'
            >
              <X className='w-4 h-4' />
            </button>
          </div>

          {/* Body */}
          <div className='overflow-y-auto flex-1 px-6 py-5'>
            <DevotionForm bare />
          </div>
        </div>

        <form method='dialog' className='modal-backdrop'>
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default ModalDevotion;
