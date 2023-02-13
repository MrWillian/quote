import React, { ReactNode } from 'react';
import Head from 'next/head';
import favicon from '/public/favicon.ico';

type Props = {
  children?: ReactNode
  title?: string
}

const AuthLayout = ({ children, title = 'Quote App' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" href={favicon.src} />
    </Head>
    {children}
  </div>
)

export default AuthLayout;
