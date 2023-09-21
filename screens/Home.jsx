import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import styles from './Home.style'
import Welcome from '../components/Home/Welcome'
import Caroussel from '../components/Home/Caroussel'
import Heading from '../components/Home/Heading'
import ProductRow from '../components/products/ProductRow'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Home = () => {
 
  const [userData, setUserData] = useState(null)
  const [userLogin, setUserLogin] = useState(false)
  useEffect(()=>{
    checkExistingUser();
  },[]);

  const checkExistingUser = async ()=>{
    try {
      const id = await AsyncStorage.getItem('id');
      const userData = await AsyncStorage.getItem(`user${JSON.parse(id)}`);
      if(userData !== null){
        const parsedData = JSON.parse(userData);
        setUserData(parsedData);
        setUserLogin(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar} > 
          <Ionicons  name='location-outline' size={24} /> 
          <Text style={styles.location} > {userData ? userData.user.location :'Dkr,Senegal'} </Text> 
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
        <Caroussel />
        <Heading />
        <ProductRow />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home