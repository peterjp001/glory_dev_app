'use client';

import React, { useRef, useEffect } from 'react';
import DevotionForm from './DevotionForm';
import { PenBoxIcon } from 'lucide-react';

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
      {/* FAB trigger — mobile only */}
      <button
        onClick={() => dialogRef.current?.showModal()}
        className='fixed bottom-20 right-8 z-50 btn btn-xs btn-primary shadow-lg lg:hidden'
        aria-label='Soumettre ma dévotion'
      >
        <PenBoxIcon className='w-5 h-5' /> Devotion
      </button>

      <dialog ref={dialogRef} className='modal modal-center sm:modal-middle'>
        <div className='modal-box p-0 flex flex-col max-h-[90dvh] bg-base-100'>
          {/* Header */}
          <div className='sticky top-0 z-10 flex items-center justify-between px-5 py-4 bg-base-100 border-b border-base-content/10'>
            <div>
              <p className='text-[11px] font-medium tracking-widest uppercase text-base-content/40'>
                {new Date().toLocaleDateString('fr-FR', {
                  weekday: 'long',
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </p>
              <h3 className='font-serif text-lg font-medium text-base-content'>Ma dévotion</h3>
            </div>
            <button
              className='btn btn-ghost btn-sm btn-circle'
              onClick={() => dialogRef.current?.close()}
            >
              ✕
            </button>
          </div>

          {/* Scrollable body */}
          <div className='overflow-y-auto flex-1 px-5 py-4'>
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
