import ThemeToggle from '@/components/global/ToggleTheme';
import UserDropdown from '@/components/global/UserDropdown';
import { PanelLeft } from 'lucide-react';

export const AppNavbar = () => (
  <nav className='navbar bg-base-100 border-b border-base-content/8 px-4 sticky top-0 z-10'>
    <div className='navbar-start gap-2'>
      <label
        htmlFor='sidebar-toggle'
        aria-label='toggle sidebar'
        className='btn btn-ghost btn-sm btn-square'
      >
        <PanelLeft className='w-4 h-4' />
      </label>
    </div>

    <div className='navbar-end gap-2'>
      <ThemeToggle />
      <UserDropdown />
    </div>
  </nav>
);
