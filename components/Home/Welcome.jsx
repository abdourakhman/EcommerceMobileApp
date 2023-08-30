import { View, Text, SafeAreaView, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import styles from './welcome.style'
import { COLORS } from '../../helper/constants'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

const Welcome = () => {
    const navigation = useNavigation();
    return (
    <View>
        <View style={styles.container} >
            <Text style={styles.welcomeTxt("#000")} >Find the most</Text>
            <Text style={styles.welcomeTxt(COLORS.primary)}>Luxurious fourniture</Text>
        </View>
        <View style={styles.searchContainer} >
            <TouchableOpacity>
                <Feather name="search" size={24} style={styles.searchIcon} />
            </TouchableOpacity>
            <View style={styles.searchWrapper} >
                <TextInput 
                    style={styles.searchInput}
                    placeholder='What are you looking for'
                    value=''
                    onPressIn={()=>navigation.navigate('Search')}
                /> 
            </View>
            <View>
                <TouchableOpacity style={styles.searchButton} >
                    <Ionicons name='camera-outline' size={24} color={COLORS.offwhite} />
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default Welcome