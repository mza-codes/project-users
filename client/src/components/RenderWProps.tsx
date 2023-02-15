import { useEffect } from "react";
import UsersPage from "../pages/UsersPage";
import useApiStore from "../store/useApi";
import Loader from "./Loader";

export default function PopulateWProps() {
    const loading = useApiStore(s => s.isLoading);
    const getUsers = useApiStore(s => s.getUsers);
    const users = useApiStore(s => s.users);

    useEffect(() => {
        const controller = new AbortController();
        getUsers(controller.signal);
        return () => controller.abort();
    }, []);

    if (loading) return <Loader color="black" />;
    else return (
        <UsersPage users={users} />
    );
};