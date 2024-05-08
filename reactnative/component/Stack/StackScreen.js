import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from '../Login/Login'
import Register from '../Register/Register'
import Detail from '../Detail/Detail'
import Infomation from '../Infomation/Infomation'
import TabNavigation from '../Stack/TabNavigation'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createNativeStackNavigator();
const StackScreen = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
                <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
                <Stack.Screen name="TabNavigation" component={TabNavigation} options={{ headerShown: false }}/>
                <Stack.Screen name="Detail" component={Detail} options={{ headerShown: false }}/>
                <Stack.Screen name="Infomation" component={Infomation} options={{ headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackScreen

const styles = StyleSheet.create({})