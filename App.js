import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigation from './navigation/BottomTabNavigation';
import Cart from './screens/Cart';

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
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App