'use client';

import { useLayoutEffect, useRef } from 'react';

export const DrawerToggle = () => {
  const ref = useRef<HTMLInputElement>(null);

  useLayoutEffect(() => {
    if (ref.current) {
      ref.current.checked = window.innerWidth >= 1024;
    }
  }, []);

  return <input ref={ref} id='sidebar-toggle' type='checkbox' className='drawer-toggle' />;
};
