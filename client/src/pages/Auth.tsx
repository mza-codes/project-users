import { Link } from "react-router-dom";
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
        <section className="page gap-4">
            {signup && <SignUp />}
            {login && <Login />}
            {admin && <AdminLogin />}
            {adminSignup && <AdminSignUp />}

            {login && (
                <Link className="text-sm text-sky-500 hover:text-sky-400" to={"/signup"}>
                    Don't have an account ?
                </Link>
            )}

            {signup && (
                <Link className="text-sm text-sky-500 hover:text-sky-400" to={"/login"}>
                    Already have an Account ?
                </Link>
            )}

            {adminSignup && (
                <Link className="text-sm text-sky-500 hover:text-sky-400" to={"/admin/login"}>
                    Already have an Admin Account ?
                </Link>
            )}

            {admin && (
                <Link className="text-sm text-sky-500 hover:text-sky-400" to={"/admin/signup"}>
                    Don't have an Admin Account ?
                </Link>
            )}
        </section>
    );
}
