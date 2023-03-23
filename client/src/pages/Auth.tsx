import AdminLogin from "../components/auth/AdminLogin";
import AdminSignUp from "../components/auth/AdminSignUp";
import Login from "../components/auth/Login";
import SignUp from "../components/auth/SignUp";

type Props = {
    signup?: boolean;
    login?: boolean;
    admin?: boolean;
    adminSignup?: boolean;
};

export default function Auth({ signup, login, admin, adminSignup }: Props) {
    return (
        <section className="page">
            {signup && <SignUp />}
            {login && <Login />}
            {admin && <AdminLogin />}
            {adminSignup && <AdminSignUp />}
        </section>
    );
}
