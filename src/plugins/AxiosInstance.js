import axios from "axios";

const axiosInstance = axios.create();
const { VUE_APP_API_URL: API_URL, VUE_APP_API_KEY: API_KEY } = process.env;

axiosInstance.defaults.baseURL = API_URL;
axiosInstance.defaults.params = {};
axiosInstance.defaults.params["apikey"] = API_KEY;

export default axiosInstance;
