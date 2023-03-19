import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useTranslation } from "react-i18next";

import favicon from '/public/favicon.ico';
import { QuoteAppIcon } from '../QuoteAppIcon';

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title }: Props) => {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <div className="px-10">
      <Head>
        <title>{title} | Quote App</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href={favicon.src} />
      </Head>
      <header>
        <nav className="flex items-center justify-between px-4 py-4 font-bold tracking-widest uppercase">
          <Link href="/">
            <QuoteAppIcon />
          </Link>
          <div className="flex justify-around w-1/2">
            <Link href="/contact" className={`hover:underline ${router.pathname === '/contact' && 'underline'}`}>{t('home.contact')}</Link>
            <Link href="/faq" className={`hover:underline ${router.pathname === '/faq' && 'underline'}`}>{t('home.faq')}</Link>
            <div className="flex items-center justify-between gap-2">
              <Link href="/auth/login" className="hover:underline">{t('common.button_signin')}</Link>
              <span className="font-thin">{'|'}</span>
              <a href="/auth/register" className="hover:underline">{t('common.button_signup')}</a>
            </div>
          </div>
        </nav>
      </header>
      {children}
    </div>
  );
}

export default Layout
