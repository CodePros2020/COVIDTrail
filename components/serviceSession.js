import AsyncStorage from "@react-native-community/async-storage";

class LocalStore {
  saveData = async (e, data) => {
    try {
      await AsyncStorage.setItem("token", e);
    } catch (e) {
      console.log(e);
      alert("Failed to save the data to the storage");
    }
  };

  readData = async () => {
    try {
      const userAge = await AsyncStorage.getItem("token");
      return userAge;
    } catch (e) {
      alert("Failed to fetch the data from storage");
    }
  };
  storeData = async (value) => {
    try {
      await AsyncStorage.setItem("id", value);
    } catch (e) {
      console.log("value is not saved async storage", e);
    }
  };
  readId = async () => {
    try {
      const userId = await AsyncStorage.getItem("id");
      return userId;
    } catch (e) {
      alert("Failed to fetch the data from storage");
    }
  };
}

const LocalStoreClass = new LocalStore();
export default LocalStoreClass;
