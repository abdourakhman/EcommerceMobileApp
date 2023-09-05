import {useState, useEffect} from 'react'
import axios from 'axios'

const useFetch = () => {
  const [data, setData] = useState([]);  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async()=>{
    setIsLoading(true)

    try {
        const response = await axios.get('http://10.0.2.2:8080/api/furniture/products')
        setData(response.data)
        setIsLoading(false)
    } catch (error) {
      console.log(error.stack)
        setError(error)
    }finally{
        setIsLoading(false)
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