import { useState } from "react";
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

function ItemCart({ title, price, url, sale, branch }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const handleSelect = () => {};
  const handleDelete = () => {
    alert("deleted");
  };
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
    <View>
      <View style={styles.branch}>
        <Text
          style={{ fontSize: 22, paddingVertical: 6, paddingHorizontal: 26 }}
        >
          {branch}
        </Text>
      </View>
      <TouchableHighlight
        onPress={handleSelect}
        underlayColor={colors.secondary}
        style={styles.touchable}
      >
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
              onPress={handleDelete}
            >
              <Text
                style={{
                  color: colors.primary,
                  fontSize: 16,
                  padding: 4,
                  marginRight: 8,
                }}
              >
                Xoá
              </Text>
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
              <Text style={{ color: colors.tertiary }}>{quantity}</Text>
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
              }}
              onPress={increaseQuantity}
            >
              <Text style={{ color: colors.tertiary }}>+</Text>
            </TouchableHighlight>
          </View>
        </View>
      </TouchableHighlight>
      <TouchableHighlight>
        <View
          style={{
            borderTopWidth: 1,
            borderColor: "#ccc",
            alignItems: "center",
            padding: 4,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: colors.primary,
            }}
          >
            Voucher giảm đến {sale}k
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
    borderTopWidth: 8,
    borderColor: colors.secondary,
  },
  touchable: {
    borderTopWidth: 1,
    borderColor: "#ccc",
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 24,
    // alignItems: "center",
  },
  img: {
    width: 40,
    padding: 10,
  },
  description: {
    marginLeft: 10,
  },
  title: {
    fontSize: 20,
  },
  price: {
    color: colors.primary,
    fontSize: 16,
  },
  counter: {
    flexDirection: "row",
    alignItems: "center",
  },
});
