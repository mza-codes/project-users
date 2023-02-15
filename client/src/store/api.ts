import axios from "axios";

const API = axios.create({
    // baseURL: `${process.env?.VITE_APP_API_URL}/api/v1`,
    baseURL: `http://localhost:5000/api/v1`,
    timeout: (1000 * 60) * 30
});

export { API };