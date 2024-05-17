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
import axios from "axios";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "../../constants/constants";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useState } from "react";
import ItemCart from "../ItemCart/ItemCart.jsx";
import ModalPayment from "../Modal/ModalPayment.jsx";
const Cart = ({ route, navigation }) => {
  const { customer, name, email } = route.params;

  const [cart, setCart] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [totol, setTotol] = useState("");
  useEffect(() => {
    getCart();
  }, []);

  const getCart = () => {
    Totol();

    axios.post('http://10.0.3.2:8000/api/cart', { customerid: customer })
      .then((response) => {
        setCart(response.data);
        // console.log(cart);
      })
      .catch((error) => {
        console.log("lỗiii", error);
      });
  };

  const Deletecart = (product_id) => {
    console.log(product_id)

    setTimeout(() => {

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
    }, 1000);
  };


  const Totol = () => {

    axios.post('http://10.0.3.2:8000/api/totol', { customerid: customer })

      .then((response) => {
        setTotol(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("lỗiii", error);
      });
  };


  function formatPrice(price = price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  const handleShowModal = () => {
    navigation.navigate("Checkout");
  };




  const clearCart = () => {
    console.log(customer + 'user')
    axios
      .post("http://10.0.3.2:8000/api/clearcart", {
        customerid: customer,
      })
      .then((response) => {
        alert("deleted all items successfully");
        getCart()
      })
      .catch((error) => {
        alert("deleted all items failed");
      });
  };



  return (

    cart.length > 0 && (
      <SafeAreaView

        style={{
          flex: 1,
          backgroundColor: colors.secondary,
        }}
      >
        <View
          style={{
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <View
            style={{ backgroundColor: "white", flex: 1, alignItems: "center" }}
          >
            <Text style={[styles.text_header, { color: colors.primary }]}>
              Giỏ hàng
            </Text>
          </View>
        </View>
        <ScrollView>
          <FlatList
            style={{
              marginTop: 4,
              paddingHorizontal: 10,
            }}
            scrollEnabled={false}
            data={cart}
            renderItem={({ item, index }) => {
              return (
                <ItemCart
                  productid={item.product_id}
                  deleteCart={Deletecart}
                  name={item.name}
                  price={item.price}
                  saleprice={item.sale_price}
                  url={item.image}
                  branch={item.branch}
                  currentQuantity={item.quantity}
                />
              );
            }}
          />
          <View style={{ marginTop: 10, paddingHorizontal: 10 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
              Tổng tiền:{formatPrice(totol)}{" "}
            </Text>
          </View>
          <View
            style={{
              paddingHorizontal: 10,
              flexDirection: "row",
              justifyContent: "flex-end",
              paddingBottom: 20,

              marginTop: 5,
            }}
          >
            <TouchableOpacity onPress={clearCart} activeOpacity={0.7}>
              <Text
                style={{
                  padding: 10,
                  backgroundColor: "black",
                  color: "white",
                  marginLeft: 10,
                  fontWeight: 'bold',
                  borderRadius: 5,
                  fontSize: 16,
                }}
              >
                Xóa hết
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleShowModal} activeOpacity={0.7}>
              <Text
                style={{
                  padding: 10,
                  backgroundColor: colors.primary,
                  color: "white",
                  marginLeft: 10,
                  fontWeight: 'bold',
                  borderRadius: 5,
                  fontSize: 16,
                }}
              >
                Mua hàng
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>getCart()} activeOpacity={0.7}>
              <Text
                style={{
                  padding: 10,
                  backgroundColor: 'blue',
                  color: "white",
                  marginLeft: 10,
                  fontWeight: 'bold',
                  borderRadius: 5,
                  fontSize: 16,
                }}
              >
                Reload
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    )

  );
};

export default Cart;

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
    fontSize: 16,
  },
  price: {
    color: colors.primary,
    fontSize: 16,
  },
});
