import {
    FlatList,
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ActivityIndicator,
    Alert,
    TouchableHighlight,
    Pressable
} from 'react-native'
import axios from "axios";
import { Entypo } from "@expo/vector-icons";

import { colors } from "../../constants/constants";
import { FontAwesome6 } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Foundation } from "@expo/vector-icons";
import Ionicons from '@expo/vector-icons/Ionicons';
import ItemCartHistory from './ItemCartHistory';
import React, { useEffect, useState } from "react";




const CartHistory = ({ navigation, route }) => {

    const { product, money } = route.params;
   
    const [loading, setLoading] = useState(false);
    function formatPrice(price = price) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }
    return (
        <SafeAreaView

            style={{
                flex: 1,
                backgroundColor: colors.secondary,
            }}
        >
            {loading && (
                <View style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 10000
                }}>
                    <ActivityIndicator size="large" color="#3498db" />
                </View>
            )}
            <View
                style={{
                    justifyContent: "center",
                    flexDirection: "row",
                }}
            >
                <View
                    style={{ backgroundColor: "white", flex: 1, alignItems: "center" }}
                >
                    <Text style={[styles.text_header, { color: colors.primary }]}>
                        Chi tiết đơn hàng
                    </Text>
                </View>
            </View>
            <ScrollView>
                {product.map((item, index) => {
                    return (
                        <ItemCartHistory
                            key={index}
                            name={item.product.name}
                            price={item.product.sale_price > 0 ? item.product.sale_price : item.product.price}
                            quantity={item.quantity}
                            image={item.product.image}
                           
                        />
                    )
                })}


                <View style={{ marginTop: 10, paddingHorizontal: 10 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                        Tổng tiền:{formatPrice(money)}
                    </Text>
                </View>
                <View
                    style={{
                        paddingHorizontal: 10,
                        flexDirection: "row",
                        justifyContent: "flex-end",
                        paddingBottom: 20,

                        marginTop: 5,
                    }}
                >
                    <TouchableOpacity 
                    onPress={()=> navigation.goBack()}
                    activeOpacity={0.7}>
                        <Text
                            style={{
                                padding: 10,
                                backgroundColor: "black",
                                color: "white",
                                marginLeft: 10,
                                fontWeight: 'bold',
                                borderRadius: 5,
                                fontSize: 16,
                            }}
                        >
                            Quay lại
                        </Text>
                    </TouchableOpacity>


                </View>
            </ScrollView>



        </SafeAreaView>

    )
}

export default CartHistory

const styles = StyleSheet.create({

    text_header: {
        fontSize: 30,
        fontWeight: "bold",
    },

})