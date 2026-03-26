'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface MenuItemProps {
  href: string;
  label: string;
}

const MenuItem = ({ href, label }: MenuItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href; // check if current path matches href

  return (
    <li>
      <Link
        href={href}
        className={`
          px-4 py-2 rounded-md text-sm font-medium
          transition-all duration-200
          hover:bg-gray-200 hover:text-gray-900
          dark:hover:bg-gray-700 dark:hover:text-white
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
          gap-2
          ${isActive ? 'underline decoration-2 decoration-primary' : ''}
        `}
      >
        {label}
      </Link>
    </li>
  );
};

export default MenuItem;
