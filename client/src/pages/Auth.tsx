import Login from "../components/auth/Login";
import SignUp from "../components/auth/SignUp";

type Props = {
    signup?: boolean;
    login?: boolean
}

export default function Auth({ signup, login }: Props) {
    return (
        <section className="page" >
            {signup && <SignUp />}
            {login && <Login />}
        </section>
    )
}