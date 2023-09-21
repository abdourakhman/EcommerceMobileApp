import { View, Text, ScrollView, SafeAreaView, Image, TextInput, TouchableOpacity,Alert } from 'react-native'
import React, { useState } from 'react'
import styles from './Login.style'
import BackBtn from '../components/BackBtn'
import Button from '../components/Button'
import { Formik } from 'formik'
import * as Yup from 'yup'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { COLORS } from '../helper/constants'
import axios from 'axios'
import  AsyncStorage from '@react-native-async-storage/async-storage'

const Login = ({navigation}) => {
  const [loader, setLoader] = useState(false)
  const [responseData, setResponseData] = useState(null)
  const [obscureText, setObscureText] = useState(false)

  const login= async (values)=>{
    setLoader(true);
    try {
      const endPoint="http://10.0.2.2:8080/api/auth/authenticate";
      const data = values;
      console.log(data);
      const response = await axios.post(endPoint,data);
      if(response.status === 200){
        setLoader(false)
        console.log("authentication...")
         setResponseData(response.data);
         await AsyncStorage.setItem(`user${response.data.user.id.timestamp}`,JSON.stringify(response.data));
         await AsyncStorage.setItem('id',JSON.stringify(response.data.user.id.timestamp));
         navigation.replace("BottomTabNavigation")
      }
      else{
        invalidForm()
      }
    } catch (error) {
      console.log(error);
      Alert.alert(
        "Error",
        "Oops, an error was occuring try again!"
      )
      setLoader(false);
      }finally{
        setLoader(false);
      }
    }

  const invalidForm = ()=>{ 
    Alert.alert(
      "Wrong credentials",
      "Please provide valid data on the required fields"
    )
    }
  return (
    <ScrollView style={{backgroundColor:"white"}}>  
      <SafeAreaView style={{marginHorizontal:20}}>
        <View>
            <BackBtn onPress={()=>navigation.goBack()}/>
            <Image
              style={styles.homeImg} 
              source={require('../assets/images/home.jpg')}
            />
            <Text style={styles.title}>Unlimited Luxurious Furniture</Text>
            <Formik
              initialValues={{email:'',password:''}}
              validationSchema={
                Yup.object().shape({
                  password:Yup.string()
                  .min(4,"Password must be at least 4 characters")
                  .required('Required !'),
                  email:Yup.string()
                  .email('Provide a valid email adress')
                  .required("Required !")
                })
               }
               onSubmit={ (values)=> login(values)}
            >
              {({handleChange, handleBlur, touched, handleSubmit, values, errors, isValid, setFieldTouched})=>(
                <View>
                  <View style={styles.wrapper}>
                    <Text style={styles.label}>Email</Text>
                    <View style={styles.inputWrapper(touched.email ? COLORS.primary  : COLORS.offwhite)}>
                      <MaterialCommunityIcons 
                        name='email-outline'
                        size={20}
                        color={COLORS.gray}
                        style={styles.icon}
                      />
                      <TextInput 
                        placeholder='enter your email'
                        onFocus={()=>{setFieldTouched('email')}}
                        onBlur={()=>{setFieldTouched('email','')}}
                        value={values.email}
                        onChangeText={handleChange('email')}
                        autoCapitalize='none'
                        autoCorrect={false}
                        style={{flex:1}}
                      />
                    </View>
                    {touched.email && errors.email && (
                      <Text style={styles.errorMsg}>{errors.email} </Text>
                    )}
                  </View>
                   <View style={styles.wrapper}>
                    <Text style={styles.label}>Password</Text>
                    <View style={styles.inputWrapper(touched.password ? COLORS.primary  : COLORS.offwhite)}>
                      <MaterialCommunityIcons 
                        name='lock-outline'
                        size={20}
                        color={COLORS.gray}
                        style={styles.icon}
                      />
                      <TextInput 
                        secureTextEntry={!obscureText}
                        placeholder='enter your password'
                        onFocus={()=>{setFieldTouched('password')}}
                        onBlur={()=>{setFieldTouched('password','')}}
                        value={values.password}
                        onChangeText={handleChange('password')}
                        autoCapitalize='none'
                        autoCorrect={false}
                        style={{flex:1}}
                      />
                      <TouchableOpacity onPress={()=>{setObscureText(!obscureText)}}>
                        <MaterialCommunityIcons 
                          name={obscureText? "eye-outline" : "eye-off-outline"}
                          size={18}
                        />
                      </TouchableOpacity>
                    </View>
                    {touched.password && errors.password && (
                      <Text style={styles.errorMsg}>{errors.password} </Text>
                    )}
                  </View>

                <Button title={"L O G I N"} 
                onPress={()=>{isValid ? handleSubmit(): invalidForm()}} 
                isValid={isValid}
                loader ={loader}
                />
                <Text style={styles.registration} onPress={()=> navigation.navigate('Registration') }>Register</Text>
              </View>
              )} 
            </Formik>
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

export default Login