import { Image, ScrollView, StyleSheet, Button, TouchableHighlight, ActivityIndicator, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons';
import axios from 'axios';
import { colors, font } from '../../constants/constants';

const Detail = ({ route, navigation }) => {

    const [listImage, setListImage] = useState([])
    const {
        customer,
        id,
        name,
        image,
        price,
        sale_price,
        category_id,
        description,
        created_at } = route.params;

    useEffect(() => {
        axios.post('http://10.0.3.2:8000/api/list-image', { image: id })
            .then((response) => {
                setListImage(response.data)
                console.log(customer + ' detail')

            })
            .catch((error) => {
                console.log('lỗiii', error)
            })
    }, []);



    const [quantity, setQuantity] = useState(1)
    const [feedback, setFeedback] = useState('')
    const plus = () => {
        setQuantity(quantity + 1)
    }
    const minus = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        } else {
            Alert.alert('Thông báo', 'Không thể giảm số lượng nữa', [

                { text: 'OK', onPress: () => console.log('ok') },
            ]);
        }
    }

    function formatPrice(price = price) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }

    const [loading, setLoading] = useState(false);

    const AddCart = () => {
        setLoading(true);
        axios.post('http://10.0.3.2:8000/api/addCart', {
            customerid: customer,
            productid: id,
            quantity: quantity,
            name: name,
            price: price,
            saleprice: sale_price,
            image: image

        })
            .then((response) => {
                console.log('add successfully')
            })
            .catch((error) => {
                console.log('lỗiii', error)
            })
        // Simulate a delay of 3 seconds
        setTimeout(() => {
            setLoading(false);
            Alert.alert('Thông báo', 'Thêm vào giỏ hàng thành công', [

                {
                    text: 'Trở lại',
                    onPress: () => navigation.goBack()
                },
                { text: 'OK', onPress: () => console.log('ok') },
            ]);
        }, 2000);
    }



    return (
        <SafeAreaView>
            {/* xử lý dữ liệu khi mua hàng hoặc thêm vào giỏ hàng */}
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
            <View style={{ flexDirection: 'row', borderTopWidth: 1, borderColor: colors.tertiary, position: 'absolute', bottom: 0, zIndex: 1111 }}>
                <Text
                    onPress={() => AddCart()}
                    style={{ backgroundColor: 'white', fontFamily: "medium", paddingVertical: 15, flex: 1, textAlign: 'center', fontSize: font.sizePrimaryHighLight }}>Thêm vào giỏ hàng</Text>
                <Text
                    onPress={() => {
                        setLoading(true);
                        setTimeout(() => {
                            setLoading(false);
                            navigation.navigate('Giỏ hàng', { customerid: customer })
                        }, 2000);
                    }}
                    style={{ fontFamily: "medium", color: "white", backgroundColor: colors.primary, paddingVertical: 15, flex: 1, textAlign: 'center', fontSize: font.sizePrimaryHighLight }}>Giỏ hàng </Text>
            </View>
            <View>
                <ScrollView >
                    <View >
                        <Ionicons
                            onPress={() => navigation.goBack()}
                            name="arrow-back-outline"
                            style={{ fontSize: 20, padding: 5, backgroundColor: colors.tertiary, color: "white", position: 'absolute', zIndex: 2, left: 10, borderRadius: 50, top: 10 }} />
                        <Ionicons
                            onPress={() => navigation.navigate('Cart')}
                            name="cart-outline" style={{ fontSize: 20, padding: 5, backgroundColor: colors.tertiary, color: "white", position: 'absolute', zIndex: 2, right: 10, borderRadius: 50, top: 10 }} />
                        <Ionicons name="share-social-outline" style={{ fontSize: 20, padding: 5, backgroundColor: colors.tertiary, color: "white", position: 'absolute', zIndex: 2, right: 50, borderRadius: 50, top: 10 }} />
                        <Image source={{ uri: `http://10.0.3.2:8000/storage/images/${image}` }} style={{ width: '100%', height: 350, objectFit: "cover" }} />
                    </View>
                    <View style={{ backgroundColor: "white" }}>
                        <View style={{}}>
                            <Text style={{ fontFamily: "medium", fontSize: 12, paddingHorizontal: 10 }}>Ảnh chi tiết</Text>

                            {/* Nhiều ảnh nhỏ */}
                            <ScrollView style={{ marginTop: 4, paddingHorizontal: 10 }} horizontal >
                                <TouchableOpacity style={{ borderWidth: 1, borderColor: "rgba(0,0,0,0.1)", borderRadius: 2 }}><Image source={{ uri: `http://10.0.3.2:8000/storage/images/${image}` }} style={{ width: 100, height: 100, marginRight: 10 }} /></TouchableOpacity>
                                {
                                    listImage.map((item, index) => {
                                        return (
                                            <TouchableOpacity style={{ borderWidth: 1, borderColor: "rgba(0,0,0,0.1)", marginLeft: 6, borderRadius: 2 }} key={index}>
                                                <Image source={{ uri: `http://10.0.3.2:8000/storage/images/${item.image}` }} style={{ width: 100, height: 100, marginRight: 10 }} />
                                            </TouchableOpacity>
                                        )
                                    })
                                }
                            </ScrollView>
                        </View>
                        {/* Giá sản phẩn */}
                        <View style={{ paddingHorizontal: 10, marginTop: 5, flexDirection: 'row', alignItems: 'flex-end' }} >
                            <Text style={{ color: colors.primary, fontFamily: "medium" }}><Text style={{ fontSize: 23, color: colors.primary, fontFamily: "medium" }}>{formatPrice(sale_price > 0 ? sale_price : price)}đ </Text></Text>
                            <Text style={{ paddingBottom: 3, marginLeft: 3, fontFamily: "medium", textDecorationLine: 'line-through', color: colors.tertiary }}>{formatPrice(sale_price==0 ? '': price + ' đ')}</Text>
                        </View>

                        {/* Số lượng sản phẩm */}
                        <View style={{ paddingHorizontal: 10,}}>
                            <Text style={{ fontFamily: "medium" }}>Số lượng:</Text>
                            <View style={{ flexDirection: 'row', paddingVertical: 5 }}>
                                <TouchableHighlight
                                    underlayColor={colors.secondary}
                                    style={{
                                        borderWidth: 1,
                                        borderColor: colors.tertiary,
                                        width: 24,
                                        height: 24,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderTopLeftRadius: 2,
                                        borderBottomLeftRadius: 2,
                                        borderRightWidth: 0,
                                    }}
                                    onPress={minus}
                                >
                                    <Text style={{ fontSize: 20, marginTop: -3 }}>-</Text>
                                </TouchableHighlight>
                                <View
                                    style={{
                                        borderWidth: 1,
                                        borderColor: colors.tertiary,
                                        width: 36,
                                        height: 24,
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Text onChangeText={(text) => setQuantity(text)}
                                        style={{ fontFamily: "medium", color: colors.primary }}>
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
                                        borderTopRightRadius: 2,
                                        borderBottomRightRadius: 2,
                                        borderLeftWidth: 0,
                                    }}  
                                    onPress={plus}
                                >
                                    <Text style={{ fontSize: 20, marginTop: -3 }}>+</Text>
                                </TouchableHighlight>
                            </View>
                        </View>

                        {/* Voucher */}
                        <View style={{ paddingHorizontal: 10, marginTop: 5 }}>
                            <View style={{ flexDirection: 'row', marginTop: 5 }}>
                                <Text style={{ fontFamily: "medium", color: colors.yellow, borderColor: colors.yellow, borderWidth: 1, paddingHorizontal: 5, fontSize: 10, marginRight: 10 }}>Miễn phí trả hàng</Text>
                                <Text style={{ fontFamily: "medium", color: colors.primary, borderColor: colors.primary, borderWidth: 1, paddingHorizontal: 5, fontSize: 10 }}>Mua 2 & giảm 3%</Text>
                            </View>
                        </View>

                        {/* Tên sản phẩm */}
                        <View style={{ paddingHorizontal: 10, marginTop: 2 }}>
                            <Text style={{ fontFamily: "semiBold", fontSize: 18 }}>{name}</Text>
                        </View>

                        {/* Cam kết miễn phí đổi trả */}
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, backgroundColor: "rgba(255, 235, 240, 1)", paddingHorizontal: 10, paddingVertical: 4 }}>
                            <Ionicons name="logo-codepen" style={{ fontSize: 35, color: colors.primary, marginRight: 10 }} />
                            <View>
                                <Text style={{ fontFamily: "medium", fontSize: 16, color: colors.primary }}>Đổi ý miễn phí 15 ngày</Text>
                                <Text style={{ fontFamily: "medium", color: '#808080' }}>Miễn 100% phí trả hàng</Text>
                            </View>
                        </View>

                        {/* Số lượng bán ra */}
                        <View style={{ paddingHorizontal: 10, marginTop: 10, paddingVertical: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Ionicons name="star" style={{ fontSize: 20, color: colors.yellow, marginRight: 4 }} />
                                <Text style={{ fontFamily: "medium" }}>4.7 / 5 | Đã bán 2,5k</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

                                <Ionicons name="heart-outline" style={{ fontSize: 30, color: colors.primary, marginRight: 10 }} />
                                <Ionicons name="mail-unread-outline" style={{ fontSize: 30, color: colors.primary }} />
                            </View>

                        </View>

                        {/* Top bán chạy */}
                        {/* <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, backgroundColor: 'rgba(255, 235, 240, 1)', paddingHorizontal: 10,paddingVertical:4 }}>
                            <Ionicons name="trending-up-outline" style={{ fontSize: 35, color: colors.primary, marginRight: 10 }} />
                            <View>
                                <Text style={{fontFamily:"medium", fontSize: 16, color: 'red' }}>Top bán chạy</Text>

                            </View>
                        </View> */}

                        {/* Chi tiết sản phẩm */}
                        <View style={{ paddingHorizontal: 10, marginTop: 10 }}>
                            <Text style={{ fontFamily: "semiBold", fontSize: 18 }}>Chi tiết sản phẩm</Text>
                            <View>
                                <Text style={{ fontFamily: "thin", marginLeft: 8, fontSize: 14 }}>
                                    {description}
                                </Text>
                            </View>
                        </View>
                        <View style={{ height: 1, backgroundColor: colors.secondary, marginTop: 5 }}></View>
                        {/* Đánh giá sản phẩm */}
                        <View style={{ paddingHorizontal: 10, marginTop: 5, paddingBottom: 70 }}>
                            <Text style={{ fontFamily: "semiBold", fontSize: 18 }}>Đánh giá sản phẩm</Text>
                            <View style={{ flexDirection: 'row', paddingVertical: 5 }}>
                                <Ionicons name="star" style={{ fontSize: 20, color: colors.yellow, marginRight: 10 }} />
                                <Ionicons name="star" style={{ fontSize: 20, color: colors.yellow, marginRight: 10 }} />
                                <Ionicons name="star" style={{ fontSize: 20, color: colors.yellow, marginRight: 10 }} />
                                <Ionicons name="star" style={{ fontSize: 20, color: colors.yellow, marginRight: 10 }} />
                                <Ionicons name="star-outline" style={{ fontSize: 20, marginRight: 10 }} />
                                <Text style={{ fontFamily: "medium", color: colors.primary }}>4/5 (565 đánh giá)</Text>
                            </View>
                            <View>
                                <Text style={{ fontFamily: "medium" }}>Để lại đánh giá của bạn:</Text>
                                <TextInput
                                    onChangeText={(text) => setFeedback(text)}
                                    placeholder='Đánh giá của bạn'
                                    style={{ fontFamily: "medium", marginTop: 5, borderRadius: 5 }} />
                            </View>
                            {/* <Text style={{ fontFamily:"medium",color:colors.primary}}>- {feedback}</Text> */}
                        </View>
                    </View>

                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default Detail

const styles = StyleSheet.create({})