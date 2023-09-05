import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './Heading.style'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { COLORS } from '../../helper/constants'
import { useNavigation } from '@react-navigation/native'

const Heading = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container} >
      <View style={styles.header} >
        <Text style={styles.headerTitle}> New Rivals</Text>
        <TouchableOpacity onPress={()=>navigation.navigate("ProductList")}>
            <Ionicons name='grid' size={24} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Heading