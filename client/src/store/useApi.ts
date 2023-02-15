import axios from "axios";
import toast from "react-hot-toast";
import { create } from "zustand";
import { API } from "./api";
let controller: AbortController;

const initial = {
    isLoading: false,
    users: []
};

const useApiStore = create<APIStore>()((set, get) => ({
    ...initial,
    setLoading(stat) {
        set((s) => ({
            ...s,
            isLoading: stat
        }));
    },
    cancelRequest() {
        controller?.abort();
    },
    handleError(err: any, alt?: string) {
        let msg = "Error In Request!"
        console.log(alt ?? msg, err);
        toast.error(err?.response?.data?.message
            ?? err?.message
            ?? alt ?? msg);
    },
    setField(field, value) {
        set((s) => ({
            ...s,
            [field]: value
        }));
    },
    async fetchData() {
        get().setLoading(true);
        const url = `https://randomuser.me/api?results=50`;
        try {
            const { data } = await axios.get(url, { signal: genSignal() });
            // toast.success("Data Fetching Success!");
            const status = await get().populateWServer(data);
            return status;
        } catch (err: any) {
            get().handleError(err, "Error fetching data from randomuser.me")
        } finally {
            get().setLoading(false);
        };
        return;
    },
    populateWServer: async (usersData) => {
        let stat = false;
        get().isLoading = true;
        try {
            const { data } = await API.post(`/users/add/bulk-users`,
                usersData, { signal: genSignal() });

            toast.success(data?.message ?? "Action Complete!");
            stat = true;
        } catch (err: any) {
            stat = false;
            get().handleError(err, "Error Populating data with Server");
        };
        get().isLoading = false;
        return stat;
    },
    async deleteData() {
        get().setLoading(true);
        try {
            const { data } = await API.delete(`/users/delete/bulk-users`,
                { signal: genSignal() });
            get().setField("users", []);

            toast.success(data?.message ?? "Deletion of Users Success!");
        } catch (err: any) {
            get().handleError(err, "Error Deleting Data!");
        } finally {
            get().setLoading(false);
        }; return;
    },
    async getUsers(signal) {
        get().setLoading(true);
        try {
            const { data } = await API.get(`/users/get/bulk-users`,
                { signal: signal });
            get().setField("users", data?.users ?? []);

            toast.success(data?.message ?? "Request for GetAllUsers Complete!");
        } catch (err: any) {
            get().handleError(err, "Error while getting bulk users!");
        } finally {
            get().setLoading(false);
        }; return;
    },
}));

function genSignal() {
    controller = new AbortController();
    return controller.signal;
};

type store = {
    isLoading: boolean
    users: Object[] | [any]
};

type field = keyof store;

interface APIStore extends store {
    populateWServer: (data: [Object]) => Promise<boolean>;
    setLoading: (stat: boolean) => void;
    fetchData: () => void;
    cancelRequest: () => void;
    deleteData: () => void;
    getUsers: (signal: AbortSignal) => void;
    handleError: (err: any, alt?: string) => void;
    setField: (field: field, value: any) => void;
};

export default useApiStore;