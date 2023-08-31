import { View, Image, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import styles from './ProductCardView.style'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { COLORS } from '../../helper/constants'
import { useNavigation } from '@react-navigation/native'

const ProductCardView = () => {
    const naviagtion = useNavigation();
  return (
    <TouchableOpacity onPress={()=>naviagtion.navigate("ProductDetails") }>
        <View style={styles.container} >
            <View style={styles.imageContainer}>
                <Image 
                    source={{uri:"https://www.meublesatlas.fr/modules/ph_simpleblog/featured/95.jpg"}}
                    style={styles.image}
                />
            </View>
            <View style={styles.details}>
                <Text style={styles.title} numberOfLines={1}>product of lux 202"</Text>
                <Text style={styles.supplier}  numberOfLines={1}>product</Text>
                <Text style={styles.price}>75000Fr</Text>
            </View>
            <TouchableOpacity style={styles.addBtn} > 
                <Ionicons name='add-circle'  size={35} color={COLORS.primary}/>
            </TouchableOpacity>
        </View>
    </TouchableOpacity>
  )
}

export default ProductCardView