import { StyleSheet, Text, View, FlatList,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import ItemHistory from '../../component/History/ItemHistory'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors, font } from '../../constants/constants';

import axios from 'axios'

const History = ({ navigation, route }) => {
    const { customer } = route.params;

    console.log(customer + ' hítory')

    const [history, setHistory] = useState([])
console.log(history)
    const Detail = (detail, money) => {

        console.log('-------------------------------')
        console.log(money)
        navigation.navigate('CartHistory', {product:detail, money: money})

    }
    useEffect(() => {
        axios.post('http://10.0.3.2:8000/api/history', { id: customer })
            .then((response) => {
                console.log('ok')
                setHistory(response.data)
            })
            .catch((error) => console.log('Lỗi', error))
    }, [])
    const numberOfRecords = history.length;

    return (
        <SafeAreaView style={{ paddingBottom: 110 }}>
            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 25, fontWeight: 'bold',color: colors.primary }}>Lịch sử đơn hàng</Text>
            </View>
            <View style={{ paddingHorizontal: 10, marginTop: 20 }}>
                <Text style={{ fontWeight: 'bold',color: colors.primary }}>Tổng cộng: {numberOfRecords} đơn hàng đã đặt </Text>

                <FlatList
                    scrollEnabled={false}
                    data={history}
                    renderItem={({ item, index }) =>
                        <ItemHistory
                            numberOfRecords={numberOfRecords}
                            detail={item.order_details}
                            state={item.state}
                            created={item.created_at}
                            id={item.id}
                            money={item.total_amount}
                            detailCart={Detail}
                        />
                    }
                />
            </View>
            <View
                    style={{
                        paddingHorizontal: 10,
                        flexDirection: "row",
                        justifyContent: "flex-end",
                        marginTop: 10,
                    }}
                >
                    <TouchableOpacity 
                    onPress={()=> navigation.goBack()}
                    activeOpacity={0.7}>
                        <Text
                            style={{
                                padding: 10,
                                backgroundColor: 'black',
                                color: "white",
                                marginLeft: 10,
                                fontWeight: 'bold',
                                borderRadius: 5,
                                fontSize: 16,
                            }}
                        >
                            Quay lại
                        </Text>
                    </TouchableOpacity>


                </View>
        </SafeAreaView>
    )
}

export default History

const styles = StyleSheet.create({})