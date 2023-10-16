import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ChatScreen';
import LoginScreen from './screens/LoginScreen';

const Stack=createNativeStackNavigator();
const StackNavigator = () => {
    
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Chat" component={ChatScreen}/>
        <Stack.Screen name="Login" component={LoginScreenen}/>
    </Stack.Navigator>
  )
}

export default StackNavigator
