import axios from "axios";
import Session from "./sessionService";

const api = () => {
  var token = "";
  const defaultOptions = {
    baseURL: "http://covidtrail-backend.azurewebsites.net/",
    headers: {
      "Content-Type": "application/json",
    },
  };
  // Create instance
  let instance = axios.create(defaultOptions);
  instance.interceptors.request.use(function (config) {
    const token = Session.getToken();
    if (token != null) {
      config.headers.Authorization = token ? `Basic ${token}` : "";
    }
    return config;
  });

  return instance;
};

export default api();
