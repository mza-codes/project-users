import { btnCls } from ".";
import useApiStore from "../store/useApi";

export default function CancelButton() {
    const cancelRequest = useApiStore((s) => s.cancelRequest);
    const loading = useApiStore((s) => s.isLoading);
    return (
        <div className="fixed bottom-1 right-1 z-40">
            <button title="Cancel Request"
                disabled={!loading}
                onClick={cancelRequest}
                className={`${btnCls} bg-red-700 text-zinc-50 font-medium text-sm`}
            >
                Cancel
            </button>
        </div>
    );
}
