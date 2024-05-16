import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import axios from "axios";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "../../constants/constants";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useState } from "react";
import ItemCart from "../ItemCart/ItemCart.jsx";
import ModalPayment from "../Modal/ModalPayment.jsx";
const Cart = ({ route, navigation }) => {
  const [cart, setCart] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [totol, setTotol] = useState("");
  useEffect(() => {
    getCart();
  }, []);

  const getCart = () => {
    Totol();
    axios
      .get("http://10.0.3.2:8000/api/cart")
      .then((response) => {
        setCart(response.data);
        console.log("okk");
      })
      .catch((error) => {
        console.log("lỗiii", error);
      });
  };
  const Deletecart = (product_id) => {
    axios
      .post("http://10.0.3.2:8000/api/deletecart", {
        customerid: 60,
        productid: product_id,
      })
      .then((response) => {
        getCart();
        Totol();
        console.log("delete successfully");
      })
      .catch((error) => {
        console.log("lỗiii", error);
      });
  };

  const Totol = () => {
    axios
      .get("http://10.0.3.2:8000/api/totol")
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
    axios
      .post("http://10.0.3.2:8000/api/clearcart", {
        customerid: 60,
      })
      .then((response) => {
        alert("deleted all items successfully");
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
                  deleteCart={Deletecart}
                  title={item.title}
                  price={item.price}
                  url={item.url}
                  branch={item.branch}
                  sale={item.sale}
                  currentQuantity={item.quantity}
                />
                // <View style={styles.wrapper}>
                //   <TouchableOpacity onPress={() => alert("Đã xóa sản phẩm")}>
                //     <Ionicons
                //       onPress={() => {
                //         Deletecart(item.product_id);
                //       }}
                //       name="trash-outline"
                //       style={{
                //         fontSize: 30,
                //         marginRight: 20,
                //         paddingRight: 20,
                //         color: "red",
                //         borderRightWidth: 1,
                //       }}
                //     />
                //   </TouchableOpacity>

                //   <Image
                //     style={styles.img}
                //     source={{
                //       uri: `http://10.0.3.2:8000/storage/images/${item.image}`,
                //     }}
                //   />
                //   <View style={styles.description}>
                //     <Text style={styles.title}>
                //       {item.name
                //         ? item.name.length > 25
                //           ? item.name.slice(0, 25) + "..."
                //           : item.name
                //         : ""}
                //     </Text>
                //     <Text style={styles.price}>
                //       {formatPrice(
                //         item.sale_price != 0 ? item.sale_price : item.price
                //       )}
                //       đ x{item.quantity} ={" "}
                //       {formatPrice(
                //         (item.sale_price != 0 ? item.sale_price : item.price) *
                //           item.quantity
                //       )}
                //       đ
                //     </Text>
                //   </View>
                // </View>
              );
            }}
          />
          <View style={{ marginTop: 10, paddingHorizontal: 10 }}>
            <Text style={{ fontWeight: 500, fontSize: 20 }}>
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
                  fontWeight: 600,
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
                  fontWeight: 600,
                  borderRadius: 5,
                  fontSize: 16,
                }}
              >
                Mua hàng
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
