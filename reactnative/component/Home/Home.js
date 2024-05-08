import { Button, SafeAreaView, StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ActivityIndicator, TextInput, ScrollView } from 'react-native'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';


const Home = ({ navigation, route }) => {

  const [product, setProduct] = useState([])
  const [stock, setStock] = useState(['dat'])
  const [load, setLoad] = useState(true)


  const getApi = () => {
    axios.get('http://10.0.3.2:8000/api/list-product')
      .then((response) => {
        setProduct(response.data)
        setLoad(false);
      })
      .catch((error) => {
        console.log('lỗiii', error)
      })

  }
  const getProductStock = () => {
    axios.get('http://10.0.3.2:8000/api/list-product-stock')
      .then((response) => {
        setStock(response.data)
        setLoad(false);
      })
      .catch((error) => {
        console.log('lỗiii', error)
      })

  }

  useEffect(() => {
    console.log('okee')
    setLoad(true)
    getProductStock();
    getApi();

  }, []);
  const price = 'ee'
  function formatPrice(price = price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }
  return (
    <SafeAreaView>
      <View
        style={{ backgroundColor: 'red', flexDirection: 'row', paddingVertical: 10, paddingHorizontal: 10, paddingTop: 30 }}>
        <View style={{ width: '75%', marginRight: 20 }}>
          <Ionicons name="search-outline" style={{ fontSize: 20, position: 'absolute', zIndex: 999, left: 5, top: 5 }} />
          <TextInput style={{ backgroundColor: '#EEEEEE', borderWidth: 1, borderColor: 'black', borderRadius: 5, paddingLeft: 25, width: '100%', height: 30 }} />
        </View>
        <Ionicons name="cart-outline" style={{ fontSize: 30, width: '10%', marginRight: 10 }} />
        <Ionicons name="chatbubble-ellipses-outline" style={{ fontSize: 30, width: '10%' }} onPress={() => alert('Tính năng chát chưa sẵn sàng ok')} />
      </View>

      <ScrollView style={{ marginBottom: 125, backgroundColor: '#F5F5F5' }}>
        <Image source={require('../../assets/logo.jpeg')} style={{ width: '100%', height: 200, marginTop:10 }} />
        <View style={{ paddingHorizontal: 10, marginHorizontal: 5, }}>
          <Text style={{ fontSize: 16, color: 'red', paddingVertical: 10 }}>Sản phẩm nổi bật</Text>
          <ScrollView horizontal style={{ paddingVertical: 10 }}>
            {stock.map((item, index) => {
              return (
                <TouchableOpacity key={index}>
                  <View style={{ marginRight: 20, }}>
                    <Text style={{ textAlign: 'center' }}>{item.name ? (item.name.length > 15 ? item.name.slice(0, 15) + '...' : item.name) : ''}</Text>
                    <Image
                      source={{ uri: `http://10.0.3.2:8000/storage/images/${item.image}` }}
                      style={{ width: 120, height: 90, overflow: 'hidden', borderRadius: 10 }} />
                  </View>
                </TouchableOpacity>
              )
            })}
          </ScrollView>
          <Text style={{ marginVertical: 10, color: 'red', fontSize: 18 }}>DEAL TỐT DÀNH CHO BẠN MỚI</Text>
          <FlatList
            scrollEnabled={false}
            data={product}
            numColumns={2}
            columnWrapperStyle={styles.row}
            renderItem={({ item }) =>
              <View style={{ paddingBottom: 20 }}>
                <TouchableOpacity onPress={() => alert('đang xử lý')} >
                  <Image source={{ uri: `http://10.0.3.2:8000/storage/images/${item.image}` }} style={{ width: 180, height: 150 }} />
                  <View style={{ borderWidth: 1, backgroundColor: '#FFEEE8', paddingLeft: 5 }}>
                    <Text style={{ fontWeight: 'bold' }}>{item.name ? (item.name.length > 20 ? item.name.slice(0, 20) + '...' : item.name) : ''}</Text>
                    <Text style={{ textDecorationLine: 'line-through' }}>Giá cũ: {formatPrice(item.price)}đ</Text>
                    <Text>Còn: {formatPrice(item.sale_price)}</Text>

                  </View>
                </TouchableOpacity>
              </View>
            }
          />

        </View>


      </ScrollView >

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