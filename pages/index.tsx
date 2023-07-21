import { useSession, signIn } from "next-auth/react";
import Base from '../components/Base.js'

export default function Home() {

  // const isAdmin: boolean = true;
  // const isAdmin = true;
  const { data: session } = useSession()
  if (session) {
    //   console.log('session=', session);
    //   console.log('user=', session.user);
    return (<>
      <Base />
    </>)
  }
  return (<>
    <main className="login-container">
      <div className="login-form">
        <div className="block-title">
          <h1 className="login-title">RECRUITING AUTOMATION</h1><br />
        </div>
        <div className="login-block-btns">
          <div className="div-block-btns">
            <button className="sign-in" onClick={() => signIn()}>Вход</button>
            <button className="sign-up" onClick={() => signIn()}>Регистрация</button>
          </div>
        </div>
      </div>
    </main>
  </>)
}
