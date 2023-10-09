import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, {useEffect, useState} from 'react'
import styles from './ProductDetails.style'
import Ionicons from 'react-native-vector-icons/Ionicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { COLORS, SIZES } from '../helper/constants'
import { useRoute } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'


const ProductDetails = ({navigation}) => {
    const route = useRoute();
    const {item} = route.params;
    const [count, setCount] = useState(1)
    const [isFavourite, setIsFavourite] = useState(false)
    useEffect(()=>{
        checkIsFavourite();
    },[])

    const checkIsFavourite = async()=>{
        let favourites = await AsyncStorage.getItem('favourites')
        if (favourites == '[]'){
            await AsyncStorage.removeItem('favourites')
        }
        if(favourites){
            try {     
                const parsedFavourites = JSON.parse(favourites)
                parsedFavourites.forEach(element => {
                    if(element === item.id.timestamp){
                        setIsFavourite(true)
                    }
                });
            } catch (error) {
                console.log(error);
            }
        }
    }
   
// Mise à jour des favoris
    const updateFavourites = async () => {
        const favourites = await AsyncStorage.getItem("favourites");
        if (favourites === '[]') {
            await AsyncStorage.removeItem('favourites');
        }
        
        try {
            if (favourites) {
                const parsedFavourites = JSON.parse(favourites);
                const index = parsedFavourites.indexOf(item.id.timestamp);
                
                if (index !== -1) {
                    parsedFavourites.splice(index, 1); // Supprimer de la liste des favoris
                    setIsFavourite(false);
                } else {
                    parsedFavourites.push(item.id.timestamp); // Ajouter aux favoris
                    setIsFavourite(true);
                }
                
                await AsyncStorage.setItem('favourites', JSON.stringify(parsedFavourites));
            } else {
                await AsyncStorage.setItem("favourites", JSON.stringify([item.id.timestamp]));
                setIsFavourite(true);
            }
        } catch (error) {
            console.log(error);
        }
    }

// Ajouter un produit au panier
    const addToCart = async () => {
        const orders = await AsyncStorage.getItem("orders");
        if (orders === '[]') {
            await AsyncStorage.removeItem('orders');
        }
        
        const order = { id: item.id.timestamp, quantity: count };
        
        try {
            if (orders) {
                const parsedOrders = JSON.parse(orders);
                parsedOrders.push(order);
                await AsyncStorage.setItem('orders', JSON.stringify(parsedOrders));
            } else {
                await AsyncStorage.setItem("orders", JSON.stringify([order]));
            }
        } catch (error) {
            console.log(error);
        }finally{
            navigation.navigate('Cart')
        }
    }

    const increment = ()=>{
        if(count<5)
            setCount(count+1)
    }
    const decrement = ()=>{
        if(count>1)
            setCount(count-1)
    }
  return (
    <View style={styles.container} >
        <View style={styles.upperRow}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Ionicons name="chevron-back-circle" size={30}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{updateFavourites()}}>
                <Ionicons name="heart" size={30} color={isFavourite? COLORS.primary : COLORS.offwhite}  />
            </TouchableOpacity>
        </View>
        <Image 
            source={{uri:item.imageUrl}}
            style={styles.image}
        />
        <View style={styles.details} >
            <View style={styles.titleRow} >
                <Text style={styles.title} >{item.title} </Text>
                <View style={styles.priceWrapper}>
                    <Text style={styles.price} >{item.price??70000} Fr</Text>
                </View>
            </View>

            <View style={styles.ratingRow}>
                <View style={styles.rating} >
                    {[1,2,3,4,5].map((index)=>(
                        <Ionicons 
                            key={index}
                            name='star'
                            size={24}
                            color='gold'
                        />
                    ))}
                    <Text style={styles.ratingText} >(4.9)</Text>
                </View>


                <View style={styles.rating} >
                    <TouchableOpacity onPress={()=>decrement()}>
                        <SimpleLineIcons name="minus" size={20} />
                    </TouchableOpacity>
                    <Text style={styles.ratingText}>{count}</Text>
                    <TouchableOpacity onPress={()=>increment()}>
                        <SimpleLineIcons name="plus" size={20} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.descriptionWrapper} >
                <Text style={styles.description} >description</Text>
                <Text style={styles.descText}>{item.description}</Text>

            </View>
            <View style={{marginBottom:SIZES.small}}>
                <View style={styles.location} >
                    <View style={{flexDirection:'row'}}>
                        <Ionicons name='location-outline' size={20} />
                        <Text>{item.location} </Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <MaterialCommunityIcons name='truck-delivery-outline' size={20} />
                        <Text> Free delivery</Text>
                    </View>
                </View>
            </View>

            <View style={styles.cartRow}>
                <TouchableOpacity onPress={()=>{}} style={styles.cartBtn}>
                    <Text style={styles.cartTitle}>BUY NOW</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{addToCart()}} style={styles.addCart}>
                    <Fontisto name='shopping-bag' size={24} color={COLORS.lightwhite} />
                </TouchableOpacity>
            </View>

        </View>
    </View>
  )
}

export default ProductDetails