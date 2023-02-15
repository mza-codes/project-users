import axios from "axios";
import toast from "react-hot-toast";
import { create } from "zustand";
import { API } from "./api";
let controller: AbortController;

const initial = {
    isLoading: false,
};

const useApiStore = create<APIStore>()((set, get) => ({
    ...initial,
    setLoading(stat) {
        set((s) => ({
            ...s,
            isLoading: stat
        }));
    },
    async fetchData() {
        get().setLoading(true);
        const url = `https://randomuser.me/api?results=10`;
        try {
            const { data } = await axios.get(url, { signal: genSignal() });
            console.log("DATA: ", data);
            toast.success("Data Fetching Success!");
            const status = await get().populateWServer(data);
            return status;
        } catch (err: any) {
            console.log("Error Fetching from randomuser.me: ", err);
            let msg = err?.message ?? `Error fetching data from randomuser.me`;
            toast.error(msg);
        } finally {
            get().setLoading(false);
        };
        return;
    },
    cancelRequest() {
        controller?.abort();
    },
    populateWServer: async (usersData) => {
        let stat = false;
        get().isLoading = true;
        try {
            const { data } = await API.post(`/users/add/bulk-users`,
                usersData, { signal: genSignal() });
                
            console.log("RESPONSE from API: ", data);
            toast.success("Action Complete!");
            stat = true;
        } catch (err: any) {
            stat = false;
            console.log("Error in PopulateWServer Req: ", err);
            toast.error(err?.response?.data?.message
                ?? err?.message
                ?? "Error Populating data with Server!");
        };
        get().isLoading = false;
        return stat;
    },
}));

function genSignal() {
    controller = new AbortController();
    return controller.signal;
}

type store = {
    isLoading: boolean
}

interface APIStore extends store {
    populateWServer: (data: [Object]) => Promise<boolean>;
    setLoading: (stat: boolean) => void;
    fetchData: () => void;
    cancelRequest: () => void;
};

export default useApiStore;