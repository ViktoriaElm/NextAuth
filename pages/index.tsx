import { useSession } from "next-auth/react";
import Base from '../components/Base.js'
import SignIn from '../components/SignIn.js'

export default function Home() {
  // const isAdmin: boolean = true;
  // const isAdmin = true;
  const { data: session } = useSession()
  if (session) {
    //   console.log('session=', session);
    //   console.log('user=', session.user);
    return <Base />;
  }
  return <SignIn />;
}
