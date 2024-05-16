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
  id,
  title,
  price,
  url,
  branch = "Luxury and more",
  currentQuantity,
  deleteCart,
}) {
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    setQuantity(currentQuantity);
  }, []);
  const handleSelect = () => {};
  const increaseQuantity = () => {
    setQuantity((pre) => ++pre);
  };
  const decreaseQuantity = () => {
    if (quantity <= 0) {
      return;
    }
    setQuantity((pre) => --pre);
  };

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
                fontWeight: 700,
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
                  marginRight: 4,
                }}
                onPress={() => {
                  deleteCart(id);
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
                  uri: url,
                }}
              />
              <View style={styles.description}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.price}>{price}đ</Text>
              </View>
            </View>
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
                    color: colors.primary,

                    fontWeight: 600,
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
            voucher giảm đến 20%
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
    width: 40,
    padding: 10,
  },
  description: {
    marginLeft: 10,
  },
  title: {
    fontSize: 22,
  },
  price: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: 600,
  },
  counter: {
    flexDirection: "row",
    alignItems: "center",
  },
});
