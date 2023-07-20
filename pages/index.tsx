import { useSession, signIn} from "next-auth/react";
import MyAccount from '../pages/myaccount.js'
import Nav from '../components/Nav.js';


export default function Home() {

  // const isAdmin: boolean = true;
  // const isAdmin = true;
  const { data: session } = useSession()
  if (session) {
    //   console.log('session=', session);
    //   console.log('user=', session.user);
    return (<>
      <Nav />
      <MyAccount />
    </>)
  }
  return (<>
    <main className="container">
      <div className="block-inputs">
        <h1>RECRUITING AUTOMATION</h1><br />
        <h4 className="action">Для продолжения работы необходимо авторизоваться</h4>
      </div>
      <div className="block-name">
        <div className="div-name">
          <button className="sign-in" onClick={() => signIn()}>Sign in</button>
        </div>
      </div>
    </main>
  </>)
}
