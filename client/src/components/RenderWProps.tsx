import { lazy, Suspense, useEffect } from "react";
import UsersPage from "../pages/UsersPage";
import useApiStore from "../store/useApi";
// import Table from "./Table";
import TextLoader from "./TextLoader";

const Table = lazy(() => import("./Table"));

export default function PopulateWProps() {
    const loading = useApiStore((s) => s.isLoading);
    const getUsers = useApiStore((s) => s.getUsers);
    const users = useApiStore((s) => s.users);

    useEffect(() => {
        const controller = new AbortController();
        users.length <= 0 && getUsers(controller.signal);
        return () => controller.abort();
    }, []);

    if (loading) return <TextLoader />;
    else if (users.length <= 0)
        return (
            <div className="bg-red-1000 p-2">
                {<h2 className="font-semibold text-2xl">No Users Found!</h2>}
            </div>
        );
    else
        return (
            <Suspense fallback={<TextLoader />}>
                <section className="p-2 pt-[74px]">
                    <Table users={users} />
                </section>
            </Suspense>
        );
}
