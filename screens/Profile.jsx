import { View, Text, SafeAreaView, StatusBar, Image, TouchableOpacity, Alert } from 'react-native'
import {useState, useEffect} from 'react'
import React from 'react'
import styles from './Profile.style'
import { COLORS } from '../helper/constants'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Profile = ({navigation}) => {
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

  const logout = ()=>{ 
    Alert.alert(
      "Logout",
      "Are you sure you want to logout ?",
      [
        {
          text:"Cancel", onPress: ()=> console.log("cancel pressed")
        },
        {
          text:"Confirm" , onPress:()=>console.log("confirm pressed")
        }
      ]
    )
  };
  const clearCache = ()=>{ 
    Alert.alert(
      "Clear Cache",
      "Are you sure you want to delete all saved Data on your device ?",
      [
        {
          text:"Cancel", onPress: ()=> console.log("cancel pressed")
        },
        {
          text:"Confirm" , onPress:()=>console.log("confirm pressed")
        }
      ]
    )
  };
  const deleteAccount = ()=>{ 
    Alert.alert(
      "Delete account",
      "Are you sure you want to suppress your account ?",
      [
        {
          text:"Cancel", onPress: ()=> console.log("cancel pressed")
        },
        {
          text:"Confirm" , onPress:()=>console.log("confirm pressed")
        }
      ]
    )
  };
  return (
    <View style={styles.container}> 
       <View style={styles.container}> 
        <StatusBar backgroundColor={COLORS.primary} />

        <View style={{width:'100%'}}>
          <Image 
            source={require('../assets/images/space.jpg')}
            style={styles.cover}
          />
        </View>
        <View style={styles.profileContainer}> 
          <Image 
            source={require('../assets/images/profile.jpg')}
            style={styles.profile}
          />
          <Text style={styles.name}>
            {userLogin === true ? "userData.name" : "Please login into your account"}
          </Text>

          {userLogin === false ? (
            <TouchableOpacity onPress={()=>{navigation.navigate('Login')}}>
              <View style={styles.loginBtn}>
                <Text style={styles.menuText}>L O G I N </Text>
              </View>
            </TouchableOpacity>
          ):(
            <View style={styles.loginBtn}>
                <Text style={styles.menuText}>abdou@gmail.com</Text> 
            </View>
          )
          
        }

        {userLogin === false ? (
          <View>

          </View>
          ):(
           <View style={styles.menuWrapper}>
            <TouchableOpacity onPress={()=> navigation.navigate('Favorites') }>
              <View style={styles.menuItem(1)}>
                <MaterialCommunityIcons 
                  name="heart-outline"
                  color={COLORS.primary}
                  size={24}
                />
                <Text style={styles.menuText} > Favorites</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Orders')}>
              <View style={styles.menuItem(1)}>
                <MaterialCommunityIcons 
                  name="truck-delivery-outline"
                  color={COLORS.primary}
                  size={24}
                />
                <Text style={styles.menuText} >Orders</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Cart')}>
              <View style={styles.menuItem(1)}>
                <SimpleLineIcons 
                  name="bag"
                  color={COLORS.primary}
                  size={24} 
                />
                <Text style={styles.menuText} > Cart</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>clearCache()}>
              <View style={styles.menuItem(1)}>
                <MaterialCommunityIcons 
                  name="cached"
                  color={COLORS.primary}
                  size={24}
                />
                <Text style={styles.menuText} >Reset</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>deleteAccount()}>
              <View style={styles.menuItem(1)}>
                <AntDesign 
                  name="deleteuser"
                  color={COLORS.primary}
                  size={24}
                />
                <Text style={styles.menuText} > Delete account</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=>logout()}>
              <View style={styles.menuItem(1)}>
                <AntDesign 
                  name="logout"
                  color={COLORS.primary}
                  size={24}
                />
                <Text style={styles.menuText} > Logout</Text>
              </View>
            </TouchableOpacity>
          </View>
          )
          
        }
        </View>
      </View>


    </View>
  )
}

export default Profile