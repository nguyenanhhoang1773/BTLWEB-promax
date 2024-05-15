import { useState } from "react";
import {
  Image,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from "../../constants/constants";
function ItemCart({
  id,
  name,
  price,
  image,
  quantity
}) {
  
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        onPress={() => alert('Đã xóa sản phẩm')}
      >
        <Ionicons
          onPress={() => console.log(id)}
          name="trash-outline" style={{ fontSize: 30, marginRight: 20, paddingRight: 20, color: 'red', borderRightWidth: 1 }} />
      </TouchableOpacity>

      <Image
        style={styles.img}
        source={{
          uri: `http://10.0.3.2:8000/storage/images/${image}`,
        }}
      />
      <View style={styles.description}>
        <Text style={styles.title}>
          {name ? (name.length > 25 ? name.slice(0, 25) + '...' : name) : ''}
        </Text>
        <Text style={styles.price}>
          {formatPrice(price)}đ x{quantity} = {formatPrice(price * quantity)}đ
        </Text>
      </View>
    </View>
  );
}

export default ItemCart;
const styles = StyleSheet.create({
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
