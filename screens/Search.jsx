import { View, Text, SafeAreaView, TextInput,TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './Search.style'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { COLORS } from '../helper/constants'

const Search = () => {
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
                    value=''
                    onPressIn={()=>{}}
                /> 
            </View>
            <View>
                <TouchableOpacity style={styles.searchButton} >
                    < Feather name="search"  size={24} color={COLORS.offwhite} />
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Search