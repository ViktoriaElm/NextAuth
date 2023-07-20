import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react';

export default function App({ Component,
  pageProps: { session, ...pageProps }
}: AppProps) {
  return <SessionProvider session={session}>
    <Component {...pageProps} />
  </SessionProvider>;
}

const pages = [
  // { name: 'Home', src: '/' },
  // { name: 'Rick and Morty Characters', src: '/rickandmorty' },
  // { name: 'My Account', src: '/myaccount', test(session:any) { return !!session;} },
  { name: 'Admin', src: '/admin', test(session:any) { return 'admin'===session?.user?.role; } },

];