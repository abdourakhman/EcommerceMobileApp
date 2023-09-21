import { View, Text, ScrollView, SafeAreaView, Image, TextInput, TouchableOpacity,Alert } from 'react-native'
import React, { useState } from 'react'
import styles from './Login.style'
import BackBtn from '../components/BackBtn'
import Button from '../components/Button'
import { Formik } from 'formik'
import * as Yup from 'yup'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { COLORS, SIZES } from '../helper/constants'
import axios from 'axios'

const Registration = ({navigation}) => {
    const [loader, setLoader] = useState(false)
    const [responseData, setResponseData] = useState(null)
    const [obscureText, setObscureText] = useState(false)
    const signUP= async (values)=>{
        setLoader(true);
        const endPoint="http://10.0.2.2:8080/api/auth/register";
        const data = values;
        try {
          const response = await axios.post(endPoint,data);
          if(response.status === 200){
            setLoader(false)
            console.log(response.data);
            setResponseData(response.data)
            navigation.replace("Login")
          }
          else{ 
            invalidForm()
          }
        } catch (error) {
          Alert.alert(
            error.message,"Oops, Error logging try again"
            [
              {
                text:"OK" , onPress:()=>{console.log(error);}
              }
            ]
          )
          }finally{
            setLoader(false);
          }
        }
  
    const invalidForm = ()=>{ 
      Alert.alert(
        "Wrong credentials",
        "Please provide right data on the required fields?",
      )
      }
  return (
    <ScrollView style={{backgroundColor:"white"}}>  
    <SafeAreaView style={{marginHorizontal:20}}>
      <View>
          <BackBtn onPress={()=>navigation.goBack()}/>
          <Image
            style={{
                width:SIZES.width-60,
                height:SIZES.height/3.4,
                resizeMode:"cover",
                marginBottom:SIZES.xlarge
            }} 
            source={require('../assets/images/home.jpg')}
          />
          <Text style={styles.title}>Unlimited Luxurious Furniture</Text>
          <Formik
            initialValues={{firstname:'',lastname:'',username:'',email:'',password:'',location:'',}}
            validationSchema={
              Yup.object().shape({
                password:Yup.string()
                .min(4,"Password must be at least 8 characters")
                .required('Required !'),
                email:Yup.string()
                .email('Provide a valid email adress')
                .required("Required !"),
                firstname:Yup.string()
                .min(3,'Provide a valid name')
                .required("Required !"),
                lastname:Yup.string()
                .min(3,'Provide a valid name')
                .required("Required !"),
                location:Yup.string()
                .min(3,'Provide a valid name')
                .required("Required !")
              })
             }
             onSubmit={(values)=>signUP(values)}
          >
            {({handleChange, handleBlur, touched, handleSubmit, values, errors, isValid, setFieldTouched})=>(
              <View>
                <View style={styles.wrapper}>
                  <Text style={styles.label}>Firstname</Text>
                  <View style={styles.inputWrapper(touched.firstname ? COLORS.primary  : COLORS.offwhite)}>
                    <MaterialCommunityIcons 
                      name='alpha-f-box-outline'
                      size={20}
                      color={COLORS.gray}
                      style={styles.icon}
                    />
                    <TextInput 
                      placeholder='enter your firstname'
                      onFocus={()=>{setFieldTouched('firstname')}}
                      onBlur={()=>{setFieldTouched('firstname','')}}
                      value={values.firstname}
                      onChangeText={handleChange('firstname')}
                      autoCapitalize='none'
                      autoCorrect={false}
                      style={{flex:1}}
                    />
                  </View>
                  {touched.firstname && errors.firstname && (
                    <Text style={styles.errorMsg}>{errors.firstname} </Text>
                  )}
                </View>
                <View style={styles.wrapper}>
                  <Text style={styles.label}>Lastname</Text>
                  <View style={styles.inputWrapper(touched.lastname ? COLORS.primary  : COLORS.offwhite)}>
                    <MaterialCommunityIcons 
                      name='alpha-l-box-outline'
                      size={20}
                      color={COLORS.gray}
                      style={styles.icon}
                    />
                    <TextInput 
                      placeholder='enter your lastname'
                      onFocus={()=>{setFieldTouched('lastname')}}
                      onBlur={()=>{setFieldTouched('lastname','')}}
                      value={values.lastname}
                      onChangeText={handleChange('lastname')}
                      autoCapitalize='none'
                      autoCorrect={false}
                      style={{flex:1}}
                    />
                  </View>
                  {touched.lastname && errors.lastname && (
                    <Text style={styles.errorMsg}>{errors.lastname} </Text>
                  )}
                </View>
                <View style={styles.wrapper}>
                  <Text style={styles.label}>Username</Text>
                  <View style={styles.inputWrapper(touched.username ? COLORS.primary  : COLORS.offwhite)}>
                    <MaterialCommunityIcons 
                      name='face-man-profile'
                      size={20}
                      color={COLORS.gray}
                      style={styles.icon}
                    />
                    <TextInput 
                      placeholder='enter your username'
                      onFocus={()=>{setFieldTouched('username')}}
                      onBlur={()=>{setFieldTouched('username','')}}
                      value={values.username}
                      onChangeText={handleChange('username')}
                      autoCapitalize='none'
                      autoCorrect={false}
                      style={{flex:1}}
                    />
                  </View>
                  {touched.username && errors.username && (
                    <Text style={styles.errorMsg}>{errors.username} </Text>
                  )}
                </View>
                <View style={styles.wrapper}>
                  <Text style={styles.label}>Adress</Text>
                  <View style={styles.inputWrapper(touched.location ? COLORS.primary  : COLORS.offwhite)}>
                    <MaterialCommunityIcons 
                      name='home-outline'
                      size={20}
                      color={COLORS.gray}
                      style={styles.icon}
                    />
                    <TextInput 
                      placeholder='enter your location'
                      onFocus={()=>{setFieldTouched('location')}}
                      onBlur={()=>{setFieldTouched('location','')}}
                      value={values.location}
                      onChangeText={handleChange('location')}
                      autoCapitalize='none'
                      autoCorrect={false}
                      style={{flex:1}}
                    />
                  </View>
                  {touched.location && errors.location && (
                    <Text style={styles.errorMsg}>{errors.location} </Text>
                  )}
                </View>
                
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

              <Button title={"S I G N   U P"} 
              onPress={()=>{isValid ? handleSubmit(): invalidForm}} 
              isValid={isValid}
              loader={loader}
              />
            </View>
            )} 
          </Formik>
      </View>
    </SafeAreaView>
  </ScrollView>
  )
}

export default Registration