import { useState } from "react";
import {
  Image,
  StyleSheet,
  Switch,
  Text,
  View,
} from "react-native";
import CheckBox from "react-native-check-box";
import { colors } from "../../constants/constants";
function ItemCart({
  title,
  price,
  url,
}) {
  const [isEnabled, setIsEnabled] =
    useState(false);
  return (
    <View style={styles.wrapper}>
      <CheckBox
        style={{
          padding: 10,
          borderRadius: 30,
        }}
        onClick={() =>
          setIsEnabled((pre) => !pre)
        }
        isChecked={isEnabled}
        // leftText={"CheckBox"}
      />
      <Image
        style={styles.img}
        source={{
          uri: url,
        }}
      />
      <View style={styles.description}>
        <Text style={styles.title}>
          {title}
        </Text>
        <Text style={styles.price}>
          {price}đ
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
    padding: 16,
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
});
