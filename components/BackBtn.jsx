import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { COLORS, SIZES } from '../helper/constants'

const BackBtn = ({onPress}) => {
  return (
   <TouchableOpacity onPress={onPress} style={styles}> 
        <Ionicons 
            name="chevron-back-circle"
            size={30}
            color={COLORS.primary}
        />
   </TouchableOpacity>
  )
}

export default BackBtn

const styles = StyleSheet.create({
    BackBtn:{
        alignItems:"center",
        position:"absolute",
        top:SIZES.xlarge-10,
        zIndex:999
    }
})