import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Invisible Character Viewer',
  description: 'Detect invisible and zero-width characters in text',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}