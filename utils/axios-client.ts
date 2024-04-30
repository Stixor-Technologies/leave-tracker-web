import axios, { AxiosInstance } from "axios";
import { BASE_URL } from "./constants";

export const axiosClient: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

// TOKEN INTERCEPTOR

// Uncomment when token is being stored locally.

// axiosClient.interceptors.request.use(
//   (config) => {
//     const token = store.getState().auth?.accessToken;
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   },
// );
