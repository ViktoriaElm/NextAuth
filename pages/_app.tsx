import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react';
import Nav from '@/components/Nav';

// import { useState } from 'react';

export default function App({ Component,
  pageProps: { session, ...pageProps }
}: AppProps) {
  return <SessionProvider session={session}>
    <header>
      <Nav />
    </header>
    <main className="login-container">
      <Component {...pageProps} />
      
 </main>
  </SessionProvider>;
}

const pages = [
  { name: 'My Account', src: '/myaccount', test(session: any) { return !!session; } },
  { name: 'Admin', src: '/admin', test(session: any) { return 'admin' === session?.user?.role; } },

];