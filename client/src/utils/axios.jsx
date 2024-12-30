import axios from "axios";

const mainURL = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    withCredentials: true,
    // timeout: 10000,
})

export { mainURL }

