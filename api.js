import axios from "axios";
import Session from "./components/serviceSession.js";

const axiosApiInstance = axios.create();
const api = () => {
  axiosApiInstance.interceptors.request.use(
    async (config) => {
      const value = await Session.readData();

      config.baseURL = "http://covidtrail-backend.azurewebsites.net/";
      config.headers = {
        "Content-Type": "application/json",
        Authorization: "Basic " + value,
      };
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );

  // Response interceptor for API calls
  axiosApiInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    async function (error) {
      const originalRequest = error.config;
      if (error.response.status === 403 && !originalRequest._retry) {
        originalRequest._retry = true;
        const access_token = await refreshAccessToken();
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + access_token;
        return axiosApiInstance(originalRequest);
      }
      return Promise.reject(error);
    }
  );

  return axiosApiInstance;
};

export default api();

// import axios from "axios";
// import Session from "./sessionService";

// const api = () => {
//   var token = "";
//   const defaultOptions = {
//     baseURL: "http://covidtrail-backend.azurewebsites.net/",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };
//   var header = new Headers();
//   // Create instance
//   let instance = axios.create(defaultOptions);
//   instance.interceptors.request.use(function (config) {
//     const token = Session.getToken('COVIDTrail');
//     console.log('token inside api', token);
//     if (token != null) {
//       config.headers.Authorization = token ? `Basic ${token}` : "";
//     }
//     return config;
//   });

//   return instance;
// };

// export default api();
