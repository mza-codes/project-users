import { AxiosPromise } from "axios";
import { toast } from "react-hot-toast";
import { create } from "zustand";
import { DBUser, DBUserAdmin } from "../@types";
import { API } from "./api";
let controller: AbortController;
let validate: AbortController;

const initialState: store = {
    user: null,
    loading: false,
    previous: { value: "", result: false },
    admin: null,
    isAdmin: false,
    isActive: false,
    DBUsers: [],
};

const useAuthService = create<AuthService>()((set, get) => ({
    ...initialState,
    setLoading(stat) {
        set((s) => ({
            ...s,
            loading: stat,
        }));
    },
    cancelRequest(req) {
        if (req === "sec") validate?.abort();
        else controller?.abort();
    },
    handleError(err: any, alt?: string) {
        let msg = "Error In Request!";
        console.log(alt ?? msg, err);
        toast.error(err?.response?.data?.message ?? err?.message ?? alt ?? msg);
    },
    setField(field, value) {
        set((s) => ({
            ...s,
            [field]: value,
        }));
    },
    setStore(data) {
        set((s) => ({
            ...s,
            ...data,
        }));
    },
    resetState() {
        set((s) => ({
            ...initialState,
        }));
    },

    async fetchData(request: AxiosPromise) {
        get().setLoading(true);
        let error = null,
            result = null;
        try {
            const { data } = await request;
            result = data;
        } catch (err: any) {
            get().handleError(err, `Error in Request!`);
            error = err;
        } finally {
            get().setLoading(false);
            return [error, result];
        }
    },

    async signUp(payload) {
        const [err, data] = await get().fetchData(
            API.post(`/auth/register`, payload, { signal: genSignal() })
        );
        if (data) {
            toast.success("User created Successfully!");
            return true;
        } else return false;
    },

    async validateUName(uname: string) {
        validate = new AbortController();
        get().previous.value = uname;

        const [err, data] = await get().fetchData(
            API.get(`/auth/check-user/${uname}`, { signal: validate.signal })
        );

        get().previous.result = data?.success ?? false;

        if (data?.success) {
            toast.success(data?.message ?? "Valid Username, Now SignUp!");
            return true;
        } else return false;
    },

    async adminLogin(formData) {
        const [err, data] = await get().fetchData(
            API.post(`/admin/auth/login`, formData, { signal: genSignal() })
        );
        if (data?.success) {
            get().setStore({
                admin: data?.user,
                isAdmin: true,
                isActive: true,
                user: null,
            });
            toast.success(data?.message ?? "Admin Login Complete!");
            return true;
        } else return false;
    },

    async adminSignup(formData) {
        const [err, data] = await get().fetchData(
            API.post(`/admin/auth/register`, formData, { signal: genSignal() })
        );
        if (data) {
            toast.success(data?.message ?? "Admin Login Complete!");
            return true;
        } else return false;
    },

    async getAllUsers(signal) {
        const [err, data] = await get().fetchData(API.get(`/admin/get-all-users`, { signal }));
        if (data?.success) {
            get().setStore({ DBUsers: data?.users ?? [] });
            return true;
        } else return false;
    },

    async toggleUser(user) {
        const [err, data] = await get().fetchData(
            API.put(`/admin/update-user/${user._id}`, { verified: !user.verified }, { signal: genSignal() })
        );
        if (data?.success) {
            get().getAllUsers(genSignal());
            toast.success(`One User updated Successfully!`);
            return true;
        } else return false;
    },

    async loginUser(formData) {
        const [err, data] = await get().fetchData(API.post(`/auth/login`, formData, { signal: genSignal() }));
        if (data?.success) {
            get().setStore({
                user: data?.user,
                isActive: true,
                isAdmin: false,
                admin: null,
            });
            toast.success(data?.message ?? "User Login Complete!");
            return { isLoggedIn: true, user: data?.user };
        } else return { isLoggedIn: false, user: null };
    },

    async updateUser(id, payload) {
        const [err, data] = await get().fetchData(
            API.put(`/admin/update-user/${id}`, payload, { signal: genSignal() })
        );
        if (data?.success) {
            get().setStore({ user: data?.user });
            toast.success(`User updated Successfully!`);
            return true;
        } else return false;
    },
}));

export default useAuthService;

function genSignal() {
    controller = new AbortController();
    return controller.signal;
}

interface store {
    user: null | DBUser;
    loading: boolean;
    previous: {
        value: string;
        result: boolean;
    };
    admin: null | DBUserAdmin;
    isAdmin: boolean;
    isActive: boolean;
    DBUsers: DBUser[] | [];
}

type field = keyof store;

export interface AuthService extends store {
    signUp: (data: any) => Promise<boolean>;
    setLoading: (stat: boolean) => void;
    cancelRequest: (req?: "main" | "sec") => void;
    handleError: (err: any, alt?: string) => void;
    setField: (field: field, value: any) => void;
    setStore: (data: Partial<store>) => void;
    fetchData: (request: AxiosPromise) => Promise<[any, any]>;
    validateUName: (uname: string) => Promise<boolean>;
    adminLogin: (formdata: any) => Promise<boolean>;
    adminSignup: (formData: any) => Promise<boolean>;
    getAllUsers: (signal: AbortSignal) => Promise<boolean>;
    toggleUser: (user: DBUser) => Promise<boolean>;
    loginUser: (data: any) => Promise<{ isLoggedIn: boolean; user: DBUser | null }>;
    updateUser: (id: string, payload: Partial<DBUser>) => Promise<boolean>;
    resetState: () => void;
}
