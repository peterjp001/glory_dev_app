import { SidebarLogo } from './SidebarLogo';
import { SidebarNav } from './SidebarNav';
import { SidebarFooter } from './SidebarFooter';

export const Sidebar = () => (
  <div className='drawer-side z-20'>
    <label htmlFor='sidebar-toggle' aria-label='close sidebar' className='drawer-overlay' />
    <aside className='flex flex-col min-h-full bg-base-100 border-r border-base-content/8 is-drawer-close:w-14 is-drawer-open:w-56 transition-all duration-300 overflow-hidden'>
      <SidebarLogo />
      <SidebarNav />
      <SidebarFooter name='Peter' email='peter@email.com' />
    </aside>
  </div>
);
