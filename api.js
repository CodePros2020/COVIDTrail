import axios from "axios";
import Session from "./components/serviceSession.js";

const axiosApiInstance = axios.create();
const api = () => {

  axiosApiInstance.interceptors.request.use(
    async config => {
      const value = await Session.readData();

      config.baseURL = "http://localhost:8080/"
      config.headers = { 
        "Content-Type": "application/json",
        "Authorization": "Basic " + value
      }
      return config;
    },
    error => {
      Promise.reject(error)
  });
  
  // Response interceptor for API calls
  axiosApiInstance.interceptors.response.use((response) => {
    return response
  }, async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      const access_token = await refreshAccessToken();            
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
      return axiosApiInstance(originalRequest);
    }
    return Promise.reject(error);
  });

  return axiosApiInstance;
};

export default api();
