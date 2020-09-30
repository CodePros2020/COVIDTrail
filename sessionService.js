// import React from "react";

// class LocalStore {
    
//   setToken = (token) => {
//     sessionStorage.setItem(token);
//   };

//   deleteToken = () => {
//       sessionStorage.clear();
//   };

//   getToken = () => {
//     sessionStorage.getItem();
//   };
// }

// const LocalStoreClass = new LocalStore();
// export default LocalStoreClass;

import React from "react";
import { AsyncStorage } from "@react-native-community/async-storage";

class LocalStore {
  getToken = (key) => {
    const token = AsyncStorage.getItem(key) || "";
    console.log('key', key);
    console.log('token', token);
    return token;
  };
  setToken = (token) => {
    AsyncStorage.setItem("COVIDTrail", token);
  };
  deleteToken = () => {
    AsyncStorage.removeItem("COVIDTrail");
  };
}

const LocalStoreClass = new LocalStore();
export default LocalStoreClass;