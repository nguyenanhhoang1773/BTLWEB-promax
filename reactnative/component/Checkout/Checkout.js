import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import CheckBox from 'expo-checkbox';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context'

const Checkout = () => {
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
        if (isSelectedOnline == true) {
            console.log(phone)
            console.log(address)
            console.log(note)

            console.log('online------------------------------------------------')
            console.log(isSelectedOnline)
            alert('thanh toán online')
        } else {
            alert(' cảm ơn quý khách đã đặt hàng')
            console.log('cash-------------------------------------------------')
            console.log(isSelectedCash)
            console.log(phone)
            console.log(address)
            console.log(note)
        }
    }
    return (
        <SafeAreaView style={{ backgroundColor: '#FFFFE0', height: '100%' }}>
            <ScrollView>
                <View style={{ padding: 20, alignItems: 'center' }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}> Thông tin cá nhân</Text>
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
                            name="book-outline"
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
                        <TouchableOpacity>
                            <Text style={{ fontWeight: 'bold', fontSize: 16, backgroundColor: '#rgb(205,234,251)', padding: 8, marginRight: 10, borderRadius: 5 }}>Quay lại</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Confirm()}>
                            <Text style={{ fontWeight: 'bold', fontSize: 16, backgroundColor: '#38A7FF', padding: 8, borderRadius: 5 }}>Xác nhận</Text>
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