import { Button, SafeAreaView, StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ActivityIndicator, TextInput, ScrollView } from 'react-native'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import Swiper from 'react-native-swiper';

const Infomation = ({ navigation, route }) => {
  const { customer, name, email } = route.params;
  console.log(customer)

  const HistoryCart = () => {
    navigation.navigate('History', { customer: customer })
  }
  const Deliveryy = () => {
    navigation.navigate('Deliveryy', { customer: customer })
  }
  return (
    <SafeAreaView>
      <View
        style={{ backgroundColor: '#F8482F', flexDirection: 'row', paddingVertical: 10, paddingHorizontal: 30, paddingTop: 30 }}>
        <View style={{ marginRight: 20 }}>
          <Image
            style={{ width: 70, height: 70, borderRadius: 50 }}
            source={{ uri: 'https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-1/434961525_261489030357871_6982944266457111160_n.jpg?stp=dst-jpg_s200x200&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEW3D1h3hMemolI6WN2MHcZhbL7ZojWAK2FsvtmiNYArd459Npnr6YvfqHKdLt0bybp_3lpIjhF6VfO1QFaCkbz&_nc_ohc=bBCH7l4sUNoQ7kNvgGiYu4U&_nc_ht=scontent.fdad3-4.fna&cb_e2o_trans=t&oh=00_AYAu6BOFIkkDYX9DR3QEQx_UWZH6nWx9ZNmG1x1SolWXYw&oe=6653CDEC' }} />
        </View>
        <View>
          <Text style={{ fontSize: 25 }}>{name}</Text>
          <Text>Email: {email}</Text>
          <Text >Thành viên: {customer}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')} ><Text>ĐĂNG XUẤT</Text></TouchableOpacity>
        </View>
      </View>
      <ScrollView style={{ backgroundColor: '#F5F5F5', marginBottom: 120 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10, alignItems: 'center', marginHorizontal: 10 }}>
          <Text style={{ fontWeight: 'bold' }}>Đơn hàng</Text>

          <Text onPress={() => HistoryCart()} >Lịch sử đơn hàng <Ionicons name="chevron-forward-outline" style={{ fontSize: 15 }} /></Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 30 }}>
          <TouchableOpacity onPress={() => HistoryCart()}>
            <View style={{ alignItems: 'center', paddingVertical: 20 }}>
              <Ionicons name="cube-outline" style={{ fontSize: 20 }} />
              <Text style={{ fontSize: 11 }}>Chờ xác nhận</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{Deliveryy()}}>
            <View style={{ alignItems: 'center', paddingVertical: 20 }}>
              <Ionicons name="gift-outline" style={{ fontSize: 20 }} />
              <Text style={{ fontSize: 11 }}>Chờ lấy hàng</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{ alignItems: 'center', paddingVertical: 20 }}>
              <Ionicons name="car-sport-outline" style={{ fontSize: 20 }} />
              <Text style={{ fontSize: 11 }}>Chờ giao hàng</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{ alignItems: 'center', paddingVertical: 20 }}>
              <Ionicons name="star-half-outline" style={{ fontSize: 20 }} />
              <Text style={{ fontSize: 11 }}>Đánh giá</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ height: 5, backgroundColor: '#c1cdcd' }}></View>

        {/* ưu đãi */}
        <View style={{ marginHorizontal: 10, paddingBottom: 10 }}>
          <Text style={{ fontWeight: 'bold', marginVertical: 15 }}>Ưu đãi dành riêng cho bạn</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 30 }}>
            <TouchableOpacity style={{ alignItems: 'center' }}>
              <Image
                style={{ width: 50, height: 50, borderRadius: 50 }}
                source={{ uri: 'https://blog.abit.vn/wp-content/uploads/2020/11/free-shippig-la-gi-3-compressed.jpg' }} />
              <Text style={{ fontSize: 11 }}>Freeship </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ alignItems: 'center' }}>
              <Image
                style={{ width: 50, height: 50, borderRadius: 50 }}
                source={{ uri: 'https://png.pngtree.com/thumb_back/fw800/background/20210902/pngtree-smart-technology-light-hd-background-image_784060.jpg' }} />
              <Text style={{ fontSize: 11 }}>2B-Technology</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ alignItems: 'center' }}>
              <Image
                style={{ width: 50, height: 50, borderRadius: 50 }}
                source={{ uri: 'https://toigingiuvedep.vn/wp-content/uploads/2021/08/hinh-anh-dong-ho-dep-cho-nam.jpg' }} />
              <Text style={{ fontSize: 11 }}>Hàng hiệu</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ alignItems: 'center' }}>
              <Image
                style={{ width: 50, height: 50, borderRadius: 50 }}
                source={{ uri: 'https://tse2.mm.bing.net/th?id=OIP.izYA2jDQYDdNFWFZxOnHwAHaF7&pid=Api&P=0&h=180' }} />
              <Text style={{ fontSize: 11 }}>Voucher</Text>
            </TouchableOpacity>
          </View>
        </View>




        <View style={{ height: 5, backgroundColor: '#c1cdcd' }}></View>


        <View style={{ paddingVertical: 10, marginHorizontal: 10 }}>
          <Text style={{ fontWeight: 'bold' }}>Tiện ích của tôi</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 30 }}>
          <TouchableOpacity>
            <View style={{ alignItems: 'center', paddingVertical: 20 }}>
              <Ionicons name="logo-medium" style={{ fontSize: 20 }} />
              <Text style={{ fontSize: 11 }}>Ví điện tử</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{ alignItems: 'center', paddingVertical: 20 }}>
              <Ionicons name="person-outline" style={{ fontSize: 20 }} />
              <Text style={{ fontSize: 11 }}>Thành viên</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{ alignItems: 'center', paddingVertical: 20 }}>
              <Ionicons name="file-tray-full-outline" style={{ fontSize: 20 }} />
              <Text style={{ fontSize: 11 }}>Xu khuyễn mãi</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{ alignItems: 'center', paddingVertical: 20 }}>
              <Ionicons name="folder-open-outline" style={{ fontSize: 20 }} />
              <Text style={{ fontSize: 11 }}>Kho voucher</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ height: 5, backgroundColor: '#c1cdcd' }}></View>

        <View style={{ paddingVertical: 10, marginHorizontal: 10 }}>
          <View >
            <Text style={{ fontWeight: 'bold' }}>Hỗ trợ</Text>
          </View>
          <View style={{ borderBottomWidth: 1, paddingBottom: 5, borderColor: '#c1cdcd' }}>
            <TouchableOpacity >
              <View style={{ paddingTop: 20, flexDirection: 'row', alignItems: 'center', marginLeft: 5 }}>
                <Ionicons name="help-circle-outline" style={{ fontSize: 22, marginRight: 5 }} />
                <Text style={{ fontSize: 12 }}>Trung tâm trợ giúp</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View >
            <TouchableOpacity >
              <View style={{ paddingTop: 20, flexDirection: 'row', alignItems: 'center', marginLeft: 5 }}>
                <Ionicons name="chatbubbles-outline" style={{ fontSize: 22, marginRight: 5 }} />
                <Text style={{ fontSize: 12 }}>Trò chuyện với admin</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {/* slide */}
      
      </ScrollView >
    </SafeAreaView>


  )
}

export default Infomation

const styles = StyleSheet.create({})