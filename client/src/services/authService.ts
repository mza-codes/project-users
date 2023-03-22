import { create } from "zustand";

const initialState = {
    user: null
};

const useAuthService = create<AuthService>()((set, get) => ({
    ...initialState,
    async signUp(data) {

        return true;
    },
}));

export default useAuthService;

interface store {
    user: null | any
};

export interface AuthService extends store {
    signUp: (data: any) => Promise<boolean>;
};