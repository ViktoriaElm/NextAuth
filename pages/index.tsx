import { useSession, signIn, signOut } from "next-auth/react"


export default function Home() {
  const { data: session } = useSession()
  if (session) {
    console.log('session=', session);
    console.log('user=',session.user);
    return <> 
    <div className="div-session-container">
      <div className="div-session">
        <div className="div-title">
        <h1 className="title-crm">Название CRM</h1>
        </div>
        <div className="div-esc">
{/* <h4 className="text-sign-out">✓ {session.user?.email}</h4> <br /> */}
{session?.user?.image && <img src={session?.user?.image}/>}
        <h4>{session?.user?.name}</h4>
        <button className="sign-out btn-esc" onClick={() => signOut()}>
          ❘➔
        </button>
        </div>
        
      </div>
    </div>
    </>
  }
  return <main className="container">
    <div className="block-inputs">
      <h1>RECRUITING AUTOMATION</h1>
      <h4>Для продолжения работы необходимо авторизоваться</h4>
    </div>
    <div className="block-name">
      <div className="div-name">
      <button className="sign-in" onClick={() => signIn()}>Sign in</button>
      </div>
    </div>
  </main>
}
