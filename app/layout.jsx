import React from 'react';
import './globals.css';
import { Poppins } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import NextSessionProvider from '../components/Provider';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

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
      <body className={poppins.className}>
        <NextSessionProvider>
          <NextTopLoader />
          <Navbar />
          {children}
          <Footer />
        </NextSessionProvider>
      </body>
    </html>
  );
}
