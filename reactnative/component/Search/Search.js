import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image,ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, font } from '../../constants/constants';

import axios from 'axios';

const Search = ({ route, navigation }) => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false);
    const { key, customerid } = route.params;
    console.log(customerid + ' search')

    useEffect(() => {
        axios.post('http://10.0.3.2:8000/api/search', { value: key })
            .then((response) => {
                setProduct(response.data)
            })
            .catch((error) => {
                console.log('lỗii', error)
            })
    }, [])

    function formatPrice(price = price) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }

    return (

        product.length > 0 ? (

            < SafeAreaView style={{height:'100%', width: '100%'}}>
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
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                    <Text style={{ fontSize: 20 }} onPress={() => navigation.goBack()}>{'<'} Quay lại</Text>
                    <Text style={{ color: 'red', fontSize: 18 }}> Từ khóa "{key} "</Text>
                </View>
                <View style={{ marginHorizontal: 10 }}>

                    <FlatList
                        scrollEnabled={false}
                        data={product}
                        numColumns={2}
                        columnWrapperStyle={styles.row}
                        renderItem={({ item }) =>
                            <View style={{ paddingBottom: 20 }}>
                                {
                                    ((item.price - (item.sale_price != 0 ? item.sale_price : item.price)) / item.price) * 100 !== 0 && (
                                        <View style={{ position: "absolute", backgroundColor: colors.primary, width: 35, height: 15, top: 10, left: -3, zIndex: 99, borderBottomRightRadius: 2, borderTopRightRadius: 2 }}>
                                            <Text style={{ fontFamily: "semiBold", fontSize: 9, color: "yellow", textAlign: "center" }}>-{Math.round(((item.price - (item.sale_price != 0 ? item.sale_price : item.price)) / item.price) * 100)}%</Text>
                                            <View style={{ position: "absolute", top: "100%", zIndex: 99, borderWidth: 2, borderBottomColor: "transparent", borderLeftColor: "transparent", borderTopColor: colors.primary, borderRightColor: colors.primary }}></View>
                                        </View>
                                    )

                                }
                                <TouchableOpacity key={item.id} onPress={() => {
                                    setLoading(true);
                                    setTimeout(() => {
                                        setLoading(false);
                                        navigation.navigate('Detail',
                                            {
                                                customer: customerid,
                                                id: item.id,
                                                name: item.name,
                                                image: item.image,
                                                price: item.price,
                                                sale_price: item.sale_price,
                                                category_id: item.category_id,
                                                description: item.description,
                                            }
                                        )
                                    }, 1000);

                                }
                                } >
                                    <Image source={{ uri: `http://10.0.3.2:8000/storage/images/${item.image}` }} style={{ width: 180, height: 150 }} />
                                    <View style={{ backgroundColor: '#FFEEE8', paddingLeft: 5 }}>
                                        <Text style={{ fontWeight: 'bold' }}>{item.name ? (item.name.length > 20 ? item.name.slice(0, 20) + '...' : item.name) : ''}</Text>
                                        {

                                            item.sale_price == 0
                                                ?
                                                (<Text style={{ fontSize: 12, fontFamily: "medium", color: colors.primary }}>{formatPrice(item.sale_price > 0 ? item.sale_price : item.price)}đ</Text>)
                                                :
                                                (
                                                    <View>
                                                        <Text style={{ fontSize: 10, textDecorationLine: 'line-through', fontFamily: "thin" }}>{formatPrice(item.price)} đ</Text>
                                                        <Text style={{ fontSize: 12, fontFamily: "medium", color: colors.primary }}>{formatPrice(item.sale_price > 0 ? item.sale_price : item.price)} đ</Text>
                                                    </View>
                                                )
                                        }
                                    </View>
                                </TouchableOpacity>
                            </View>
                        }
                    />
                </View>
            </SafeAreaView >) : (< SafeAreaView >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                    <Text style={{ fontSize: 20 }} onPress={() => navigation.goBack()}>{'<'} Quay lại</Text>
                    {/* <Text style={{ color: 'red', fontSize: 18 }}> keywork "{key} "</Text> */}
                </View>
                <Text style={{ textAlign: 'center', paddingTop: 10, fontSize: 18, color: 'red' }}>Không tồn tại sản phẩm với từ khóa "{key}" </Text>
            </SafeAreaView >)


    )
}

export default Search

const styles = StyleSheet.create({
    row: {
        flex: 1,
        justifyContent: 'space-between'
    },
})