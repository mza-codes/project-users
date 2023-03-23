import { Link } from "react-router-dom";

export default function Home() {
    return (
        <section className="page gap-3">
            <h2 className="text-3xl">Welcome to Homepage</h2>
            <div className="col center gap-2">
                <Link className="bg-red-400 hover:bg-red-500 btn btn-hover" to="/signup">
                    SignUp
                </Link>
                <Link className="bg-green-400 hover:bg-green-500 btn btn-hover" to="/login">
                    LogIn
                </Link>
                <Link className="bg-cyan-400 hover:bg-cyan-500 btn btn-hover" to="/register-success">
                    Success
                </Link>
                <Link className="bg-fuchsia-400 hover:bg-fuchsia-500 btn btn-hover" to="/admin/login">
                    Admin Panel
                </Link>
            </div>
        </section>
    );
}
