import Link from "next/link";
import Image from 'next/image';
import { useSession, signIn, signOut } from "next-auth/react";

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
                <Image
                  src="/11319877.png"
                  width={30}
                  height={25}
                  alt="base" />
              </Link>
              <Link href="/ListOfCandidates">
                <h5>База</h5>
              </Link>
            </div>
            <div class="menu">
              <Link href="/">
                <Image
                  src="/11319714.png"
                  width={30}
                  height={25}
                  alt="vacancy" />
              </Link>
              <Link href="/">
                <h5>Вакансии</h5>
              </Link>
            </div>
            <div class="menu">
              <Link href="/">
                <Image
                  src="/11319834.png"
                  width={30}
                  height={25}
                  alt="reports" />
              </Link>
              <Link href="/">
                <h5>Отчеты</h5>
              </Link>
            </div>
            <div class="menu">
              <Link href="/">
                <Image
                  src="/11319735.png"
                  width={30}
                  height={25}
                  alt="templates" />
              </Link>
              <Link href="/">
                <h5>Шаблоны</h5>
              </Link>
            </div>
          </div>
          <div class="menu-exit">

            <h5>{session?.user?.name}</h5>
            <button className="sign-out btn-esc" onClick={() => signOut()}>
              ❘➔
            </button>

            {/* <div>
          <Link href="/"><b>Админ</b></Link>
        </div>

        <div>
          <Link href="/">
            <img src="imgs/free-icon-logout-158730.png" alt="people" />
          </Link>
        </div> */}
          </div>
        </nav>
      </div>
    </>)
  }
}