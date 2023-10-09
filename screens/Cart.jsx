import { View, Text, SafeAreaView, ActivityIndicator, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import BackBtn from '../components/BackBtn'
import styles from './Cart.style'
import Button from '../components/Button'
import CartCard from '../components/Cart/CartCard'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'

const Cart = ({navigation}) => {
  const endPoint='http://10.0.2.2:8080/api/furniture/products';
    const [data, setData] = useState([]);
    const [total,setTotal] = useState(0)
    useEffect(()=>{
      getProducts(); 
    },[])
    getProducts = async()=>{
        try {
            const orders = JSON.parse(await AsyncStorage.getItem('orders'));
           if(orders){
            const ListIdProductOrder = orders.map((order)=>order.id);
            const quantityProductOrder = orders.map((order)=>order.quantity);
            const response = await axios.post(endPoint, ListIdProductOrder);
            let cartItem = [];
            for (let index = 0; index < orders.length; index++) {
              const item = {"product":response.data[index], "quantity":quantityProductOrder[index]};
              cartItem.push(item);
            }
            setData(cartItem);
            setTotal(cartItem.reduce((accumulator, currentValue) => {
              const productPrice = currentValue.product.price
              const productQuantity = currentValue.quantity
              const subtotal = productPrice*productQuantity
              return accumulator +subtotal
            },0))
           }
           
        } catch (error) {
            console.log(error);
        }finally{
            data.length !==0 ? console.log("fetching data"): console.log("No data fetching");
        }
    }
    
  return (
    <SafeAreaView style={{marginHorizontal:15}}>
      <View style={styles.headerBar}>
        <BackBtn onPress={()=>navigation.goBack()}/>
        <Text style={styles.headerText}>Cart</Text>
      </View>
      <View>
          {data ?
          (
            <FlatList 
            data={data}
            keyExtractor={(data,index)=>index.toString()}
            renderItem={({item})=>(
              <CartCard  item={item}/>
              )}
          />
          ):(
            <View></View> 
            )
          }
      </View>

      <View>
        <Text style={styles.orderTitle} >Order info</Text>
        <View style={styles.orderInfo}>
            <Text style={styles.subtotal}>Total</Text>
            <Text style={styles.total}> {total} F</Text>
        </View>
        <View style={{marginTop:30}}>
          <Button 
            title={`CHECKOUT ${total}F`} 
            onPress={{}} 
            isValid={true} 
            loader={false}
            />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Cart