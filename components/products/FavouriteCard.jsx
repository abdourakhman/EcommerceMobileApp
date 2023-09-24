import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './FavouriteCard.style';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { COLORS } from '../../helper/constants';

const FavouriteCard = ({item}) => {
    const navigation = useNavigation();
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
              <TouchableOpacity style={styles.addBtn} > 
                  <Ionicons name='heart' size={35} color={COLORS.primary}/>
              </TouchableOpacity>
          </View>
      </TouchableOpacity>
    )
}

export default FavouriteCard