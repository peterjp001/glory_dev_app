import type { Metadata } from 'next';
import { DM_Mono, Lora, DM_Sans } from 'next/font/google';

import './globals.css';
import { CustomThemeProvider } from '@/components/providers/ThemeProvider';

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
});

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: '24h Bible',
  description: 'Read the Bible in your own schedule.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang='en' data-theme='light'>
      <body
        className={`${dmMono.variable} ${lora.variable} ${dmSans.variable} font-sans antialiased`}
      >
        <CustomThemeProvider>{children}</CustomThemeProvider>
      </body>
    </html>
  );
}
