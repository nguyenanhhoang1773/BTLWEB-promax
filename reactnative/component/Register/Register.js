import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
const Register = ({ navigation }) => {

  const [email, setEmail] = useState('')
  const [checkEmail, setCheckEmail] = useState(true)

  const handleValidate = () => {
    const regux = new RegExp('[^@]{2,64}@[^.]{2,253}\.[0-9a-z-.]{2,63}')
    if (regux.test(email)) {
      setCheckEmail(true)
    } else {
      setCheckEmail(false)
    }

  }
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ margin: 30 }}>

          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Đăng ký</Text>
          </View>

          <View style={styles.form}>
            <Text style={styles.title}>Họ tên: </Text>
            <View >
              <Ionicons name='person-add-sharp' style={styles.icon} />
              <TextInput placeholder='Nhập Họ và tên' style={styles.input} />
            </View>
          </View>

          <View style={styles.form}>
            <Text style={styles.title}>Thông tin email </Text>
            <View >
              <Ionicons name='mail-outline' style={styles.icon} />
              <TextInput
                placeholder='Nhập email' style={styles.input}
                onChangeText={(text) => setEmail(text)}
              />
              {checkEmail ? '' : <Text style={{ color: 'red' }}>Sai định dạng</Text>}
            </View>
          </View>

          <View style={styles.form}>
            <Text style={styles.title}>Nhập mật khẩu: </Text>
            <View >
              <Ionicons name='lock-closed-outline' style={styles.icon} />
              <TextInput placeholder='Nhập mật khẩu' style={styles.input} />
            </View>
          </View>

          <View style={styles.form}>
            <Text style={styles.title}>Nhập lại mật khẩu: </Text>
            <View >
              <Ionicons name='lock-closed-outline' style={styles.icon} />
              <TextInput placeholder='Nhập lại mật khẩu' style={styles.input} />
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5 }}>
            <Text style={{ color: 'blue' }} onPress={()=>navigation.navigate('Login')}>Tôi đã có tài khoản</Text>
            <Text style={{ color: 'blue' }}>Quên mật khẩu ?</Text>
          </View>
          <TouchableOpacity onPress={() => handleValidate()}>
            <View style={{ borderRadius: 20, borderWidth: 1, alignItems: 'center', paddingVertical: 10, marginTop: 20, backgroundColor: '#0066FF' }}>
              <Text
                onPress={() => alert('ok')}
                style={{ fontSize: 18, fontWeight: 'bold', color: '#fff' }} >Đăng ký tài khoản</Text>
            </View>
          </TouchableOpacity>
          <Text style={{ paddingTop: 20, textAlign: 'center' }}>Hoặc đăng ký bằng</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
            <Image source={require('../../assets/fb2.jpg')} style={styles.img} />
            <Image source={require('../../assets/gg.png')} style={styles.img} />
            <Image source={require('../../assets/tw.jpg')} style={styles.img} />

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Register

const styles = StyleSheet.create({
  form: {
    // borderWidth: 1,
    marginTop: 30,

  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 10
  },
  icon: {
    fontSize: 25,
    position: 'absolute'

  },
  input: {
    borderBottomWidth: 1,
    paddingLeft: 30,
    paddingTop: 3,
    fontSize: 16
  },
  img: {
    width: 30,
    height: 30,
    borderRadius: 50,
    marginHorizontal: 10,

  }
})