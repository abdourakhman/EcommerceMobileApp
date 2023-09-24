import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './NewRivals.style'
import { COLORS } from '../helper/constants'
import ProductList from '../components/products/ProductList'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FavouritesList from '../components/products/FavouritesList'
const Favourites = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.upperRow}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Ionicons name="chevron-back-circle" size={30} color={ COLORS.lightwhite} />
            </TouchableOpacity>
            <Text style={styles.heading}> Favourites </Text>
        </View>
        <FavouritesList />
      </View>
    </SafeAreaView>
  )
}

export default Favourites