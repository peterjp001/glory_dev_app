'use client';

import React, { useRef, useEffect } from 'react';
import DevotionForm from './DevotionForm';

const ModalDevotion = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const handleResize = () => {
      // 1024px is the default Tailwind 'lg' breakpoint
      if (window.innerWidth >= 1024 && dialogRef.current?.open) {
        dialogRef.current.close();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <button className='btn btn-primary btn-sm' onClick={() => dialogRef.current?.showModal()}>
        Soumettre Dévotion
      </button>

      <dialog ref={dialogRef} className='modal modal-center sm:modal-middle'>
        <div className='modal-box p-0 flex flex-col max-h-[90dvh] bg-base-100'>
          {/* Header */}
          <div className='sticky top-0 z-10 flex items-center justify-between px-5 py-4 bg-base-100 border-b border-base-content/10'>
            <div>
              <p className='text-[11px] font-medium tracking-widest uppercase text-base-content/40'>
                Vendredi 3 avril 2026
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

        {/* Important: use the form method="dialog" for the backdrop click to be safe */}
        <form method='dialog' className='modal-backdrop'>
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default ModalDevotion;
