import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'

import React from 'react'
const Home = ({navigation}) => {
  return (
   <SafeAreaView>
     <View>
      <Text>Home</Text>
      <Button title='login' onPress={()=>navigation.navigate('Login')}/>
    </View>
   </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})