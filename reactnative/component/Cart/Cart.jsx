import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Alert
} from "react-native";
import axios from 'axios';
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from "../../constants/constants";
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useEffect, useState } from 'react'
import ItemCart from "../ItemCart/ItemCart";


const Cart = ({ route, navigation }) => {
  const { customer, name, email } = route.params;
  console.log(customer + ' cart')
  const [cart, setCart] = useState([])
  const [loading, setLoading] = useState(false);


  const getCart = () => {
    Totol()
    axios.post('http://10.0.3.2:8000/api/cart', { customerid: customer })
      .then((response) => {
        setCart(response.data)
        console.log(response.data)

      })
      .catch((error) => {
        console.log('lỗiii', error)
      })
  }
  const Deletecart = (product_id) => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false);
      Alert.alert('Thông báo', 'Bạn có muốn xóa sản phẩm', [

        {
          text: 'Không',
          onPress: () => console.log('no')
        },
        {
          text: 'Xóa sản phẩm', onPress: () => {
            Totol()
            console.log(product_id)
            axios.post('http://10.0.3.2:8000/api/deletecart', {
              customerid: customer,
              productid: product_id,
            })
              .then((response) => {
                getCart()
                console.log('delete successfully')

              })
              .catch((error) => {
                console.log('lỗiii', error)
              })
          }
        },
      ]);
    }, 3000);



  }
  //khi project bắt đầu thì hàm useEffect đc chạy đầu tiên

  useEffect(() => {
    getCart();
  }, []);

  const [totol, setTotol] = useState('')
  const Totol = () => {

    axios.post('http://10.0.3.2:8000/api/totol', { customerid: customer })
      .then((response) => {
        setTotol(response.data)
      })
      .catch((error) => {
        console.log('lỗiii', error)
      })
  }
  function formatPrice(price = price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }
  return (
    <SafeAreaView style={{
      backgroundColor: "white",
      flex: 1,
    }}>
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
        <View>
          <Text
            style={styles.text_header}
          >
            Giỏ hàng
          </Text>
        </View>
      </View>
      <ScrollView>
        <FlatList
          scrollEnabled={false}
          data={cart}
          renderItem={({
            item,
            index,
          }) => {
            return (
              // <ItemCart
              //   id={item.id}
              //   name={item.name}
              //   price={item.price}
              //   image={item.image}
              //   quantity={item.quantity}
              // />
              <View style={styles.wrapper}>
                <TouchableOpacity
                  onPress={() => alert('Đã xóa sản phẩm')}
                >
                  <Ionicons
                    onPress={() => { Deletecart(item.product_id) }}
                    name="trash-outline" style={{ fontSize: 30, marginRight: 20, paddingRight: 20, color: 'red', borderRightWidth: 1 }} />
                </TouchableOpacity>

                <Image
                  style={styles.img}
                  source={{
                    uri: `http://10.0.3.2:8000/storage/images/${item.image}`,
                  }}
                />
                <View style={styles.description}>
                  <Text style={styles.title}>
                    {item.name ? (item.name.length > 25 ? item.name.slice(0, 25) + '...' : item.name) : ''}
                  </Text>
                  <Text style={styles.price}>
                    {formatPrice(item.sale_price != 0 ? item.sale_price : item.price)}đ x{item.quantity} = {formatPrice((item.sale_price != 0 ? item.sale_price : item.price) * item.quantity)}đ
                  </Text>
                </View>

              </View>
            );
          }}
        />
        <View style={{ marginTop: 10 }}>
          <Text style={{ textAlign: 'right', fontWeight: 'bold' }}>Tổng tiền:{formatPrice(totol)} </Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 5 }}>
          <Text style={{ padding: 10, backgroundColor: 'red', marginLeft: 10, borderRadius: 5, fontSize: 16 }}>Xóa hết</Text>
          <Text style={{ padding: 10, backgroundColor: '#66FFFF', marginLeft: 10, borderRadius: 5, fontSize: 16 }}>Mua hàng</Text>
          <Text onPress={() => getCart()} style={{ padding: 10, backgroundColor: '#FFFF33', marginLeft: 10, borderRadius: 5, fontSize: 16 }}>Tải lại sản phẩm</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  text_header: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  wrapper: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: "white",
    borderWidth: 1,
    padding: 16,
    alignItems: 'center'
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
    fontSize: 16,
  },
  price: {
    color: colors.primary,
    fontSize: 16,
  },
});
