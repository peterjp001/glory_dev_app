import Link from 'next/link';
import { ArrowDown, LucideIcon, LayoutDashboardIcon, LogOut, User2, Wrench } from 'lucide-react';

interface MenuItem {
  label: string;
  href: string;
  icon: LucideIcon;
  danger?: boolean;
}

interface UserDropdownProps {
  name: string;
  items: MenuItem[];
}

const menuItem =
  'flex items-center gap-3 px-3 py-2 rounded-xl text-sm transition-all cursor-pointer';

const UserDropdownComponent = ({ name, items }: UserDropdownProps) => (
  <div className='dropdown dropdown-end border border-base-content/8 rounded-xl'>
    <div
      tabIndex={0}
      role='button'
      className='flex items-center gap-2.5 px-3 py-1.5 rounded-xl hover:bg-base-200 transition-all cursor-pointer'
    >
      <div className='w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center'>
        <span className='text-primary text-xs font-bold'>{name[0].toUpperCase()}</span>
      </div>
      <span className='text-sm font-medium text-base-content/70 hidden sm:block'>{name}</span>
      <ArrowDown className='w-4 h-4 text-base-content/70' />
    </div>

    <ul
      tabIndex={-1}
      className='dropdown-content mt-2 z-30 w-48 p-1.5 rounded-2xl bg-base-100 border border-base-content/8 shadow-xl'
    >
      {items.map((item, i) => {
        const isDividerBefore = item.danger && i > 0;
        return (
          <li key={item.href}>
            {isDividerBefore && <div className='my-1.5 h-px bg-base-content/6 mx-2' />}
            <Link
              href={item.href}
              className={
                item.danger
                  ? `${menuItem} text-error/70 hover:text-error hover:bg-error/8`
                  : `${menuItem} text-base-content/70 hover:text-base-content hover:bg-base-200/60`
              }
            >
              <item.icon className='w-4 h-4' />
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  </div>
);

const userMenuItems = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboardIcon },
  { label: 'Profil', href: '/profile', icon: User2 },
  { label: 'Paramètres', href: '/settings', icon: Wrench },
  { label: 'Déconnexion', href: '/logout', icon: LogOut, danger: true },
];

const UserDropdown = () => <UserDropdownComponent name='Peter' items={userMenuItems} />;

export default UserDropdown;
// inside return:
