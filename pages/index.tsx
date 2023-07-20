// import { useSession, signIn, signOut } from "next-auth/react";
import MyAccount from '../pages/myaccount.js'
import Nav from '../components/Nav.js';


export default function Home() {
  // const isAdmin: boolean = true;
  // const isAdmin = true;
  // const { data: session } = useSession()
  // if (session) {
  //   console.log('session=', session);
  //   console.log('user=', session.user);
    return (<>
      {/* <div className="div-session-container"> */}



<Nav />


        {/* <div className="div-session">

          <div className="div-title">
            <h1 className="title-crm">LOGO</h1>
          </div>

          <Nav isAdmin={isAdmin} />

          <div className="div-esc">
            {session?.user?.image && <img src={session?.user?.image} />}
            <h4>{session?.user?.name}</h4>
            <button className="sign-out btn-esc" onClick={() => signOut()}>
              ❘➔
            </button>
          </div>
        </div> */}
        <MyAccount/>







        
      {/* </div> */}
    </>)
  }

  // return (<>
  // <main className="container">
  //   <div className="block-inputs">
  //     <h1>RECRUITING AUTOMATION</h1><br/>
  //     <h4 className="action">Для продолжения работы необходимо авторизоваться</h4>
  //   </div>
  //   <div className="block-name">
  //     <div className="div-name">
  //       <button className="sign-in" onClick={() => signIn()}>Sign in</button>
  //     </div>
  //   </div>
  // </main>
  // </>)
// }
