import React from 'react';
import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { QueryClient, QueryClientProvider } from 'react-query'

import { Nunito_Sans } from '@next/font/google'
import { AuthProvider } from '../contexts/AuthContext';
import { CodeConfirmationProvider } from '../contexts/CodeContext';
import '../styles/index.css';

const queryClient = new QueryClient();
const nunito = Nunito_Sans({ 
  subsets: ['latin'],
  weight: ['200', '400', '600', '700', '900'],
  variable: '--font-nunito',
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <CodeConfirmationProvider>
            <main className={`${nunito.variable} font-sans`}>
              <Component {...pageProps} />
            </main>
          </CodeConfirmationProvider>
        </AuthProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
}

export default MyApp;
