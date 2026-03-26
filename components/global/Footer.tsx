import React from 'react';

const Footer = () => {
  return (
    <>
      {/* ➡️ Footer - Using daisyUI 'footer' component */}
      {/* ➡️ Footer - Fully Responsive DaisyUI Component */}
      <footer className='footer bg-neutral text-neutral-content p-10'>
        {/* Main Content Wrapper: Use flex/col on mobile, flex/row & space-between on desktop */}
        <div className='flex flex-col md:flex-row md:justify-between w-full max-w-7xl mx-auto items-center'>
          {/* Branding and Copyright (Left aligned on desktop, center on mobile) */}
          <aside className='text-center md:text-left mb-4 md:mb-0'>
            <p className='font-bold text-lg'>24hBible</p>
            <p>&copy; 2025 24hBible. All rights reserved.</p>
          </aside>

          {/* Navigation Links (Right aligned on desktop, center on mobile) */}
          <nav>
            <div className='flex gap-4'>
              {' '}
              {/* Use flex instead of grid for simpler flow */}
              <a href='#' className='link link-hover'>
                About
              </a>
              <a href='#' className='link link-hover'>
                Contact
              </a>
              <a href='#' className='link link-hover'>
                Privacy Policy
              </a>
            </div>
          </nav>
        </div>
      </footer>
    </>
  );
};

export default Footer;
