import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView, ActivityIndicator, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import axios from 'axios';

const Register = ({ navigation }) => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [checkEmail, setCheckEmail] = useState(true)

  const [password, setPassword] = useState('')
  const [checkPassword, setcheckPassword] = useState(true)

  const [passwordAgain, setPasswordAgain] = useState('')
  const [checkPasswordAgain, setCheckPasswordAgain] = useState(true)



  const handleValidate = async () => {
    setLoading(false);
    if (name.length === 0 || email.length === 0 || password.length === 0 || passwordAgain.length === 0) {
      Alert.alert('Thông báo', `Vui lòng điền đầy đủ thông tin`, [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
    } else {
      const regux = new RegExp('[^@]{2,64}@[^.]{2,253}\.[0-9a-z-.]{2,63}')
      if (regux.test(email)) {
        setCheckEmail(true)
        if (password.length > 5) {
          setcheckPassword(true)
          if (password === passwordAgain) {
            setCheckPasswordAgain(true)
            if (checkEmail && checkPassword && checkPasswordAgain) {
              try {
                const response = await axios.post(`http://10.0.3.2:8000/api/register`, { name: name, email: email, password: password });
                const validate = response.data
                // console.log(validate.errors.email)
                if (!validate.state) {
                  validate.errors.email.map((item, index) => {
                    Alert.alert('Thông báo', item, [
                      { text: 'OK', onPress: () => console.log('OK Pressed') },
                    ]);
                  })
                } else {
                  Alert.alert('Thông báo', `Đăng kí tài khoản thành công\nXin chào: ${name}`, [
                    { text: 'OK', onPress: () => navigation.navigate('Login') },
                  ]);
                }
              } catch (error) {
                console.log('lỗiii', error);
              }
            }
          } else {
            setCheckPasswordAgain(false)
          }
        } else {
          setcheckPassword(false)
        }
      } else {
        setCheckEmail(false)
      }
    }

  };




  const [loading, setLoading] = useState(false);

  return (
    <SafeAreaView style={{}}>
      {loading && (
        <View style={{
          height: '100%',
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 10000
        }}>
          <ActivityIndicator size="large" color="#3498db" />
        </View>
      )}
      <ScrollView style={{ paddingBottom: 150 }} >
        <View style={{ padding: 30 }}>

          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Đăng ký</Text>
          </View>

          <View style={styles.form}>
            <Text style={styles.title}>Họ tên: </Text>
            <View >
              <Ionicons name='person-add-sharp' style={styles.icon} />
              <TextInput
                onChangeText={(text) => setName(text)}
                placeholder='Nhập Họ và tên' style={styles.input} />
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
              <TextInput
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
                placeholder='Nhập mật khẩu' style={styles.input} />
              {checkPassword ? '' : <Text style={{ color: 'red' }}>Tối thiểu 6 kí tự</Text>}
            </View>
          </View>

          <View style={styles.form}>
            <Text style={styles.title}>Nhập lại mật khẩu: </Text>
            <View >
              <Ionicons name='refresh-outline' style={styles.icon} />
              <TextInput
                secureTextEntry={true}
                onChangeText={(text) => setPasswordAgain(text)}
                placeholder='Nhập lại mật khẩu' style={styles.input} />
              {checkPasswordAgain ? '' : <Text style={{ color: 'red' }}>Mật khẩu nhập lại không đúng</Text>}

            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5 }}>
            <Text style={{ color: 'blue' }} onPress={() => navigation.navigate('Login')}>Tôi đã có tài khoản</Text>
            <Text style={{ color: 'blue' }}>Quên mật khẩu ?</Text>
          </View>
          <TouchableOpacity onPress={() => {

            setLoading(true);
            setTimeout(() => {
              handleValidate()
            }, 3000);

          }}>
            <View style={{ borderRadius: 20, borderWidth: 1, alignItems: 'center', paddingVertical: 10, marginTop: 20, backgroundColor: '#0066FF' }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#fff' }} >Đăng ký tài khoản</Text>
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