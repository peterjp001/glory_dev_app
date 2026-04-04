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
  title: {
    default: '24h Bible — Tabernacle de Gloire',
    template: '%s ',
  },
  description:
    'Suivez le plan de lecture biblique annuel de Tabernacle de Gloire. Lisez, méditez et soumettez vos dévotions quotidiennes.',
  applicationName: '24h Bible',
  keywords: ['Bible', 'dévotions', 'plan de lecture', 'Tabernacle de Gloire', 'lecture biblique'],
  authors: [{ name: 'Tabernacle de Gloire' }],
  creator: 'Tabernacle de Gloire',
  metadataBase: new URL('https://24hbible.vercel.app/'), // à ajuster
  openGraph: {
    title: '24h Bible — Tabernacle de Gloire',
    description:
      'Suivez le plan de lecture biblique annuel de Tabernacle de Gloire. Lisez, méditez et soumettez vos dévotions quotidiennes.',
    siteName: '24h Bible',
    locale: 'fr_FR',
    alternateLocale: ['en_US', 'ht_HT', 'es_ES'],
    type: 'website',
  },
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
