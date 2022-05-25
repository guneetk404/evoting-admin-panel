import axios from "axios";
import { store } from "../state/store";

const axiosInstance = axios.create({
    baseURL: `${process.env.REACT_APP_HOST_URL_LINK}`,
});

axiosInstance.interceptors.request.use(
    function (config) {
        const state = store.getState();
        const token = state.auth.auth.token;
        if (token) {
            config.headers["Authorization"] = 'Bearer ' + token;
            config.headers["Content-Type"] = "application/json;multipart/form-data;application/x-www-form-urlencoded";
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default axiosInstance;