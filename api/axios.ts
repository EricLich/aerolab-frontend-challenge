import axios, { RawAxiosRequestHeaders } from "axios";
const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(async (request) => {
  const token = process.env.NEXT_PUBLIC_API_AUTH_TOKEN
  if (token && request.headers) {
    (request.headers as RawAxiosRequestHeaders)["Authorization"] = `Bearer ${token}`;
  }
  return request;
});

export default axiosInstance;
