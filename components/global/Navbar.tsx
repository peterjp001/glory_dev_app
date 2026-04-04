import ThemeToggle from './ToggleTheme';
import Logo24h from './24hLogo';
import NavbarListItems from './NavbarListItems';
import { MenuIcon } from 'lucide-react';
import UserDropdown from './UserDropdown';

const Navbar = () => (
  <div className='navbar bg-base-100 border-b-2 border-primary shadow-sm'>
    <div className='navbar-start gap-2'>
      <div className='dropdown lg:hidden'>
        <div tabIndex={0} role='button' className='btn btn-ghost btn-square'>
          <MenuIcon className='w-5 h-5' />
        </div>
        <ul
          tabIndex={0}
          className='dropdown-content menu menu-sm mt-6 z-20 p-2 shadow bg-base-100 rounded-box w-52 gap-2'
        >
          <NavbarListItems />
        </ul>
      </div>
      <Logo24h />
    </div>

    <div className='navbar-center hidden lg:flex'>
      <ul className='menu menu-horizontal px-1 text-sm font-medium gap-2'>
        <NavbarListItems />
      </ul>
    </div>

    <div className='navbar-end'>
      <UserDropdown />
      <ThemeToggle />
    </div>
  </div>
);

export default Navbar;
