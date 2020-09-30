import AsyncStorage from '@react-native-community/async-storage';

class LocalStore {
    saveData = async (e, data) => {
        try {
          await AsyncStorage.setItem('token', e)
        } catch (e) {
            console.log(e);
          alert('Failed to save the data to the storage')
        }
    }

    readData = async () => {
        try {
          const userAge = await AsyncStorage.getItem('token');
          return userAge;
        } catch (e) {
          alert('Failed to fetch the data from storage')
        }
      }
}

const LocalStoreClass = new LocalStore();
export default LocalStoreClass;