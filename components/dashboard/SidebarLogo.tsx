import { BookOpen } from 'lucide-react';

export const SidebarLogo = () => (
  <div className='flex items-center gap-3 px-3.5 h-16 border-b border-base-content/8 shrink-0'>
    <div className='w-7 h-7 rounded-lg bg-primary flex items-center justify-center shrink-0'>
      <BookOpen className='w-3.5 h-3.5 text-primary-content' />
    </div>
    <span className='font-serif font-semibold text-sm text-base-content is-drawer-close:hidden whitespace-nowrap'>
      24h Bible
    </span>
  </div>
);
