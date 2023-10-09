import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './CartCard.style'
import { COLORS } from '../../helper/constants'
import Ionicons from 'react-native-vector-icons/Ionicons'

const CartCard = ({item}) => {
  return (
    <View style={styles.cartItem}>
      <View style={styles.imgContainer}>
        <Image source={{uri:item.product.imageUrl}} style={styles.image} />
      </View>
      <View style={styles.cartItemDetails}>
        <View style={styles.cartTitle}>
        <Text style={styles.title}>{item.product.title} </Text>
        <TouchableOpacity>
            <Ionicons name="trash" size={20} color={COLORS.red} />
        </TouchableOpacity>
        </View >
        <View style={styles.cartBody}>
            <View>
                <Text> {item.product.supplier}</Text>
                <Text> {item.product.price}F x{item.quantity}</Text>
            </View>
          
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnTxt}>CHECKOUT</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.orderInfo}>
                    <Text style={styles.subtotal}>Subtotal</Text>
                    <Text style={styles.subtotal}> {item.product.price*item.quantity}F</Text>
                </View>
      </View>
    </View>
  )
}

export default CartCard