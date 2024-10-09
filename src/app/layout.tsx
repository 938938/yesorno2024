import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '예, 혹은 아니오!',
  description: '질문을 하고 답변을 받아보세요!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body>{children}</body>
    </html>
  );
}
