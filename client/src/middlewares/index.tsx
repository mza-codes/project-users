import { Navigate } from "react-router-dom";
import useAuthService from "../services/authService";

type Props = {
    children: any;
};

export function IsAdmin({ children }: Props) {
    const isAdmin = useAuthService((s) => s.isAdmin);
    console.log(`Status: `, isAdmin);

    if (isAdmin) return children;
    else return <Navigate to={"/404"} />;
}

export function IsUserActive({ children }: Props) {
    const isActive = useAuthService((s) => s.isActive);
    console.log(`Status: `, isActive);

    if (isActive) return children;
    else return <Navigate to={"/login"} />;
}

export function IsLoggedOut({ children }: Props) {
    const isActive = useAuthService((s) => s.isActive);
    console.log(`Status: `, isActive);

    if (!isActive) return children;
    else return <Navigate to={"/404"} />;
}
