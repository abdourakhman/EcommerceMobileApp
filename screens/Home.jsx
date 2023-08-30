import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import styles from './Home.style'
import Welcome from '../components/Home/Welcome'

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar} > 
          <Ionicons  name='location-outline' size={24} /> 
          <Text style={styles.location} >Dkr Senegal</Text> 
          <View style={{alignItems:"flex-end"}} >
            <View style={styles.cartCount} >
              <Text style={styles.cartNumber}>8</Text>
            </View> 
            <TouchableOpacity>
              <Fontisto name='shopping-bag' size={24} color={"black"} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView>
        <Welcome />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home