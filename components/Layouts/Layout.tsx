import React, { ReactNode } from 'react';
import Head from 'next/head';
import favicon from '/public/favicon.ico';
import { MainBar } from '../Bars';

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title }: Props) => (
  <div className="px-10">
    <Head>
      <title>{title} | Quote App</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" href={favicon.src} />
      <script 
        async 
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2147711301878242"
        crossOrigin="anonymous"
      >  
      </script>
    </Head>
    <header>
      <MainBar />
    </header>
    {children}
  </div>
);


export default Layout
