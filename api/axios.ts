import axios, { AxiosRequestHeaders } from "axios";
const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(async (request) => {
  const token = process.env.NEXT_PUBLIC_API_AUTH_TOKEN
  if (token && request.headers) {
    (request.headers as AxiosRequestHeaders)["Authorization"] = `Bearer ${token}`;
  }
  return request;
});

export default axiosInstance;
