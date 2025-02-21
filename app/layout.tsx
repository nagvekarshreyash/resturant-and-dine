import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display } from 'next/font/google';
import { WhatsAppButton } from '@/components/WhatsAppButton';

const playfair = Playfair_Display({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Padaria Prazeres - Craft. Comfort. Community.',
  description: 'A slice of Europe on the sandy shores of Goa',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={playfair.className}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}