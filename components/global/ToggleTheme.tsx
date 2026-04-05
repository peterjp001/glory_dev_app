'use client';

import { useTheme } from 'next-themes';

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <button
      className='btn btn-sm btn-ghost rounded-full border hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-xl'
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label='Toggle theme'
      suppressHydrationWarning
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  );
}
