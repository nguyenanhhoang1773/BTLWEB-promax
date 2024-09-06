import { Button, SafeAreaView, Alert, StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ActivityIndicator, TextInput, ScrollView } from 'react-native'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import Swiper from 'react-native-swiper';
import { colors, font } from '../../constants/constants';
import ItemStock from '../Item/ItemStock';
import Item from '../Item/Item';
import { AntDesign } from '@expo/vector-icons';
const Home = ({ navigation, route }) => {

  const { customer, name, email } = route.params;
  console.log(customer + ' home')
  // useState hàm đc sử dụng khi có sựu tahy đổi dữ liệu
  const [product, setProduct] = useState([])
  const [stock, setStock] = useState([])
  const [search, setSearch] = useState([])
  const [loading, setLoading] = useState(false);
  const [key, setKey] = useState('');
  //hàm lấy ra toàn bộ sản phẩm
  const getApi = () => {
    axios.get('http://10.0.3.2:8000/api/list-product')
      .then((response) => {
        setProduct(response.data)
        

      })
      .catch((error) => {
        console.log('lỗiii', error)
      })

  }



  //hàm lấy ra sản phẩm nổi bâtj
  const getProductStock = () => {
    axios.get('http://10.0.3.2:8000/api/list-product-stock')
      .then((response) => {
        setStock(response.data)
      })
      .catch((error) => {
        console.log('lỗiii', error)
      })

  }


  //khi project bắt đầu thì hàm useEffect đc chạy đầu tiên


  useEffect(() => {

    getProductStock();
    getApi();

    // console.log(unsubscribe)
    // return unsubscribe;
  }, []);

  //format lại giá tiền
  function formatPrice(price = price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }



  //render sản phẩm ra liên tục


  const Search = (text) => {
    setTimeout(() => {

    }, 3000);
    axios.post('http://10.0.3.2:8000/api/search', { value: text })
      .then((response) => {
        if (text.length === 0) {
          setSearch([])
        }
        else {
          setSearch(response.data)
        }
      })
      .catch((error) => {
        console.log('lỗii', error)
      })

  }

  // sản phâmr chuyểntrang và hiển thị  khi đc ấn nút tìm kiếm
  const SearchProduct = () => {
    if (key.length !== 0) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        console.log(customer + "SearchProduct")
        navigation.navigate('Search', { key, customerid: customer })
        setKey('')
        setSearch([])

      }, 2000);
    } else {
      Alert.alert('Thông báo', 'Vui lòng nhập từ khóa trước khi tìm kiếm', [
        {
          text: 'ok'
        }
      ])
    }


  }

  return (
    <SafeAreaView>

      {/* loading khi ấn vào 1 cái gì đó */}
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

      {/* View Tìm kiếm sản phẩm */}
      <View
        style={{ backgroundColor: colors.primary, flexDirection: 'row', paddingHorizontal: 10, paddingBottom: 10, paddingTop: 30 }}>
        <View style={{ width: '75%', marginRight: 10, justifyContent: "center", alignItems: "center", }}>
          <Ionicons
            onPress={() => { SearchProduct() }}
            name="search-outline" style={{ fontSize: 18, position: 'absolute', zIndex: 999, left: 5, top: 5 }} />
          <TextInput
            placeholder='Iphone 14 promax'
            onChangeText={(text) => { Search(text), setKey(text) }}
            value={key}
            style={{ backgroundColor: '#EEEEEE', borderColor: 'black', borderWidth: 0, borderRadius: 2, paddingLeft: 28, width: '100%', height: 30 }} />

        </View>
        <Ionicons
          onPress={() => { navigation.navigate('Giỏ hàng', { customer: customer }) }}
          name="cart-outline" style={{ fontSize: 24, color: "white", width: '10%', marginRight: 10 }} />
        <Ionicons name="chatbubble-ellipses-outline" style={{ fontSize: 24, color: "white", width: '10%' }}
          onPress={() => Alert.alert('Thông báo', 'Tính năng chát chưa sẵn sàng', [

            {
              text: 'OK',
              // onPress: () => navigation.goBack()
            },

          ])} />

      </View>

      {/* Search cái render sản phẩm là liền */}
      <View style={{ width: '90%', marginLeft: 30, zIndex: 30, position: 'absolute', top: 70 }}>
        {search.map((item, index) => {
          return (
            <TouchableOpacity key={index} style={{ flexDirection: 'row', backgroundColor: '#fff', padding: 10, borderWidth: 1 }}
              onPress={() => {
                setLoading(true);
                setTimeout(() => {
                  setLoading(false);
                  navigation.navigate('Detail',
                    {
                      customer: customer,
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
              }
            >
              <Image
                source={{ uri: `http://10.0.3.2:8000/storage/images/${item.image}` }}
                style={{ width: 30, height: 30, marginRight: 10 }} />
              <Text>{item.name ? (item.name.length > 35 ? item.name.slice(0, 35) + '...' : item.name) : ''}  </Text>
            </TouchableOpacity>
          )
        })

        }
      </View>



      {/* View chính */}
      <ScrollView style={{ marginBottom: 60, backgroundColor: '#F5F5F5' }}>

        {/* View slider */}
        <Swiper autoplay={true} style={{ height: 200 }}>

          <View style={styles.slide}>
            <Image source={{ uri: `https://marketingtoancau.com/files/product/thiet-ke-banner-chuyen-nghiep-cho-cua-hang-dien-thoai-nhat-nam-mobile-dqovvmz5.jpg` }} style={{ width: "100%", height: '100%', alignSelf: 'center' }} />
          </View>
          <View style={styles.slide}>
            <Image source={{ uri: `https://i.ytimg.com/vi/36HnmEcKDJk/maxresdefault.jpg` }} style={{ width: "100%", height: '100%', alignSelf: 'center' }} />
          </View>
          <View style={styles.slide}>
            <Image source={{ uri: `https://img.freepik.com/premium-psd/gaming-laptop-sale-promotion-banner_252779-743.jpg` }} style={{ width: "100%", height: '100%', alignSelf: 'center' }} />
          </View>
          <View style={styles.slide}>
            <Image source={{ uri: `https://tse3.mm.bing.net/th?id=OIP.rYHSKdkdOxRFVB5OWPnBuAHaCx&pid=Api&P=0&h=180https://tse3.mm.bing.net/th?id=OIP.rYHSKdkdOxRFVB5OWPnBuAHaCx&pid=Api&P=0&h=180` }} style={{ width: "100%", height: '100%', alignSelf: 'center' }} />
          </View>
          <View style={styles.slide}>
            <Image source={{ uri: `https://i.pinimg.com/originals/ef/80/83/ef8083bfe79088dc00bd8eca9c821cd5.jpg` }} style={{ width: "100%", height: '100%', alignSelf: 'center' }} />
          </View>
        </Swiper>

        {/* View sản phẩm nổi bật */}

        <View >
          <View style={{ backgroundColor: "white", marginTop: 10, paddingHorizontal: 10, paddingBottom: 10 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: 10, alignItems: "center" }}>
              <Text style={{
                fontFamily: "semiBold",
                fontSize: font.sizePrimaryHighLight, color: colors.primary
              }}>SẢN PHẨM NỔI BẬT</Text>
              <TouchableOpacity
                onPress={() => { }}
              >
                <Text style={{
                  fontFamily: "regular",
                  fontSize: font.sizePrimary, color: colors.tertiary,
                  marginRight: 2
                }}>Xem thêm
                  <AntDesign name="right" size={12} color={colors.tertiary} />
                </Text>
              </TouchableOpacity>
            </View>
            {stock && <ScrollView horizontal style={{ borderRadius: 4 }}>
              {stock.map((item, index) => {
                return (
                  <ItemStock customer={customer} item={item} key={index} setLoading={setLoading} navigation={navigation} />
                )
              })}

            </ScrollView>}

          </View>

          {/* View render ra tất cả sản phẩm  */}
          <View style={{ marginTop: 12, paddingBottom: 20, paddingHorizontal: 10, backgroundColor: "white" }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", paddingTop: 8, alignItems: "center" }}>
              <Text style={{
                fontFamily: "semiBold",
                fontSize: font.sizePrimaryHighLight, color: colors.primary
              }}>DEAL TỐT DÀNH CHO BẠN MỚI</Text>
              <TouchableOpacity
                onPress={() => { }}
              >
                <Text style={{
                  fontFamily: "regular",
                  fontSize: font.sizePrimary, color: colors.tertiary
                }}>Xem thêm
                  <AntDesign name="right" size={12} color={colors.tertiary} />
                </Text>
              </TouchableOpacity>
            </View>
            <FlatList
              style={{}}
              scrollEnabled={false}
              data={product}
              numColumns={2}
              columnWrapperStyle={styles.row}
              renderItem={({ item }) =>
                <Item customer={customer} item={item} navigation={navigation} setLoading={setLoading} />
              }
            />
          </View>

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
  },

})