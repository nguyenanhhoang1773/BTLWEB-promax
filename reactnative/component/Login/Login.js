import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView, ActivityIndicator } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

const Login = ({ navigation }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [checkMail, setCheckMail] = useState(true)
  const [checkPassWord, setCheckPassWord] = useState(true)
  const [login, setLogin] = useState([])
  const [id, setId] = useState('')


  // const handleValidate = () => {

  //   axios.post(`http://10.0.3.2:8000/api/login`, { email: email, password: password })
  //   .then((response) => {
  //     setLogin(response.data)
  //   })
  //   .catch((error) => {
  //     console.log('lỗiii', error)
  //   })


  //     if (email.length === 0) {
  //       setCheckMail(false);
  //     } else if (password.length === 0) {
  //       setCheckPassWord(false)
  //       setCheckMail(true)

  //     } else {
  //       setCheckMail(true)
  //       setCheckPassWord(true)
  //       setLoading(true);
  //       if (login.state) {

  //         const customer = login.user
  //         customer.map((item, index) => {
  //           setTimeout(() => {
  //             setLoading(false);
  //             navigation.navigate('TabNavigation', { id: item.id, name:item.name , email: item.email })         
  //           console.log(item.id)
  //         })
  //       }, 3000);
  //       } else {
  //         setTimeout(() => {
  //           setLoading(false);
  //           alert('Tài khoản hoặc mật khẩu không chính xác')
  //         }, 3000);
  //       }
  //     }

  // }
  const handleValidate = async () => {
    try {
      const response = await axios.post(`http://10.0.3.2:8000/api/login`, { email: email, password: password });
      setLogin(response.data);
      if (email.length === 0) {
        setCheckMail(false);
      } else if (password.length === 0) {
        setCheckPassWord(false);
        setCheckMail(true);
      } else {
        setCheckMail(true);
        setCheckPassWord(true);

        setLoading(true);
      }
    } catch (error) {
      console.log('lỗiii', error);
    }
  };
  
  useEffect(() => {
    if (typeof (login.state) !== "undefined") {
      if (login.state) {
        const customer = login.user;
        customer.map((item, index) => {
          setTimeout(() => {
            setLoading(false);
            navigation.navigate('TabNavigation', { customer: item.id, name: item.name, email: item.email });
            console.log(item.id);
          }, 3000);
        });
      } else {
        setTimeout(() => {
          setLoading(false);
          alert('Tài khoản hoặc mật khẩu không chính xác');
        }, 3000);
      }
    }

  }, [login])
  const [loading, setLoading] = useState(false);
  return (
    <SafeAreaView>
      {loading && (
        <View style={{
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

      <View style={{ padding: 30, width: '100%', height: '100%' }}>

        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Đăng Nhập</Text>
        </View>



        <View style={styles.form}>
          <Text style={styles.title}>Thông tin email </Text>
          <View >
            <Ionicons name='mail-outline' style={styles.icon} />
            <TextInput
              placeholder='Nhập email' style={styles.input}
              onChangeText={(text) => setEmail(text)}
            />
            {checkMail ? '' : <Text style={{ color: 'red' }}>Không được để trống dữ liệu</Text>}
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
            {checkPassWord ? '' : <Text style={{ color: 'red' }}>Không được để trống dữ liệu</Text>}

          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5 }}>
          <Text style={{ color: 'blue' }} onPress={() => navigation.navigate('Register')}>Tôi chưa có tài khoản</Text>
          <Text style={{ color: 'blue' }}>Quên mật khẩu ?</Text>
        </View>
        <TouchableOpacity onPress={() => { handleValidate() }}>
          <View style={{ borderRadius: 20, borderWidth: 1, alignItems: 'center', paddingVertical: 10, marginTop: 20, backgroundColor: '#0066FF' }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#fff' }}  >Đăng nhập</Text>
          </View>
        </TouchableOpacity>
        <Text style={{ paddingTop: 20, textAlign: 'center' }}>Hoặc đăng ký bằng</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
          <Image source={require('../../assets/fb2.jpg')} style={styles.img} />
          <Image source={require('../../assets/gg.png')} style={styles.img} />
          <Image source={require('../../assets/tw.jpg')} style={styles.img} />

        </View>
      </View>

    </SafeAreaView>
  )
}

export default Login;

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