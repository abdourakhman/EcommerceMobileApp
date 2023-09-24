import { View, Text, ActivityIndicator, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import FavouriteCard from './FavouriteCard';
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from './FavouriteList.style';
import { COLORS, SIZES } from '../../helper/constants';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FavouritesList = () => {
    const endPoint='http://10.0.2.2:8080/api/furniture/products';
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    useEffect(()=>{
      getFavourites(); 
    },[])
    getFavourites = async()=>{
        try {
            const data = JSON.parse(await AsyncStorage.getItem('favourites'));
            const response = await axios.post(endPoint, data)
            setData(response.data)
            setIsLoading(false)
        } catch (error) {
            console.log(error);
        }finally{
            setIsLoading(false)
            console.log(data);
        }
    }
    if(isLoading){
        return (
            <View style={styles.loadingContainer} >
              <ActivityIndicator size={SIZES.xxlarge} color={COLORS.primary} />
            </View>
          )
    }else if(data.length===0){
        return(
            <View style={{flex:1, justifyContent:"center",alignItems:"center"}}>
                <Ionicons name="heart" size={60} color={COLORS.primary}  />
                <Text style={{fontSize:28, color:COLORS.primary}}>Aucun favoris !</Text>
            </View>
        )
    }else
    return (
        <View style={styles.container} >
            <FlatList 
                data={data}
                keyExtractor={(data,index)=>index.toString()}
                renderItem={({item})=>(
                <FavouriteCard  item={item}/>
                )}
                contentContainerStyle={styles.container}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={()=><View style={styles.separator} />}
            />
        </View>
    )
}

export default FavouritesList