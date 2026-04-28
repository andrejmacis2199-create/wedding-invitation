import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Marck_Script, Manrope } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['cyrillic', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
});

const marck = Marck_Script({
  subsets: ['cyrillic', 'latin'],
  weight: ['400'],
  variable: '--font-marck',
});

const manrope = Manrope({
  subsets: ['cyrillic', 'latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  title: 'Андрей & Виктория · 07.08.2026',
  description: 'Приглашение на нашу свадьбу',
};

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#faf6f0',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html
      lang="ru"
      className={`${cormorant.variable} ${marck.variable} ${manrope.variable}`}
      style={{ colorScheme: 'light' }}
    >
      <body className="bg-cream text-warm-brown font-body antialiased">{children}</body>
    </html>
  );
}
