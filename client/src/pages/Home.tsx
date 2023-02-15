import { Link } from "react-router-dom";
import { btnCls } from "../components";
import Loader from "../components/Loader";
import useApiStore from "../store/useApi";

export default function Home() {
    const loading = useApiStore((s) => s.isLoading);
    const fetchData = useApiStore((s) => s.fetchData);
    const deleteData = useApiStore(s => s.deleteData);

    console.log("ENV:", process.env?.VITE_APP_API_URL);

    return (
        <section className="flex flex-col items-center gap-2">
            <div className="flex flex-row flex-wrap gap-3">
                <button
                    disabled={loading}
                    onClick={fetchData}
                    type="button"
                    className={`${btnCls} bg-orange-600 text-zinc-900 `}
                >
                    Fetch Users
                </button>
                <button
                    type="button"
                    onClick={deleteData}
                    disabled={loading}
                    className={`${btnCls}  bg-rose-700 text-zinc-900 `}
                >
                    Delete Users
                </button>
                <Link to="/users"
                    type="button"
                    className={`${btnCls} bg-green-600 text-zinc-900 `}
                >
                    User Details
                </Link>
            </div>
            {loading && (
                <div className="bg-white bg-opacity-20 my-3 p-3 rounded-sm">
                    <h2 className="font-semibold">Please Wait while Loading..</h2>
                    <Loader color="#111" />
                </div>
            )}
        </section>
    );
}


