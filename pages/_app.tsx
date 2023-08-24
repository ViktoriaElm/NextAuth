import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react';
import Nav from '@/components/Nav';

export default function App({ Component,
  pageProps: { session, ...pageProps }
}: AppProps) {

  const isMyAccountVisible = pages[0].test(session);
  const isAdminVisible = pages[1].test(session);

  return <SessionProvider session={session}>
    <header>
      <Nav />
    </header>
    <main className="login-container">
      {/* <Component {...pageProps} /> */}
      <Component {...pageProps} />
        
        {isMyAccountVisible && (
          <a href={pages[0].src}>{pages[0].name}</a>
        )}

        {isAdminVisible && (
          <a href={pages[1].src}>{pages[1].name}</a>
        )}

    </main>
  </SessionProvider>;
}

const pages = [
  { name: 'My Account', src: '/myaccount', test(session: any) { return !!session; } },
  { name: 'Admin', src: '/admin', test(session: any) { return 'admin' === session?.user?.role; } },

];