import { Image, ScrollView, StyleSheet, Button, ActivityIndicator, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons';
import axios from 'axios';

const Detail = ({ route, navigation }) => {

    const [listImage, setListImage] = useState([])
    const {
        id,
        name,
        image,
        price,
        sale_price,
        category_id,
        description,
        created_at } = route.params;
    useEffect(() => {
        console.log('okee')

        axios.post('http://10.0.3.2:8000/api/list-image', { image: id })
            .then((response) => {
                setListImage(response.data)
                console.log(response.data)

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
            alert('không thê giảm số lượng nữa')
        }
    }

    function formatPrice(price = price) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }

    const [loading, setLoading] = useState(false);

    const AddCart = () => {
        setLoading(true);

        // Simulate a delay of 3 seconds
        setTimeout(() => {
            setLoading(false);
            Alert.alert('Thông báo', 'Thêm vào giỏ hàng thành công \nCảm ơn quý khách', [

                {
                    text: 'Trở lại',
                    onPress: () => navigation.navigate('TabNavigation')
                },
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);
        }, 3000);
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
            <View style={{ flexDirection: 'row', position: 'absolute', bottom: 0, zIndex: 1111 }}>
                <Text
                    onPress={() => AddCart()}
                    style={{ backgroundColor: '#FFEEE8', paddingVertical: 15, width: '50%', textAlign: 'center', fontSize: 18, borderColor: '#EE4D2D', borderWidth: 2 }}>Thêm vào giỏ hàng</Text>
                <Text
                    onPress={() => navigation.navigate('Cart')}
                    style={{ backgroundColor: '#EE4D2D', paddingVertical: 15, width: '50%', textAlign: 'center', fontSize: 18 }}>Mua ngay</Text>
            </View>

            <View>

                <ScrollView >
                    <View >
                        <Ionicons
                            onPress={() => navigation.goBack()}
                            name="arrow-back-outline"
                            style={{ fontSize: 25, padding: 5, backgroundColor: '#DDDDDD', position: 'absolute', zIndex: 2, left: 10, borderRadius: 50, top: 10 }} />
                        <Ionicons
                            onPress={() => navigation.navigate('Cart')}
                            name="cart-outline" style={{ fontSize: 25, padding: 5, backgroundColor: '#DDDDDD', position: 'absolute', zIndex: 2, right: 10, borderRadius: 50, top: 10 }} />
                        <Ionicons name="share-social-outline" style={{ fontSize: 25, padding: 5, backgroundColor: '#DDDDDD', position: 'absolute', zIndex: 2, right: 50, borderRadius: 50, top: 10 }} />
                        <Image source={{ uri: `http://10.0.3.2:8000/storage/images/${image}` }} style={{ width: '100%', height: 300 }} />
                    </View>
                    <View style={{ marginHorizontal: 10 }}>
                        <Text style={{ paddingVertical: 10 }}>Ảnh chi tiết</Text>

                        {/* Nhiều ảnh nhỏ */}
                        <ScrollView horizontal >
                            <TouchableOpacity><Image source={{ uri: `http://10.0.3.2:8000/storage/images/${image}` }} style={{ width: 100, height: 100, marginRight: 10 }} /></TouchableOpacity>
                            {
                                listImage.map((item, index) => {
                                    return (
                                        <TouchableOpacity key={index}>
                                            <Image source={{ uri: `http://10.0.3.2:8000/storage/images/${item.image}` }} style={{ width: 100, height: 100, marginRight: 10 }} />
                                        </TouchableOpacity>
                                    )
                                })
                            }
                        </ScrollView>

                        {/* Giá sản phẩn */}
                        <View style={{ marginTop: 5, flexDirection: 'row', alignItems: 'flex-end' }} >
                            <Text style={{ color: 'red' }}>đ<Text style={{ fontSize: 25 }}>{formatPrice(sale_price)}</Text></Text>
                            <Text style={{ paddingBottom: 3, textDecorationLine: 'line-through', color: '#808080' }}>{formatPrice(price)}</Text>
                        </View>

                        {/* Số lượng sản phẩm */}
                        <Text>Số lượng mua:</Text>
                        <View style={{ flexDirection: 'row', paddingVertical: 5 }}>
                            <Text style={{ fontSize: 15 }} onPress={minus}>-</Text>
                            <Text onChangeText={(text) => setQuantity(text)}
                                style={{ textAlign: 'center', width: 30, fontSize: 15, marginHorizontal: 20 }}>
                                {quantity}
                            </Text>
                            <Text style={{ fontSize: 15 }} onPress={plus}>+</Text>
                        </View>

                        {/* Voucher */}
                        <View style={{ marginTop: 5 }}>
                            <Text style={{ color: 'red' }}>Giá khi mua với <Ionicons name="logo-electron" style={{ fontSize: 15 }} /> Voucher</Text>
                            <View style={{ flexDirection: 'row', marginTop: 5 }}>
                                <Text style={{ color: '#33CCFF', borderColor: '#33CCFF', borderWidth: 1, paddingHorizontal: 5, fontSize: 10, marginRight: 10 }}>Miễn phí trả hàng</Text>
                                <Text style={{ color: 'red', borderColor: 'red', borderWidth: 1, paddingHorizontal: 5, fontSize: 10 }}>Mua 2 & giảm 3%</Text>
                            </View>
                        </View>

                        {/* Tên sản phẩm */}
                        <View style={{ marginTop: 10 }}>
                            <Text style={{ fontSize: 18 }}>{name}</Text>
                        </View>

                        {/* Cam kết miễn phí đổi trả */}
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, backgroundColor: '#FFEEE8', padding: 10 }}>
                            <Ionicons name="logo-codepen" style={{ fontSize: 35, color: 'red', marginRight: 10 }} />
                            <View>
                                <Text style={{ fontSize: 16, color: 'red' }}>Đổi ý miễn phí 15 ngày</Text>
                                <Text style={{ color: '#808080' }}>Miễn 100% phí trả hàng</Text>
                            </View>
                        </View>

                        {/* Số lượng bán ra */}
                        <View style={{ marginTop: 10, paddingVertical: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Ionicons name="star" style={{ fontSize: 20, color: 'yellow', marginRight: 10 }} />
                                <Text>4.7 / 5 | Đã bán 2,5k</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

                                <Ionicons name="heart-outline" style={{ fontSize: 30, color: 'black', marginRight: 30 }} />
                                <Ionicons name="mail-unread-outline" style={{ fontSize: 30, color: '#33CCFF' }} />
                            </View>

                        </View>

                        {/* Top bán chạy */}
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, backgroundColor: '#FFEEE8', padding: 10 }}>
                            <Ionicons name="trending-up-outline" style={{ fontSize: 35, color: 'red', marginRight: 10 }} />
                            <View>
                                <Text style={{ fontSize: 16, color: 'red' }}>Top bán chạy</Text>

                            </View>
                        </View>

                        {/* Chi tiết sản phẩm */}
                        <View style={{ marginTop: 10 }}>
                            <Text style={{ fontSize: 18 }}>Chi tiết sản phẩm</Text>
                            <View>
                                <Text>
                                    {description}
                                </Text>
                            </View>
                        </View>
                        <View style={{ height: 10, backgroundColor: '#808080', marginTop: 5 }}></View>
                        {/* Đánh giá sản phẩm */}
                        <View style={{ marginTop: 5, paddingBottom: 70 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Đánh giá sản phẩm</Text>
                            <View style={{ flexDirection: 'row', paddingVertical: 5 }}>
                                <Ionicons name="star" style={{ fontSize: 20, color: 'yellow', marginRight: 10 }} />
                                <Ionicons name="star" style={{ fontSize: 20, color: 'yellow', marginRight: 10 }} />
                                <Ionicons name="star" style={{ fontSize: 20, color: 'yellow', marginRight: 10 }} />
                                <Ionicons name="star" style={{ fontSize: 20, color: 'yellow', marginRight: 10 }} />
                                <Ionicons name="star-outline" style={{ fontSize: 20, marginRight: 10 }} />
                                <Text style={{ color: 'red' }}>4/5 (565 đánh giá)</Text>
                            </View>
                            <View>
                                <Text>Để lại đánh giá của bạn:</Text>
                                <TextInput
                                    onChangeText={(text) => setFeedback(text)}
                                    placeholder='Đánh giá của bạn'
                                    style={{ borderWidth: 1, marginTop: 5, borderRadius: 5, paddingLeft: 10 }} />
                            </View>
                            <Text style={{ color: 'red' }}>- {feedback}</Text>
                        </View>
                    </View>

                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default Detail

const styles = StyleSheet.create({})