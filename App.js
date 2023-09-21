import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigation from './navigation/BottomTabNavigation';
import Cart from './screens/Cart';
import ProductDetails from './screens/ProductDetails';
import NewRivals from './screens/NewRivals';
import Login from './screens/Login';
import Favorites from './screens/Favorites';
import Order from './screens/Order';
import Registration from './screens/Registration';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='BottomTabNavigation'
          component={BottomTabNavigation}
          options={{headerShown:false}}
        />
        <Stack.Screen 
          name='Cart'
          component={Cart}
          options={{headerShown:false}}
        />
        <Stack.Screen 
          name='ProductDetails'
          component={ProductDetails}
          options={{headerShown:false}}
        />
         <Stack.Screen 
          name='ProductList'
          component={NewRivals}
          options={{headerShown:false}}
        />
         <Stack.Screen 
          name='Login'
          component={Login}
          options={{headerShown:false}}
        />
         <Stack.Screen 
          name='Favorites'
          component={Favorites}
          options={{headerShown:false}}
        />
         <Stack.Screen 
          name='Orders'
          component={Order}
          options={{headerShown:false}}
        />
         <Stack.Screen 
          name='Registration'
          component={Registration}
          options={{headerShown:false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App