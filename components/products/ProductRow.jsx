import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../helper/constants'
import ProductCardView from './ProductCardView'
import styles from './ProductRow.style'
import useFetch from '../../hooks/useFetch'

const ProductRow = () => {
  const {data, isLoading,error} = useFetch('http://10.0.2.2:8080/api/furniture/products')
  return (
   <View style={styles.container}>
     {isLoading ? (<ActivityIndicator size={SIZES.xxlarge} color={COLORS.primary}/>)
     : error ? (<Text>Something went wrong ... {error.message} </Text>)
     :
     (<FlatList 
      data={data}
      keyExtractor={(item,index)=>index.toString()}
      renderItem={({item})=>(<ProductCardView item={item} />)}
      horizontal={true}
      contentContainerStyle={{columnGap:SIZES.medium}}
    />)
    }
   </View>
  )
}

export default ProductRow