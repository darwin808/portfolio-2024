import React from 'react';
import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { data } from '@/lib/data';

export const metadata: Metadata = {
  title: data.metaData.page.title,
  description: data.metaData.page.description,
};
const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
