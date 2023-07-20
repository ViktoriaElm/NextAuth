import Link from "next/link";
import Image from 'next/image';
import { useSession, signOut } from "next-auth/react";

export default function Nav() {
  const { data: session } = useSession()
  if (session) {
    console.log('session=', session);
    console.log('user=', session.user);

    return (<>
      <div className="div-session-container">
        <nav className="nav">
          <div class="logo">
            <Image
              src="/лого без названия.png"
              width={100}
              height={60}
              alt="logo" />
          </div>
          <div class="menu-main">
            <div class="menu">
              <Link href="/ListOfCandidates">
                <div className="btn-menu">
                  <h5>База</h5>
                </div>
              </Link>
            </div>
            <div class="menu">
              <Link href="/">
                <div className="btn-menu">
                  <h5>Вакансии</h5>
                </div>
              </Link>
            </div>
            <div class="menu">
              <Link href="/">
                <div className="btn-menu">
                  <h5>Отчеты</h5>
                </div>
              </Link>
            </div>
            <div class="menu">
              <Link href="/">
                <div className="btn-menu">
                  <h5>Шаблоны</h5>
                </div>
              </Link>
            </div>
          </div>
          <div class="menu-exit">
            <h5>{session?.user?.name}</h5>
            <button className="sign-out btn-esc" onClick={() => signOut()}>
              ❘➔
            </button>
          </div>
        </nav>
      </div>
    </>)
  }
}