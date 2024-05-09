import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Infomation = ({navigation}) => {
  return (
    <SafeAreaView>
        <View>
            <Button
            title="text"
            onPress={()=>navigation.navigate('Login')}/>
        </View>
    </SafeAreaView>
  )
}

export default Infomation

const styles = StyleSheet.create({})