import axios from "axios";
import Cookies from "js-cookie";

const BACKEND_BASE_URL = "https://daww.azurewebsites.net";

const getCustomTokens = () => {
  const accessToken = Cookies.get("accessToken");
  return { accessToken };
};

const setCustomTokens = (accessToken) => {
  Cookies.set("accessToken", accessToken);
};

const clearCustomTokens = () => {
  Cookies.remove("accessToken");
};

const axiosInstance = axios.create({
  baseURL: BACKEND_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const { accessToken } = getCustomTokens();

    if (accessToken) {
      config.headers.Authorization = `Token ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config;

    // If 401 Unauthorized, clear tokens and redirect to login
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      clearCustomTokens();
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
