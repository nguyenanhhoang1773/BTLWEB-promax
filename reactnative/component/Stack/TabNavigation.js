import * as React from "react";
import Home from "../Home/Home";
import Cart from "../Cart/Cart";
import Infomation from "../Infomation/Infomation";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
const Tab = createBottomTabNavigator();

const TabNavigation = ({ navigation, route }) => {
  const { customer, name, email } = route.params;
  // React.useEffect(() =>{alert('xin chào ' + name)} )
  return (


    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-sharp";
          } else if (route.name === "Login") {
            iconName = focused ? "person-outline" : "person-circle-outline";
          } else if (route.name === "Cart") {
            iconName = focused ? "cart-outline" : "cart-sharp";
          } else if (route.name === "Register") {
            iconName = focused ? "aperture-outline" : "aperture-sharp";
          } else if (route.name === "Tôi") {
            iconName = focused ? "person-outline" : "person";
          }


          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        options={{ headerShown: false }}
        name="Home"
        initialParams={{ customer: customer, name: name, email: email }}
        component={Home} />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Cart"
        initialParams={{ customer: customer, name: name, email: email }}
        component={Cart} />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Tôi"
        initialParams={{ customer: customer, name: name, email: email }}
        component={Infomation} />

    </Tab.Navigator>

  )
}

export default TabNavigation

