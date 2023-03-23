import { Link } from "react-router-dom";
import useAuthService from "../services/authService";

const linksWAuth = [
    {
        name: "Dashboard",
        path: "/dashboard",
    },
    {
        name: "Admin Dashboard",
        path: "/admin/dashboard",
    },
    {
        name: "Logout",
        path: "/logout",
    },
];

const links = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Login",
        path: "/login",
    },
    {
        name: "SignUp",
        path: "/signup",
    },
    {
        name: "Admin",
        path: "/admin/signup",
    },
];

export default function Header() {
    const isActive = useAuthService((s) => s.isActive);
    return (
        <header className="fixed h-[70px] bg-gray-800 text-white w-full row justify-between items-center gap-2">
            <b className="mx-4 md:text-4xl">Users -App</b>
            <ul className="row gap-4 mx-4">
                {isActive
                    ? linksWAuth.map((link) => (
                          <li key={link.name}>
                              <Link to={link.path}>{link.name}</Link>
                          </li>
                      ))
                    : links.map((link) => (
                          <li key={link.name}>
                              <Link to={link.path}>{link.name}</Link>
                          </li>
                      ))}
            </ul>
        </header>
    );
}
