import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';

const Search = ({ route, navigation }) => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false);
    const { key } = route.params;

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
        <SafeAreaView>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                <Text onPress={() => navigation.navigate('Home')}>Quay lại</Text>
                <Text style={{ color: 'red', fontSize: 18 }}> keywork "{key} "</Text>
            </View>
            <View style={{ marginHorizontal: 10 }}>
                <FlatList
                    scrollEnabled={false}
                    data={product}
                    numColumns={2}
                    columnWrapperStyle={styles.row}
                    renderItem={({ item }) =>
                        <View style={{ paddingBottom: 20 }}>
                            <TouchableOpacity key={item.id} onPress={() => {
                                setLoading(true);
                                setTimeout(() => {
                                    setLoading(false);
                                    navigation.navigate('Detail',
                                        {
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
                                    <Text style={{ textDecorationLine: 'line-through' }}>Giá cũ: {formatPrice(item.price)}đ - {item.id}</Text>
                                    <Text>Còn: {formatPrice(item.sale_price)}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    }
                />
            </View>
        </SafeAreaView>
    )
}

export default Search

const styles = StyleSheet.create({
    row: {
        flex: 1,
        justifyContent: 'space-between'
    },
})