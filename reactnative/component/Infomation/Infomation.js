import { Button, SafeAreaView, StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ActivityIndicator, TextInput, ScrollView } from 'react-native'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import Swiper from 'react-native-swiper';

const Infomation = ({ navigation, route }) => {
  const { customer, name, email } = route.params;
  console.log(name)
  return (
    <SafeAreaView>

      <View
        style={{ backgroundColor: '#F8482F', flexDirection: 'row', paddingVertical: 10, paddingHorizontal: 30, paddingTop: 30 }}>
        <View style={{ marginRight: 20 }}>
          <Image
            style={{ width: 70, height: 70, borderRadius: 50 }}
            source={{ uri: 'https://tse4.mm.bing.net/th?id=OIP.NViuNGuOAzDfh9XA23EZQAHaKo&pid=Api&P=0&h=180' }} />
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

          <Text>Lịch sử đơn hàng <Ionicons name="chevron-forward-outline" style={{ fontSize: 15 }} /></Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 30 }}>
          <TouchableOpacity>
            <View style={{ alignItems: 'center', paddingVertical: 20 }}>
              <Ionicons name="cube-outline" style={{ fontSize: 20 }} />
              <Text style={{ fontSize: 11 }}>Chờ xác nhận</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
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
                source={{ uri: 'https://tse4.mm.bing.net/th?id=OIP.NViuNGuOAzDfh9XA23EZQAHaKo&pid=Api&P=0&h=180' }} />
              <Text style={{ fontSize: 11 }}>Freeship </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ alignItems: 'center' }}>
              <Image
                style={{ width: 50, height: 50, borderRadius: 50 }}
                source={{ uri: 'https://tse4.mm.bing.net/th?id=OIP.NViuNGuOAzDfh9XA23EZQAHaKo&pid=Api&P=0&h=180' }} />
              <Text style={{ fontSize: 11 }}>Shopee</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ alignItems: 'center' }}>
              <Image
                style={{ width: 50, height: 50, borderRadius: 50 }}
                source={{ uri: 'https://tse4.mm.bing.net/th?id=OIP.NViuNGuOAzDfh9XA23EZQAHaKo&pid=Api&P=0&h=180' }} />
              <Text style={{ fontSize: 11 }}>Hàng hiệu</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ alignItems: 'center' }}>
              <Image
                style={{ width: 50, height: 50, borderRadius: 50 }}
                source={{ uri: 'https://tse4.mm.bing.net/th?id=OIP.NViuNGuOAzDfh9XA23EZQAHaKo&pid=Api&P=0&h=180' }} />
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
        <Swiper autoplay={true} style={{ height: 200, marginTop: 5 }}>
          <View style={styles.slide}>
            <Image source={{ uri: `https://antimatter.vn/wp-content/uploads/2022/11/hinh-anh-gai-xinh-viet-nam.jpg` }} style={{ width: '90%', height: '100%', alignSelf: 'center' }} />
          </View>
          <View style={styles.slide}>
            <Image source={{ uri: `https://phunugioi.com/wp-content/uploads/2020/04/hinh-anh-gai-xinh-rang-khenh.jpg` }} style={{ width: '90%', height: '100%', alignSelf: 'center' }} />
          </View>
          <View style={styles.slide}>
            <Image source={{ uri: `https://allimages.sgp1.digitaloceanspaces.com/photographereduvn/2022/07/1656872943_849_Top-500-hinh-anh-nguoi-mau-Bikini-dep-sexy-nong.jpg` }} style={{ width: '90%', height: '100%', alignSelf: 'center' }} />
          </View>
        </Swiper>

      </ScrollView >
    </SafeAreaView>


  )
}

export default Infomation

const styles = StyleSheet.create({})