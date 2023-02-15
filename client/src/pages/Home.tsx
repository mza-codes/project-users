import Loader from "../components/Loader";
import useApiStore from "../store/useApi";

export default function Home() {
    const loading = useApiStore((s) => s.isLoading);
    const fetchData = useApiStore((s) => s.fetchData);

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
                    disabled={loading}
                    className={`${btnCls}  bg-rose-700 text-zinc-900 `}
                >
                    Delete Users
                </button>
                <button
                    type="button"
                    disabled={loading}
                    className={`${btnCls} bg-green-600 text-zinc-900 `}
                >
                    User Details
                </button>
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

var btnCls = `hover:bg-opacity-90 bg-opacity-50 px-4 py-2 font-semibold disabled:cursor-not-allowed disabled:bg-zinc-500`;
