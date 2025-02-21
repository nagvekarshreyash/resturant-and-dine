import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display } from 'next/font/google';
import { WhatsAppButton } from '@/components/WhatsAppButton';

const playfair = Playfair_Display({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Miri - Global Fusion Dining',
  description: 'A unique innovative culinary experience in your neighborhood',
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