import React, { ReactNode } from 'react';
import Head from 'next/head';
import favicon from '/public/favicon.ico';
import { Sidebar } from '../Bars/Sidebar';

type Props = {
  children?: ReactNode
  title?: string
}

const DashboardLayout = ({ children, title = 'Quote App' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
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
    <div className="flex w-full h-screen overflow-hidden">
      <Sidebar />
      {children}
    </div>

  </div>
)

export default DashboardLayout;
