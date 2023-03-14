import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';

import favicon from '/public/favicon.ico';
import { QuoteAppIcon } from '../QuoteAppIcon';

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Quote App' }: Props) => {
  const router = useRouter();

  return (
    <div className="px-10">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href={favicon.src} />
      </Head>
      <header>
        <nav className="flex items-center justify-between py-4 px-4 uppercase font-bold tracking-widest">
          <Link href="/">
            <QuoteAppIcon />
          </Link>
          <div className="flex justify-around w-1/2">
            <Link href="/contact" className={`hover:underline ${router.pathname === '/contact' && 'underline'}`}>Contact</Link>
            <Link href="/about" className="hover:underline">FAQ</Link>
            <div className="flex items-center justify-between gap-2">
              <Link href="/auth/login" className="hover:underline">LOGIN</Link>
              <span className="font-thin">{'|'}</span>
              <a href="/auth/register" className="hover:underline">SIGN UP</a>
            </div>
          </div>
        </nav>
      </header>
      {children}
    </div>
  );
}

export default Layout
