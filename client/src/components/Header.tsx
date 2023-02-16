import { Link } from "react-router-dom";
import { btnCls } from ".";

export default function Header() {
    return (
        <header className="fixed w-full top-0 bg-gradient-to-r from-cyan-300 via-sky-500 to-indigo-200 shadow-xl hover:shadow-2xl">
            <section className="mx-2 flex flex-row items-center justify-between h-[70px]">
                <span className="font-medium uppercase text-2xl font-kanit">Users Api</span>
                <nav className="space-x-2">
                    <Link to="/" className={`${btnCls} bg-white`}>
                        Home
                    </Link>
                    <Link to="/users" className={`${btnCls} bg-white`}>
                        Users
                    </Link>
                </nav>
            </section>
        </header>
    );
}
