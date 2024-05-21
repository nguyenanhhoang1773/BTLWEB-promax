import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import ItemHistory from '../../component/History/ItemHistory'
import { SafeAreaView } from 'react-native-safe-area-context'
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
                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>History</Text>
            </View>
            <View style={{ paddingHorizontal: 10, marginTop: 20 }}>
                <Text style={{ fontWeight: 'bold' }}>Tổng cộng: {numberOfRecords} đơn hàng đã đặt </Text>

                <FlatList
                    scrollEnabled={false}
                    data={history}
                    renderItem={({ item, index }) =>
                        <ItemHistory
                            numberOfRecords={numberOfRecords}
                            detail={item.order_details}
                            created={item.created_at}
                            id={item.id}
                            money={item.total_amount}
                            detailCart={Detail}
                        />
                    }
                />
            </View>
        </SafeAreaView>
    )
}

export default History

const styles = StyleSheet.create({})