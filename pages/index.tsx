import { useSession, signIn, signOut } from "next-auth/react"


export default function Home() {
  const { data: session } = useSession()
  if (session) {
    console.log('session=', session);
    console.log('user=',session.user);
    return <> <div className="div-container">

      <h4 className="text-sign-out">Вы авторизовались как {session.user?.email}</h4> <br />
      {session?.user?.image && <img src={session?.user?.image}/>}
      {session?.user?.name}

      <button className="sign-out" onClick={() => signOut()}>Sign out</button>
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
