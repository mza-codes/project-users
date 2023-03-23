import axios, { AxiosPromise } from "axios";

export const API = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL ?? `http://localhost:4000/api/v1`,
    timeout: 30 * 1000,
});

export async function fetchData(request: AxiosPromise) {
    try {
        const { data } = await request;
        return [null, data];
    } catch (err: any) {
        console.log(`Error Fetching Data: `, err);
        return [err, null];
    }
}
