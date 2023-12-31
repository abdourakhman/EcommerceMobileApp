import { View, Text, ActivityIndicator, FlatList } from 'react-native'
import React from 'react'
import useFetch from '../../hooks/useFetch'
import { COLORS, SIZES } from '../../helper/constants';
import styles from './ProductList.style';
import ProductCardView from './ProductCardView';

const ProductList = () => {
  const {data,isLoading,error} = useFetch('http://10.0.2.2:8080/api/furniture/products');
    if(isLoading){
        return (
            <View style={styles.loadingContainer} >
              <ActivityIndicator size={SIZES.xxlarge} color={COLORS.primary} />
            </View>
          )
    }
    return (
        <View style={styles.container} >
            <FlatList 
                data={data}
                numColumns={2}
                keyExtractor={(data,index)=>index.toString()}
                renderItem={({item})=>(
                <ProductCardView  item={item}/>
                )}
                contentContainerStyle={styles.container}
                ItemSeparatorComponent={()=><View style={styles.separator} />}
            />
        </View>
    )
}

export default ProductList