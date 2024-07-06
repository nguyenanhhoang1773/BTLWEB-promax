import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors, font } from '../../constants/constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import moment from 'moment-timezone';
import { format } from 'date-fns';


const Deliveryy = ({ route, navigation }) => {
    const { customer, name, email } = route.params;
    const [notifycation, setNotifycation] = useState([])
    console.log(customer + 'thông báo báo')
  
    const getOrder = () => {
      axios.post('http://10.0.3.2:8000/api/history', { id: customer })
        .then((response) => {
          setNotifycation(response.data)
          // console.log(response.data)
        })
        .catch((error) => {
          console.log('lỗiii', error)
        })
  
    }
  
  
    //khi project bắt đầu thì hàm useEffect đc chạy đầu tiên
  
  
    useEffect(() => {
      const unsubscribe = navigation.addListener('focus', () => {
        getOrder();
      });
      console.log(unsubscribe)
      // return unsubscribe;
    }, [navigation]);
  
  
    return (
      <SafeAreaView>
  
        <View
          style={{
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <View
            style={{ backgroundColor: "white", flex: 1, alignItems: "center" }}
          >
            <Text style={[styles.text_header, { color: colors.primary }]}>
              Chờ lấy hàng
            </Text>
          </View>
        </View>
  
        {notifycation.length == 0
          ? (<Text
            style={{
              padding: 10,
              // backgroundColor: 'blue',
              color: "black",
              marginLeft: 10,
              fontWeight: 'bold',
              borderRadius: 5,
              fontSize: 16,
              textAlign: 'center'
            }}
          >
           Không có đong hàng nào được giao dến bạn  !!!
          </Text>)
          : (<View style={{ marginHorizontal: 10 }}>
  
            {
              notifycation.map((item, index) => {
                return (
  
                  <View key={index}>
                    {
                      
                      item.state == 1
                        ?
                        (
                          <View style={{ borderWidth: 1, padding: 10, margin: 5, backgroundColor: '#99FF99' , borderRadius:10}}>
                            <Text style={{ fontSize: 17 }}><Text style={{ fontWeight: 'bold' }}>Đơn hàng</Text> : 2B-{item.id} "đã được xác nhận"</Text>
                            <Text style={{ fontSize: 14, fontWeight:'bold' }}>Đơn hàng sẽ sớm được giao đến bạn dự kiến 3 - 5 ngày</Text>
                            <Text style={{ fontSize: 14, fontWeight:'bold' }}>Kể từ ngày: {format(item.created_at, 'dd/MM/yyyy ', { timeZone: 'Asia/Ho_Chi_Minh' })}</Text>
                          </View>
                        )
                        :
                        ''
                    }
                  </View>
                )
              })
            }
          </View>)
        }
  
  <View   style={{justifyContent:'space-between', alignItems:'flex-end', marginHorizontal:10, marginTop:10}}>
    <Text onPress={()=> {navigation.goBack()}} style={{padding:10, borderWidth:1, borderRadius:10, fontSize:16,backgroundColor:'#FFF200', fontWeight:'bold' }}>
      Quay lại
    </Text>
  </View>
      </SafeAreaView>
    )
  }

export default Deliveryy

const styles = StyleSheet.create({
    text_header: {
      fontSize: 30,
      fontWeight: "bold",
    },
    wrapper: {
      flexDirection: "row",
      flex: 1,
      backgroundColor: "white",
      borderWidth: 1,
      padding: 16,
      alignItems: "center",
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