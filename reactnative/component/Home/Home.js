import { Button, SafeAreaView, StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ActivityIndicator, TextInput, ScrollView } from 'react-native'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import Swiper from 'react-native-swiper';

const Home = ({ navigation, route }) => {


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
        // console.log(response.data)
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
    console.log('ok')
    getProductStock();
    getApi();

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
    console.log('ok')
    navigation.navigate('Search', { key })
    setKey('')
    setSearch([])
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
        style={{ backgroundColor: 'red', flexDirection: 'row', paddingVertical: 10, paddingHorizontal: 10, paddingTop: 30 }}>
        <View style={{ width: '75%', marginRight: 20 }}>
          <Ionicons
            onPress={() => { SearchProduct() }}
            name="search-outline" style={{ fontSize: 20, position: 'absolute', zIndex: 999, left: 5, top: 5 }} />
          <TextInput

            onChangeText={(text) => { Search(text), setKey(text) }}
            value={key}
            style={{ backgroundColor: '#EEEEEE', borderWidth: 1, borderColor: 'black', borderRadius: 5, paddingLeft: 25, width: '100%', height: 30 }} />

        </View>
        <Ionicons name="cart-outline" style={{ fontSize: 30, width: '10%', marginRight: 10 }} />
        <Ionicons name="chatbubble-ellipses-outline" style={{ fontSize: 30, width: '10%' }} onPress={() => alert('Tính năng chát chưa sẵn sàng ok')} />
      </View>

      {/* Search cái render sản phẩm là liền */}
      <View style={{}}>
        {search.map((item, index) => {
          return (
            <TouchableOpacity key={index} style={{ flexDirection: 'row', backgroundColor: '#fff', padding: 10, borderWidth: 1 }}
              onPress={() => {
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
              }
            >
              <Image
                source={{ uri: `http://10.0.3.2:8000/storage/images/${item.image}` }}
                style={{ width: 30, height: 30, marginRight: 10 }} />
              <Text>{item.name} - {item.id} </Text>
            </TouchableOpacity>
          )
        })}
      </View>



      {/* View chính */}
      <ScrollView style={{ marginBottom: 60, backgroundColor: '#F5F5F5' }}>

        {/* View slider */}
        <Swiper autoplay={true} style={{ height: 200, marginTop: 5 }}>
          <View style={styles.slide}>
            <Image source={{ uri: `https://antimatter.vn/wp-content/uploads/2022/11/hinh-anh-gai-xinh-viet-nam.jpg` }} style={{ width: '90%', height: '100%', alignSelf: 'center' }} />
          </View>
          <View style={styles.slide}>
            <Image source={{ uri: `https://phunugioi.com/wp-content/uploads/2020/04/hinh-anh-gai-xinh-rang-khenh.jpg` }} style={{ width: '90%', height: '100%', alignSelf: 'center' }} />
          </View>
          <View style={styles.slide}>
            <Image source={{ uri: `https://allimages.sgp1.digitaloceanspaces.com/photographereduvn/2022/07/1656872943_849_Top-500-hinh-anh-nguoi-mau-Bikini-dep-sexy-nong.jpg` }} style={{ width: '90%', height: '100%', alignSelf: 'center' }} />
          </View>
        </Swiper>

        {/* View sản phẩm nổi bật */}

        <View style={{ paddingHorizontal: 10, marginHorizontal: 5, }}>
          <Text style={{ fontSize: 16, color: 'red', paddingVertical: 10 }}>Sản phẩm nổi bật {key}</Text>
          <ScrollView horizontal style={{ paddingVertical: 10 }}>
            {stock.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => {
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


          {/* View render ra tất cả sản phẩm  */}
          <Text style={{ marginVertical: 10, color: 'red', fontSize: 18 }}>DEAL TỐT DÀNH CHO BẠN MỚI</Text>
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