import React from 'react'
import LoginScreen from '../screens/LoginScreen'
import HomeScreen from '../screens/HomeScreen'

import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

const MainStackNavigator = (()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}}/>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
    )
})

export default MainStackNavigator;