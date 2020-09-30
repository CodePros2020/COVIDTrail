import React from "react";
import { AsyncStorage } from "@react-native-community/async-storage";

class LocalStore {
  getToken = async () => {
    try {
      const token = await AsyncStorage.getItem("COVIDTrail");
      if (token !== null) {
        console.log("Token is", token);
      }
    } catch (e) {
      console.log("Error in getting token");
    }
  };

  storeToken = async (token) => {
    try {
      await AsyncStorage.setItem("COVIDTrail", token);
    } catch (e) {
      console.log("Error in saving token");
    }
  };
  removeToken = async () => {
    try {
      await AsyncStorage.removeItem("COVIDTrail");
    } catch (e) {
      console.log("Error in removing token");
    }

    console.log("Done.");
  };
}

// const KEY = "USER_DATA";

// let keyValue = { name: yogi };

// AsyncStorage.setItem(KEY, keyValue);

// AsyncStorage.getItem(KEY).then((asyncStorageRes) => {
//   console.log(JSON.parse(asyncStorageRes));
// });

const LocalStoreClass = new LocalStore();
export default LocalStoreClass;
