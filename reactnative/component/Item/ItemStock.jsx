import { Button, SafeAreaView, StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ActivityIndicator, TextInput, ScrollView } from 'react-native'
import { formatPrice } from "../../hooks"
import { colors, font } from '../../constants/constants';
const ItemStock = ({ navigation, item, setLoading, customer }) => {

  var originalPrice = item.price;
  var salePrice = item.sale_price != 0 ? item.sale_price : item.price;
  var discountPercentage = ((originalPrice - salePrice) / originalPrice) * 100;
  var roundedPercentage = Math.round(discountPercentage);

  return (<TouchableOpacity onPress={() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('Detail',
        {
          customer: customer,
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
    <View style={{ paddingHorizontal: 8, alignItems: "center", marginRight: 6, borderWidth: 1, borderColor: "rgba(0,0,0,0.1)", borderRadius: 2, backgroundColor: "white", flex: 1 }}>
    {
      roundedPercentage !== 0 && (
        <View style={{ position: "absolute", backgroundColor: colors.primary, width: 40, height: 15, top: 17, left: -3, zIndex: 99, borderBottomRightRadius: 2, borderTopRightRadius: 2 }}>
          <Text style={{ fontFamily: "semiBold", fontSize: 9, color: "yellow", textAlign: "center" }}>-{roundedPercentage}%</Text>
          <View style={{ position: "absolute", top: "100%", zIndex: 99, borderWidth: 2, borderBottomColor: "transparent", borderLeftColor: "transparent", borderTopColor: colors.primary, borderRightColor: colors.primary }}></View>
        </View>
      )

    }
      <Text style={{ textAlign: 'center', fontSize: font.sizePrimary, fontFamily: "semiBold", marginBottom: 6 }}>{item.name ? (item.name.length > 15 ? item.name.slice(0, 15) + '...' : item.name) : ''}</Text>
      <Image
        source={{ uri: `http://10.0.3.2:8000/storage/images/${item.image}` }}
        style={{ width: "100%", height: 90, overflow: 'hidden', borderRadius: 10 }} />
      <Text style={{ color: colors.primary, marginTop: 4, fontFamily: "semiBold", fontSize: 12 }}>{formatPrice(item.sale_price ? item.sale_price : item.price)}đ</Text>

    </View>
  </TouchableOpacity>)
}
export default ItemStock