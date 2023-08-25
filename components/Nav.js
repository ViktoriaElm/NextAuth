import Link from "next/link";
import Image from 'next/image';
import { useSession, signOut } from "next-auth/react";


export default function Nav() {
  const { data: session } = useSession()
  // const { role: admin } = useSession()
  if (session) {
    // console.log('session=', session);
    // console.log('user=', session.user);

    return (<>
      <div className="div-session-container">
        <nav className="nav">
          <div className="logo">
            <Image
              src="/Безымянный-1.png"
              width={35}
              height={30}
              alt="logo" />
          </div>
          <div className="menu-main">
            <div className="menu">
              <Link href="/">
                <div className="btn-menu">
                  <h5>База</h5>
                </div>
              </Link>
            </div>
            <div className="menu">
              <Link href="/vacancies">
                <div className="btn-menu">
                  <h5>Вакансии</h5>
                </div>
              </Link>
            </div>
            <div className="menu">
              <Link href="/reports">
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
            <div className="menu">
              <Link href="/myaccount">
                <div className="btn-menu">
                  <h5>Аккаунт</h5>
                </div>
              </Link>
            </div>
           
            {'admin' === session?.user?.role ?
             <div className="menu">
              <Link href="/admin">
                <div className="btn-menu">
                <h5>Админ</h5>
                </div>
              </Link>
            </div> : ''
             }    

          </div>
          <div className="menu-exit">
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