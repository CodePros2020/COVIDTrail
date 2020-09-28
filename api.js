import axios from "axios";

const api = () => {
  const defaultOptions = {
    baseURL: "http://covidtrail-backend.azurewebsites.net/",
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Create instance
  let instance = axios.create(defaultOptions);
  return instance;
};

export default api();
