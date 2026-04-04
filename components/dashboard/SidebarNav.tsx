import { BookOpen, Home, LayoutDashboard, Settings, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
export interface NavItem {
  icon: LucideIcon;
  label: string;
  tip: string;
  href: string;
}
export const navItems: NavItem[] = [
  { icon: Home, label: 'Accueil', tip: 'Accueil', href: '/' },
  { icon: BookOpen, label: 'Lectures', tip: 'Lectures', href: '/lectures' },
  { icon: LayoutDashboard, label: 'Dashboard', tip: 'Dashboard', href: '/dashboard' },
  { icon: Users, label: 'Communauté', tip: 'Communauté', href: '/community' },
  { icon: Settings, label: 'Paramètres', tip: 'Paramètres', href: '/settings' },
];
export const SidebarNav = () => (
  <ul className='menu menu-sm w-full grow px-2 py-3 gap-0.5'>
    {navItems.map(({ icon: Icon, label, tip }) => (
      <li key={label}>
        <button
          className='is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center gap-3 rounded-xl py-2.5 px-3 text-base-content/50 hover:text-base-content hover:bg-base-200/70 transition-all'
          data-tip={tip}
        >
          <Icon className='w-4 h-4 shrink-0' />
          <span className='is-drawer-close:hidden text-sm font-medium whitespace-nowrap'>
            {label}
          </span>
        </button>
      </li>
    ))}
  </ul>
);
