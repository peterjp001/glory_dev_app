import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='mt-16 border-t border-base-content/8 py-8 px-6'>
      <div className='max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3'>
        <div className='flex items-center gap-2'>
          <span className='w-1 h-4 rounded-full bg-primary' />
          <span className='font-bold text-base-content'>24hBible</span>
          <span className='text-base-content/30 text-sm'>· © {year}</span>
        </div>

        <p className='text-sm text-base-content/35 italic text-center sm:text-right'>
          « Ta parole est une lampe à mes pieds, et une lumière sur mon sentier. »{' '}
          <span className='not-italic font-medium text-primary/60'>Ps 119:105</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
