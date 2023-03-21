import React from 'react';
import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Nunito_Sans } from '@next/font/google'
import { AuthProvider } from '../contexts/AuthContext';
import { CodeConfirmationProvider } from '../contexts/CodeContext';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import LanguageDetector from "i18next-browser-languagedetector";
import resources from '../public/locales/resources.js';
import '../styles/index.css';

var detectionOptions = {
  order: ["navigator", "queryString", "path", "cookie"],
  caches: []
};

i18next.use(LanguageDetector).init({
  resources,
  detection: detectionOptions,
  fallbackLng: "pt"
});

const queryClient = new QueryClient();
const nunito = Nunito_Sans({ 
  subsets: ['latin'],
  weight: ['200', '400', '600', '700', '900'],
  variable: '--font-nunito',
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <I18nextProvider i18n={i18next}>
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
    </I18nextProvider>
  );
}

export default MyApp;
