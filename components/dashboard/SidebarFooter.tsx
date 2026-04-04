interface SidebarFooterProps {
  name: string;
  email: string;
}

export const SidebarFooter = ({ name, email }: SidebarFooterProps) => (
  <div className='p-3 border-t border-base-content/8 shrink-0'>
    <div className='flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-base-200/70 transition-all cursor-pointer'>
      <div className='w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center shrink-0'>
        <span className='text-primary text-[10px] font-bold'>{name[0].toUpperCase()}</span>
      </div>
      <div className='is-drawer-close:hidden min-w-0'>
        <p className='text-xs font-semibold text-base-content truncate'>{name}</p>
        <p className='text-[10px] text-base-content/40 truncate'>{email}</p>
      </div>
    </div>
  </div>
);
