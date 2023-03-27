import { useEffect, useRef } from "react";
import Users from "../components/dashboard/Users";
import useAuthService from "../services/authService";
import LoadingPage from "./LoadingPage";

export default function AdminDashboard() {
    const loading = useAuthService((s) => s.loading);
    const req = useRef(new AbortController());
    const getAllUsers = useAuthService((s) => s.getAllUsers);
    const users = useAuthService((s) => s.DBUsers);

    useEffect(() => {
        getAllUsers(req.current.signal);
        return () => {
            req.current?.abort();
        };
    }, []);

    if (loading || users.length <= 0) return <LoadingPage />;
    return (
        <section className="page">
            <h2 className="text-4xl py-2 my-6">Welcome to Dashboard!</h2>
            <Users users={users} />
        </section>
    );
}
