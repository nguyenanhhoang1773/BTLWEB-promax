import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Login from "../Login/Login";
import History from "../History/History";
import Deliveryy from "../Delivery/Deliveryy";
import CartHistory from "../CartHistory/CartHistory";
import Checkout from "../Checkout/Checkout";
import Register from "../Register/Register";
import Detail from "../Detail/Detail";
import Infomation from "../Infomation/Infomation";
import Search from "../Search/Search";
import TabNavigation from "../Stack/TabNavigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../Home/Home";
const Stack = createNativeStackNavigator();
const StackScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="TabNavigation" component={TabNavigation} options={{ headerShown: false }} />
        <Stack.Screen name="History" component={History} options={{ headerShown: false }} />
        <Stack.Screen name="Deliveryy" component={Deliveryy} options={{ headerShown: false }} />
        <Stack.Screen name="CartHistory" component={CartHistory} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="Detail" component={Detail} options={{ headerShown: false }} />
        <Stack.Screen name="Infomation" component={Infomation} options={{ headerShown: false }} />
        <Stack.Screen name="Checkout" component={Checkout} options={{ headerShown: false }} />
        <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackScreen;

const styles = StyleSheet.create({});
