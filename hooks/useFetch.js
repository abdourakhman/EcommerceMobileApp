import {useState, useEffect} from 'react'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import getCurrentUserData from '../helper/user';


const useFetch = (endPoint) => {
  const [data, setData] = useState([]);  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchData = async()=>{
    setIsLoading(true)
    try {
      const userData = JSON.parse(await getCurrentUserData());  
      if (userData !== null) {  
        const config = {
          headers: {
            'Authorization': `Bearer ${userData.token}`
          }
        };
    
        const response = await axios.get(endPoint, config);
        setData(response.data);
        console.log(endPoint)
      }
    } catch (error) {
      console.log(error.stack);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  
  }

useEffect(()=>{
    fetchData()
},[])

const refetch = ()=>{
    setIsLoading(true)
    fetchData(data);
} 

  return {data, isLoading, error, refetch}
}

export default useFetch