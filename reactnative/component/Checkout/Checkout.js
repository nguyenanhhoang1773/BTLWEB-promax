import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native'
import React, { useState } from 'react'
import CheckBox from 'expo-checkbox';
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors, font } from '../../constants/constants';
import { SafeAreaView } from 'react-native-safe-area-context'
import axios from 'axios';

const Checkout = ({ route, navigation }) => {

    const { customerid } = route.params;
    console.log(customerid + ' checkout')
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [note, setNote] = useState('');

    const [isSelectedCash, setSelectionCash] = useState(false);
    const [isSelectedOnline, setSelectionOnline] = useState(false);

    const handleCashChange = () => {
        setSelectionCash(true);
        setSelectionOnline(false);
    };

    const handleOnlineChange = () => {
        setSelectionCash(false);
        setSelectionOnline(true);
    };




    const Confirm = () => {

        if (phone.length === 0 || address.length === 0) {
            Alert.alert('Thông báo', 'Số điên thoại \nĐịa chỉ giao hàng không được bỏ trống', [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);
        } else if (!isSelectedCash && !isSelectedOnline) {
            Alert.alert('Thông báo', 'Vui lòng chộn phương thức thanh toán', [

                {
                    text: 'OK',
                    // onPress: () => navigation.goBack()
                },
               
            ]);
       
        } else {
            if (isSelectedOnline == true) {
                Alert.alert('Thông báo', 'Hệ thống thanh toán online hiện tại đang bị giãn đoạn.\nQuý khách vui lòng lựa chọn phương thức thanh tóan khác', [

                    {
                        text: 'OK',
                        // onPress: () => navigation.goBack()
                    },
                   
                ]);
              
            } else {

                const phoneRegex = new RegExp('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$');
                if (phoneRegex.test(phone)) {
                    // Số điện thoại hợp lệ
                    console.log('Số điện thoại:', phone);


                    axios.post('http://10.0.3.2:8000/api/checkout',
                        {
                            id: customerid,
                            phone: phone,
                            address: address,
                            note: note ? note : 'Không có ghi chú'

                        })
                        .then((response) => {
                            Alert.alert('Thông báo', 'Đặt hàng thành công\nBạn vui lòng để ý điện thoại bên mình sẽ sớm liên hệ nhé', [

                                {
                                    text: 'Ok',
                                    onPress: () => navigation.goBack()
                                }
                            
                            ]);
                           
                        })
                        .catch((error) => {
                            console.log('lỗiii', error)
                        })


                } else {
                    Alert.alert('Thông báo', 'Số điện thoại không đúng định dạng của VN', [

                        {
                            text: 'OK',
                            // onPress: () => navigation.goBack()
                        },
                       
                    ]);
                  
                }



            }
        }

    }
    return (
        <SafeAreaView style={{ backgroundColor: '#fff', height: '100%' }}>
            <ScrollView>
                <View style={{ padding: 20, alignItems: 'center' }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold',color: colors.primary }}> Thông tin cá nhân</Text>
                    <View style={styles.container}>
                        <Ionicons
                            name="call-outline"
                            style={styles.icon} />
                        <TextInput
                            onChangeText={(text) => { setPhone(text) }}
                            placeholder='Nhập số  điện thoại'
                            style={styles.input} />
                    </View>
                    <View style={styles.container}>
                        <Ionicons
                            name="locate-outline"
                            style={styles.icon} />
                        <TextInput
                            onChangeText={(text) => { setAddress(text) }}
                            placeholder='Nhập địa chỉ giao hàng'
                            style={styles.input} />
                    </View>
                    <View style={styles.container}>
                        <Ionicons
                            name="book-outline" F
                            style={styles.icon} />
                        <TextInput
                            onChangeText={(text) => { setNote(text) }}
                            placeholder='Ghi chú'
                            style={styles.input} />
                    </View>
                    <Text style={{ alignSelf: 'flex-start', marginVertical: 10, fontWeight: 'bold' }}>Chọn phương thức thanh toán:</Text>
                    <View style={{ alignSelf: 'flex-start' }}>
                        <View style={{ flexDirection: 'row', padding: 5, alignItems: 'center' }}>
                            <CheckBox
                                value={isSelectedCash}
                                onValueChange={handleCashChange}
                            />
                            <Text style={{ marginLeft: 10 }}>Thanh toán khi nhận hàng:</Text>
                            <Ionicons name="cash-outline" style={{ fontSize: 16 }} />
                        </View>
                        <View style={{ flexDirection: 'row', padding: 5, alignItems: 'center' }}>
                            <CheckBox
                                value={isSelectedOnline}
                                onValueChange={handleOnlineChange}
                            />
                            <Text style={{ marginLeft: 10 }}>Thanh toán online:</Text>
                            <Ionicons name="logo-apple-appstore" style={{ fontSize: 16 }} />
                        </View>
                    </View>
                    <View style={{ marginTop: 10, flexDirection: 'row', alignSelf: 'flex-end' }}>
                        <TouchableOpacity onPress={()=>navigation.goBack()}>
                            <Text style={{ fontWeight: 'bold', fontSize: 16, backgroundColor: '#rgb(205,234,251)', padding: 8, marginRight: 10, borderRadius: 5 }}>Quay lại</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Confirm()}>
                            <Text style={{ fontWeight: 'bold', fontSize: 16, backgroundColor: colors.primary, padding: 8, borderRadius: 5, color: '#fff' }}>Xác nhận</Text>
                        </TouchableOpacity>
                    </View>


                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Checkout

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 20
    },
    icon: {
        fontSize: 30,
        position: 'absolute',
        left: 0
    },
    input: {
        padding: 5,
        borderBottomWidth: 1,
        width: '100%',
        paddingLeft: 35,
        color: '#000'
    }
})