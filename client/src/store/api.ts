import axios from "axios";

const API = axios.create({
    // baseURL: `${process.env?.VITE_APP_API_URL}/api/v1`,
    baseURL: `https://users-api.up.railway.app/api/v1`,
    timeout: (1000 * 60) * 30
});

export { API };