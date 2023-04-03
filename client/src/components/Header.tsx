import { Link, useLocation } from "react-router-dom";
import useAuthService from "../services/authService";

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
    const isAdmin = useAuthService((s) => s.isAdmin);

    const linksWAuth = [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "Dashboard",
            path: "/dashboard",
        },
        isAdmin
            ? {
                  name: "Admin Dashboard",
                  path: "/admin/dashboard",
              }
            : {
                  name: "Profile",
                  path: "/profile",
              },
        {
            name: "Logout",
            path: "/logout",
        },
    ];

    return (
        <header className="fixed h-[70px] header-bg text-white w-full row justify-between items-center gap-2">
            <b className="mx-4 md:text-4xl">Users -App</b>
            <ul className="row gap-4 mx-4">
                {isActive
                    ? linksWAuth.map((link) => <HeaderLink key={link.name} link={link} />)
                    : links.map((link) => <HeaderLink key={link.name} link={link} />)}
            </ul>
        </header>
    );
}

function HeaderLink({ link }: { link: typeof links[0] }) {
    const { pathname } = useLocation();
    return (
        <li className={`page-link ${pathname === link.path && "active"}`}>
            <Link to={link.path}>{link.name}</Link>
        </li>
    );
}
