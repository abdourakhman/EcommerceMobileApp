import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './FavouriteCard.style';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { COLORS } from '../../helper/constants';
import AsyncStorage from '@react-native-async-storage/async-storage'


const FavouriteCard = ({item}) => {
    const navigation = useNavigation();
    const removeFavorite = async(item)=>{
    const favourites = await AsyncStorage.getItem("favourites")
    if (favourites =='[]'){
        await AsyncStorage.removeItem('favourites')
    }
    try {
        if(favourites){
            const parsedFavourites = JSON.parse(favourites)
            parsedFavourites.pop(item.id.timestamp)
            await AsyncStorage.setItem('favourites',JSON.stringify(parsedFavourites))
            navigation.replace('Favourites')
        }  
    } catch (error) {
      console.log(error);  
    }
    }

    return (
      <TouchableOpacity onPress={()=>navigation.navigate("ProductDetails", {item}) }>
          <View style={styles.container} >
              <View style={styles.imageContainer}>
                  <Image 
                      source={{uri:item.imageUrl}}
                      style={styles.image}
                  />
              </View>
              <View style={styles.details}>
                  <Text style={styles.title} numberOfLines={1}> {item.title} </Text>
                  <Text style={styles.price}> {item.price??70000}Fr</Text>
                  <Text style={styles.supplier}  numberOfLines={1}> {item.supplier} </Text>
              </View>
              <TouchableOpacity 
                onPress={()=>removeFavorite(item)}
                style={styles.addBtn} > 
                  <Ionicons name='trash' size={35} color={COLORS.red}/>
              </TouchableOpacity>
          </View>
      </TouchableOpacity>
    )
}

export default FavouriteCard