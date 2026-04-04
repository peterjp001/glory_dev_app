import React from 'react';
import ThemeToggle from './ToggleTheme';
import Logo24h from './24hLogo';
import NavbarListItems from './NavbarListItems';

const Navbar = () => {
  return (
    <div
      className='
        navbar 
        bg-base-100 
        border-b-2  border-primary
        shadow-sm
        rounded-sm
        transition-all duration-300
        '
    >
      {/* Left: Logo + Mobile Menu */}
      <div className='navbar-start gap-2'>
        <div className='dropdown lg:hidden'>
          <div tabIndex={0} role='button' className='btn btn-ghost btn-square'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='
                menu menu-sm dropdown-content 
                mt-6 z-20 p-2 
                shadow bg-base-100 
                dark:bg-base-300 
                rounded-box w-52
                gap-2
              '
          >
            <NavbarListItems />
          </ul>
        </div>
        <Logo24h />
      </div>

      {/* Center: Desktop Menu */}
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1 text-sm font-medium gap-2'>
          <NavbarListItems />
        </ul>
      </div>

      {/* Right: Theme Toggle */}
      <div className='navbar-end'>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
