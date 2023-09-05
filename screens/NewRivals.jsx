import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './NewRivals.style'
import { COLORS } from '../helper/constants'
import Ionicons from 'react-native-vector-icons/Ionicons'
import ProductList from '../components/products/ProductList'

const NewRivals = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.upperRow}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Ionicons name="chevron-back-circle" size={30} color={ COLORS.lightwhite} />
            </TouchableOpacity>
            <Text style={styles.heading}> Products </Text>
        </View>
        <ProductList />
      </View>
    </SafeAreaView>
  )
}

export default NewRivals