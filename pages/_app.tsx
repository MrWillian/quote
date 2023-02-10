import React from 'react';
import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';

import '../styles/index.css';

import { Nunito_Sans } from '@next/font/google'

const nunito = Nunito_Sans({ 
  subsets: ['latin'],
  weight: ['900', '700', '600', '400', '200'],
  variable: '--font-nunito',
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <main className={`${nunito.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  );
}

export default MyApp;
