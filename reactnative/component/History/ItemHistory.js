import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { format } from 'date-fns';
import moment from 'moment-timezone';
const ItemHistory = ({ created, id, detail, money, detailCart }) => {
    console.log(format(created, 'dd/MM/yyyy HH:mm', { timeZone: 'Asia/Ho_Chi_Minh' }))
    function formatPrice(price = price) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }


    return (
        <View style={{ padding: 10, borderWidth: 1, marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontWeight: 'bold' }}>Ngày đặt hàng:</Text>
                    <Text> {format(created, 'dd/MM/yyyy HH:mm', { timeZone: 'Asia/Ho_Chi_Minh' })}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontWeight: 'bold' }}>Mã đơn hàng:</Text>
                    <Text> 2B-{id} </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontWeight: 'bold' }}>Tổng tiền:</Text>
                    <Text> {formatPrice(money)} đ </Text>
                </View>
            </View>
            <TouchableOpacity
                onPress={() => { detailCart(detail, money) }}
                style={{ borderWidth: 1, justifyContent: 'center', paddingHorizontal: 10 }} >
                <Text style={{ fontWeight: 'bold' }}>Xem chi tiết </Text>
            </TouchableOpacity>
        </View>
    )
}

export default ItemHistory

const styles = StyleSheet.create({})