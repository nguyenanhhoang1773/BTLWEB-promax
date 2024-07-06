import * as React from "react";
import Home from "../Home/Home";
import Cart from "../Cart/Cart";
import Infomation from "../Infomation/Infomation";
import Notification from "../Notification/Notification.js";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "../../constants/constants";
const Tab = createBottomTabNavigator();

const TabNavigation = ({ navigation, route }) => {
  const { customer, name, email } = route.params;
  // React.useEffect(() =>{alert('xin chào ' + name)} )
  return (


    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Trang chủ") {
            iconName = focused ? "home" : "home-sharp";
          } else if (route.name === "Login") {
            iconName = focused ? "person-outline" : "person-circle-outline";
          } else if (route.name === "Giỏ hàng") {
            iconName = focused ? "cart-outline" : "cart-sharp";
          } else if (route.name === "Register") {
            iconName = focused ? "aperture-outline" : "aperture-sharp";
          } else if (route.name === "Tôi") {
            iconName = focused ? "person-outline" : "person";
          } else if (route.name === "Thông báo") {
            iconName = focused ? "notifications-outline" : "notifications";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        options={{ headerShown: false }}
        name="Trang chủ"
        initialParams={{ customer: customer, name: name, email: email }}
        component={Home} />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Giỏ hàng"
        initialParams={{ customer: customer, name: name, email: email }}
        component={Cart} />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Tôi"
        initialParams={{ customer: customer, name: name, email: email }}
        component={Infomation} />

      <Tab.Screen
        options={{ headerShown: false }}
        name="Thông báo"
        initialParams={{ customer: customer, name: name, email: email }}
        component={Notification} />

    </Tab.Navigator>

  )
}

export default TabNavigation

