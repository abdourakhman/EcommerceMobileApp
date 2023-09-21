import { View, Text, SafeAreaView, TextInput,TouchableOpacity, FlatList, Image } from 'react-native'
import React,  {useState} from 'react'
import styles from './Search.style'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { COLORS } from '../helper/constants'
import axios from 'axios'
import SearchTile from './Search/SearchTile'
const Search = () => {

  const [searchKey, setSearchKey] =  useState('');
  const [searchResult, setSearchResult]= useState([]);

  const handleSearch= async()=>{
      try {
          const response = await axios.get(`http://10.0.2.2:8080/api/furniture/products/${searchKey}`)
          setSearchResult(response.data)
        } catch (error) {
        console.log("Failed to get  products...")
    }
  }

  return (
    <SafeAreaView>
      <View style={styles.searchContainer} >
            <TouchableOpacity>
                <Ionicons name='camera-outline' size={24} style={styles.searchIcon} />
            </TouchableOpacity>
            <View style={styles.searchWrapper} >
                <TextInput 
                    style={styles.searchInput}
                    placeholder='What are you looking for'
                    value={searchKey}
                    onChangeText={setSearchKey}
                    onPressIn={()=>{}}
                /> 
            </View>
            <View>
                <TouchableOpacity style={styles.searchButton} onPress={()=>handleSearch()}>
                    < Feather name="search"  size={24} color={COLORS.offwhite} />
                </TouchableOpacity>
            </View>
        </View>
        {searchResult.length ===0 ? (
            <View style={{flex:1}}>
                <Image 
                    source={require('../assets/images/search.png')}
                    style={styles.searchImage}
                />
            </View>
        ):(
            <FlatList
                data={searchResult}
                keyExtractor={(item,index)=>index.toString()}
                renderItem={({item})=>(
                    <SearchTile item={item} />
                )}
                style={{marginHorizontal:12}}
            />
        )
        }
    </SafeAreaView>
  )
}

export default Search