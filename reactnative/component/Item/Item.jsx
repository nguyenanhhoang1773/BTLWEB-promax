import { Button, SafeAreaView, StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ActivityIndicator, TextInput, ScrollView } from 'react-native'
import { formatPrice } from "../../hooks"
import { colors, font } from '../../constants/constants';
const Item = ({ navigation, item, setLoading, customer }) => {

  var originalPrice = item.price;
  var salePrice = item.sale_price != 0 ? item.sale_price : item.price;
  var discountPercentage = ((originalPrice - salePrice) / originalPrice) * 100;
  var roundedPercentage = Math.round(discountPercentage);
  return (
    <View style={{ backgroundColor: "white", marginRight: 10, marginTop: 10, flex: 1, padding: 4, borderWidth: 1, borderColor: "rgba(0,0,0,0.1)" }}>
      {
        roundedPercentage !== 0 && (
          <View style={{ position: "absolute", backgroundColor: colors.primary, width: 35, height: 15, top: 10, left: -3, zIndex: 99, borderBottomRightRadius: 2, borderTopRightRadius: 2 }}>
            <Text style={{ fontFamily: "semiBold", fontSize: 9, color: "yellow", textAlign: "center" }}>-{roundedPercentage}%</Text>
            <View style={{ position: "absolute", top: "100%", zIndex: 99, borderWidth: 2, borderBottomColor: "transparent", borderLeftColor: "transparent", borderTopColor: colors.primary, borderRightColor: colors.primary }}></View>
          </View>
        )

      }
      <TouchableOpacity key={item.id} onPress={() => {
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

        <Image source={{ uri: `http://10.0.3.2:8000/storage/images/${item.image}` }} style={{ width: "100%", height: 150, }} />
        <View style={{ paddingLeft: 5 }}>
          <Text style={{ fontFamily: "semiBold" }}>{item.name ? (item.name.length > 18 ? item.name.slice(0, 18) + '...' : item.name) : ''}</Text>
          {
            item.sale_price == 0
              ?
              (<Text style={{ fontSize: 12, fontFamily: "medium", color: colors.primary }}>{formatPrice(item.sale_price > 0 ? item.sale_price : item.price)}đ</Text>)
              :
              (
                <View>
                  <Text style={{ fontSize: 10, textDecorationLine: 'line-through', fontFamily: "thin" }}>{formatPrice(item.price)} đ</Text>
                  <Text style={{ fontSize: 12, fontFamily: "medium", color: colors.primary }}>{formatPrice(item.sale_price > 0 ? item.sale_price : item.price)} đ</Text>
                </View>
              )
          }
        </View>
      </TouchableOpacity>
    </View>)
}
export default Item
