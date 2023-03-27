import { useEffect, useRef } from "react";
import useAuthService from "../services/authService";
import { Navigate } from "react-router-dom";
import LoadingPage from "./LoadingPage";
import { toast } from "react-hot-toast";

export default function Logout() {
    const resetState = useAuthService((s) => s.resetState);
    const user = useAuthService((s) => s.user);
    const ran = useRef(false);

    useEffect(() => {
        !ran.current && resetState();
        !ran.current && toast.success("Logout Complete!");

        return () => {
            ran.current = true;
        };
    }, []);

    if (!user) return <Navigate to="/login" />;
    return <LoadingPage />;
}
