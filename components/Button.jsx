import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native'
import React from 'react'
import { COLORS } from '../helper/constants'

const Button = ({title, onPress, isValid, loader}) => {
  return (
    <TouchableOpacity 
    onPress={onPress}
    style={styles.btnStyle(isValid===false ? COLORS.gray: COLORS.primary)}
    >
        {loader===false ? (<Text style={styles.btnTxt}>{title}</Text>):(<ActivityIndicator />)}
    </TouchableOpacity>
  )
}

export default Button
const styles = StyleSheet.create({
    btnTxt:{
        fontWeight:"bold",
        color: "#fff",
        fontSize:18
    },
    btnStyle:( bgColor)=>({
        height:50,
        width:"100%",
        marginVertical:2,
        backgroundColor:COLORS.primary,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:12,
        backgroundColor:bgColor

    })
})