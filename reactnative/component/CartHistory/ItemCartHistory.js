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
import { colors } from "../../constants/constants";
import { Entypo } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useEffect, useState } from "react";


const ItemCartHistory = ({name, price, quantity, image, money}) => {

    function formatPrice(price = price) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      }
    return (
        <View>

            <View style={{ backgroundColor: "white", marginTop: 4, borderRadius: 6 }}>
                <TouchableHighlight

                    underlayColor={colors.secondary}
                    style={styles.touchable}
                >
                    <View>
                        <View style={styles.branch}>
                            <Entypo
                                style={{ fontSize: 16 }}
                                name="shop"
                                size={24}
                                color={colors.primary}
                            />
                            <Text
                                style={{
                                    fontSize: 16,
                                    marginLeft: 4,
                                    color: colors.primary,
                                    fontWeight: 'bold',
                                }}
                            >
                                2B-Technology
                            </Text>
                        </View>
                        <View style={styles.wrapper}>
                            <View
                                style={{
                                    flexDirection: "row",
                                }}
                            >
                                <Pressable
                                    style={{
                                        alignItems: "center",
                                        justifyContent: "center",
                                        marginRight: 20,
                                    }}

                                >
                                    <Ionicons
                                        style={{ marginRight: 10, fontSize: 25, backgroundColor: '#66FF99' }}
                                        name="checkmark-done-outline"

                                    />
                                </Pressable>
                                <Image
                                    style={styles.img}
                                    source={{
                                        uri:  `http://10.0.3.2:8000/storage/images/${image}`
                                    }}
                                />
                                <View style={styles.description}>
                                    <Text style={styles.title}>{(name.length > 25 ? name.slice(0, 25) + '...' : name)}</Text>
                                    <Text style={styles.price}>{formatPrice(price)} đ</Text>
                                    <View style={styles.counter}>
                                        <TouchableHighlight
                                            underlayColor={colors.secondary}
                                            style={{
                                                borderWidth: 1,
                                                borderColor: colors.tertiary,
                                                width: 24,
                                                height: 24,
                                                alignItems: "center",
                                                justifyContent: "center",
                                                borderTopLeftRadius: 8,
                                                borderBottomLeftRadius: 8,
                                                borderRightWidth: 0,
                                            }}

                                        >
                                            <Text style={{ color: colors.tertiary }}>-</Text>
                                        </TouchableHighlight>
                                        <View
                                            style={{
                                                borderWidth: 1,
                                                borderColor: colors.tertiary,
                                                width: 24,
                                                height: 24,
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    color: colors.primary,

                                                    fontWeight: 'bold',
                                                }}
                                            >
                                                {quantity}
                                            </Text>
                                        </View>
                                        <TouchableHighlight
                                            underlayColor={colors.secondary}
                                            style={{
                                                borderWidth: 1,
                                                borderColor: colors.tertiary,
                                                width: 24,
                                                height: 24,
                                                alignItems: "center",
                                                justifyContent: "center",
                                                borderTopRightRadius: 8,
                                                borderBottomRightRadius: 8,
                                                borderLeftWidth: 0,
                                            }}

                                        >
                                            <Text style={{ color: colors.tertiary }}>+</Text>
                                        </TouchableHighlight>
                                    </View>
                                </View>
                            </View>

                        </View>
                    </View>
                </TouchableHighlight>
            </View>


        </View>
    )
}

export default ItemCartHistory

const styles = StyleSheet.create({
    text_header: {
        fontSize: 30,
        fontWeight: "bold",
    },
    wrapper: {
        flexDirection: "row",
        flex: 1,
        backgroundColor: "white",
        borderWidth: 1,
        padding: 16,
        alignItems: "center",
    },
    img: {
        width: 60,
        height: 60,
        padding: 10,
    },
    description: {
        marginLeft: 10,
    },
    title: {
        fontSize: 20,
    },
    price: {
        color: colors.primary,
        fontSize: 16,
    },
    color: {
        color: "#aaa",
    },
    branch: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 6,
        paddingHorizontal: 26,
        borderBottomWidth: 1
    },
    touchable: {},
    wrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        flex: 1,
        paddingVertical: 4,
        paddingHorizontal: 26,
    },
    img: {
        width: 60,
        padding: 10,
    },
    description: {
        marginLeft: 10,
    },
    title: {
        fontSize: 18,
    },
    price: {
        color: colors.primary,
        fontSize: 16,
        fontWeight: 'bold',
    },
    counter: {
        flexDirection: "row",
        alignItems: "center",
    },
})