import { Button, SafeAreaView, StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ActivityIndicator, TextInput, ScrollView } from 'react-native'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';


const Home = ({ navigation, route }) => {

  const [product, setProduct] = useState([])
  const [stock, setStock] = useState(['dat'])
  const [load, setLoad] = useState(true)


  const getApi = () => {
    axios.get('http://10.0.2.2:8000/api/list-product')
      .then((response) => {
        setProduct(response.data)
        setLoad(false);
      })
      .catch((error) => {
        console.log('lỗiii', error)
      })

  }
  const getProductStock = () => {
    axios.get('http://10.0.2.2:8000/api/list-product-stock')
      .then((response) => {
        setStock(response.data)
        setLoad(false);
      })
      .catch((error) => {
        console.log('lỗii', error)
      })

  }

  useEffect(() => {
    console.log('okee')
    setLoad(true)
    getProductStock();
    getApi();

  }, []);
  const price = 'ee'
  function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }
  return (
    <SafeAreaView>
      <View
        style={{ backgroundColor: 'red', flexDirection: 'row', paddingVertical: 10, paddingHorizontal: 10, paddingTop: 20 }}>
        <View style={{ width: '75%', marginRight: 20 }}>
          <Ionicons name="search-outline" style={{ fontSize: 20, position: 'absolute', zIndex: 999, left: 5, top: 5 }} />
          <TextInput style={{ backgroundColor: '#EEEEEE', borderWidth: 1, borderColor: 'black', borderRadius: 5, paddingLeft: 25 }} />
        </View>
        <Ionicons name="cart-outline" style={{ fontSize: 30, width: '10%', marginRight: 10 }} />
        <Ionicons name="chatbubble-ellipses-outline" style={{ fontSize: 30, width: '10%' }} onPress={() => alert('Tính năng chát chưa sẵn sàng ok')} />

      </View>
      <View style={{ marginHorizontal: 5, marginBottom: 125 }}>
        <ScrollView style={{ paddingHorizontal: 10 }}>
          <Text style={{ fontSize: 16, color: 'red', paddingVertical: 10 }}>Sản phẩm nổi bật</Text>
          <ScrollView horizontal style={{ paddingVertical: 10 }}>
            {stock.map((item, index) => {
              return (
                <TouchableOpacity key={index}>
                  <View style={{ marginRight: 20, }}>
                    <Text  style={{ textAlign: 'center' }}>{item.name ? (item.name.length > 15 ? item.name.slice(0, 15) + '...' : item.name) : ''}</Text>
                    <Image
                      source={{ uri: `http://10.0.2.2:8000/storage/images/${item.image}` }}
                      style={{ width: 120, height: 90, overflow: 'hidden', borderRadius: 10 }} />
                  </View>
                </TouchableOpacity>
              )
            })}
          </ScrollView>
          <Text style={{ marginVertical: 10 }}>Danh sách sản phẩm ok</Text>
          <FlatList
            scrollEnabled={false}
            data={product}
            numColumns={2}
            columnWrapperStyle={styles.row}
            renderItem={({ item }) =>
              <View style={{ paddingBottom: 20 }}>
                <TouchableOpacity onPress={() => alert('đang xử lý')} >
                  <Image source={{ uri: `http://10.0.2.2:8000/storage/images/${item.image}` }} style={{ width: 180, height: 150, borderWidth: 1, borderColor: 'black' }} />
                  <View style={{ borderWidth: 1, backgroundColor: 'red', paddingLeft: 5 }}>
                    <Text style={{ textDecorationLine: 'line-through' }}>Giá: {formatPrice(item.price)}đ</Text>
                    <Text>Giá: {formatPrice(item.sale_price)}</Text>
                    <Text style={{ fontWeight: 'bold' }}>{item.name ? (item.name.length > 20 ? item.name.slice(0, 20) + '...' : item.name) : ''}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            }
          />

        </ScrollView>


      </View >

    </SafeAreaView>


  )
}

export default Home

const styles = StyleSheet.create({
  row: {
    flex: 1,
    justifyContent: 'space-between'

  }
})