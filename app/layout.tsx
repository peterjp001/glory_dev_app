import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import './globals.css';
import { CustomThemeProvider } from '@/components/providers/ThemeProvider';
// import DisableRightClick from '@/components/global/DisableRightClick';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* <DisableRightClick /> */}
        <CustomThemeProvider>{children}</CustomThemeProvider>
      </body>
    </html>
  );
}
