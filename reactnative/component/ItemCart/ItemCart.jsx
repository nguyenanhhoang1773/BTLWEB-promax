import { useEffect, useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Switch,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import CheckBox from "react-native-check-box";
import { colors } from "../../constants/constants";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import axios from "axios";

function ItemCart({

  name,
  price,
  url,
  branch = "Luxury and more",
  currentQuantity,
  deleteCart,
  saleprice,
  productid
}) {
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    // console.log(url)
    setQuantity(currentQuantity);
  }, []);
  const handleSelect = () => { };
  const increaseQuantity = () => {
    setQuantity((pre) => ++pre);
  };
  const decreaseQuantity = () => {
    if (quantity <= 0) {
      return;
    }
    setQuantity((pre) => --pre);
  };
  function formatPrice(price = price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }



  const HandleVoucher = (price, saleprice) => {
    const voucher = (1 - ((saleprice > 0 ? saleprice : price) / price)) * 100
    return Math.round(voucher);
  }
  return (
    <View style={{ backgroundColor: "white", marginTop: 4, borderRadius: 6 }}>
      <TouchableHighlight
        onPress={handleSelect}
        underlayColor={colors.secondary}
        style={styles.touchable}
      >
        <View>
          <View style={styles.branch}>
            <Entypo
              style={{ fontSize: 16 }}
              name="shop"
              size={24}
              color={colors.primary}
            />
            <Text
              style={{
                fontSize: 16,
                marginLeft: 4,
                color: colors.primary,
                fontWeight: 'bold',
              }}
            >
              {branch}
            </Text>
          </View>
          <View style={styles.wrapper}>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Pressable
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 20,
                }}
                onPress={() => {
                  deleteCart(productid);
                }}
              >
                <FontAwesome6
                  style={{ marginRight: 10 }}
                  name="trash-can"
                  size={20}
                  color={colors.tertiary}
                />
              </Pressable>
              <Image
                style={styles.img}
                source={{
                  uri: `http://10.0.3.2:8000/storage/images/${url}`,
                }}
              />
              <View style={styles.description}>
                <Text style={styles.title}>{(name.length > 25 ? name.slice(0, 25) + '...' : name)}</Text>
                <Text style={styles.price}>{formatPrice(saleprice > 0 ? saleprice : price)}đ</Text>
                <View style={styles.counter}>
                  <TouchableHighlight
                    underlayColor={colors.secondary}
                    style={{
                      borderWidth: 1,
                      borderColor: colors.tertiary,
                      width: 24,
                      height: 24,
                      alignItems: "center",
                      justifyContent: "center",
                      borderTopLeftRadius: 8,
                      borderBottomLeftRadius: 8,
                      borderRightWidth: 0,
                    }}
                    onPress={decreaseQuantity}
                  >
                    <Text style={{ color: colors.tertiary }}>-</Text>
                  </TouchableHighlight>
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: colors.tertiary,
                      width: 24,
                      height: 24,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        color: 'green',

                        fontWeight: 'bold',
                      }}
                    >
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
                      borderTopRightRadius: 8,
                      borderBottomRightRadius: 8,
                      borderLeftWidth: 0,
                    }}
                    onPress={increaseQuantity}
                  >
                    <Text style={{ color: colors.tertiary }}>+</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </View>

          </View>
        </View>
      </TouchableHighlight>
      <TouchableHighlight>
        <View
          style={{
            flexDirection: "row",
            borderTopWidth: 1,
            borderColor: "#ccc",
            alignItems: "center",
            paddingHorizontal: 26,
            padding: 4,
          }}
        >
          <Foundation name="burst-sale" size={22} color={colors.primary} />
          <Text
            style={{
              fontSize: 16,
              color: colors.primary,
              marginLeft: 6,
            }}
          >
            {HandleVoucher(price, saleprice) > 0 ? `voucher giảm đến ${HandleVoucher(price, saleprice)} % ` : ''}
          </Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

export default ItemCart;
const styles = StyleSheet.create({
  color: {
    color: "#aaa",
  },
  branch: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 26,
  },
  touchable: {},
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    paddingVertical: 4,
    paddingHorizontal: 26,
  },
  img: {
    width: 60,
    padding: 10,
  },
  description: {
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
  },
  price: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  counter: {
    flexDirection: "row",
    alignItems: "center",
  },
});
