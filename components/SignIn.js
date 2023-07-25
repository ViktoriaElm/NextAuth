import { signIn } from "next-auth/react";

export default function SignIn() {
    return (<>
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
    </>)
}
