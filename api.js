import axios from "axios";

const api = () => {
  const defaultOptions = {
    baseURL: `http://covidtrail-backend.azurewebsites.net`,
    // if server runs on local, replace links
    // baseURL: `http://localhost:3000`,
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Create instance
  let instance = axios.create(defaultOptions);

  // Set the AUTH token for any request (in future)
  // Token shall return null if not assigned, so public api's wont recieve it
  //   instance.interceptors.request.use(function (config) {
  //     const token = Session.getToken();
  //     if (token != null) {
  //       config.headers.Authorization = token ? `Bearer ${token}` : "";
  //     }
  //     return config;
  //   });

  return instance;
};

export default api();
