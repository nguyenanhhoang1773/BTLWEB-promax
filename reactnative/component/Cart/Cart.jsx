import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import ItemCart from "../ItemCart/ItemCart";
const data = [
  {
    title: "Áo khoác",
    branch: "luxury",

    price: 310,

    url: "https://dosi-in.com/file/detailed/472/dosiin-highclub-ao-hoodie-basic-mu-trum-do-ni-cotton-highclub-brand-chinh-hang-472344472344.jpg?w=670&h=670&fit=fill&fm=webp",
  },
  {
    title: "Quần đùi",
    branch: "luxury",
    price: 190,
    url: "https://dosi-in.com/file/detailed/472/dosiin-highclub-ao-hoodie-basic-mu-trum-do-ni-cotton-highclub-brand-chinh-hang-472344472344.jpg?w=670&h=670&fit=fill&fm=webp",
  },
  {
    title: "jean",
    branch: "luxury",
    price: 310,
    url: "https://dosi-in.com/file/detailed/472/dosiin-highclub-ao-hoodie-basic-mu-trum-do-ni-cotton-highclub-brand-chinh-hang-472344472344.jpg?w=670&h=670&fit=fill&fm=webp",
  },
  {
    title: "Bomber",
    branch: "luxury",
    price: 420,
    url: "https://dosi-in.com/file/detailed/472/dosiin-highclub-ao-hoodie-basic-mu-trum-do-ni-cotton-highclub-brand-chinh-hang-472344472344.jpg?w=670&h=670&fit=fill&fm=webp",
  },
  {
    title: "Túi xách",
    branch: "luxury",
    price: 800,
    url: "https://dosi-in.com/file/detailed/472/dosiin-highclub-ao-hoodie-basic-mu-trum-do-ni-cotton-highclub-brand-chinh-hang-472344472344.jpg?w=670&h=670&fit=fill&fm=webp",
  },
  {
    title: "Khẩu trang",
    branch: "luxury",
    price: 5,
    url: "https://dosi-in.com/file/detailed/472/dosiin-highclub-ao-hoodie-basic-mu-trum-do-ni-cotton-highclub-brand-chinh-hang-472344472344.jpg?w=670&h=670&fit=fill&fm=webp",
  },
  {
    title: "Hoodie",
    branch: "luxury",
    price: 440,
    url: "https://dosi-in.com/file/detailed/472/dosiin-highclub-ao-hoodie-basic-mu-trum-do-ni-cotton-highclub-brand-chinh-hang-472344472344.jpg?w=670&h=670&fit=fill&fm=webp",
  },
];
const renderItem = ({ item, index }) => {
  return (
    <ItemCart
      title={item.title}
      price={item.price}
      url={item.url}
      branch={item.branch}
    />
  );
};
const Cart = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "white",
        flex: 1,
      }}
    >
      <View
        style={{
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <View>
          <Text style={styles.text_header}>Giỏ hàng</Text>
        </View>
      </View>
      <FlatList data={data} renderItem={renderItem} />
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  text_header: {
    fontSize: 30,
    fontWeight: 600,
  },
});
