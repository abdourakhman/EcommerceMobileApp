import AsyncStorage from '@react-native-async-storage/async-storage'

const getCurrentUserData = async ()=>{
    try {
      const id = await AsyncStorage.getItem('id');
      const userData = await AsyncStorage.getItem(`user${JSON.parse(id)}`);
      if(userData !== null){
        return userData;
      }else{
        return null;
      }
    } catch (error) {
      console.log(error);
    }
  
  }
export default getCurrentUserData;  