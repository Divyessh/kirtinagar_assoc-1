import React from 'react';
import './globals.css';
import { Poppins } from 'next/font/google';
import AppLayout from './app-layout';

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Kiritinagar Timber Works',
  description: 'All in Stop for all your furniture needs',
};

// eslint-disable-next-line react/prop-types
export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="mytheme">
      <script async src="https://platform.twitter.com/widgets.js" charset="utf-8" />
      <body className={poppins.className}>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
