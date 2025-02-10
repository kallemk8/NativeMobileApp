import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View, ImageBackground, KeyboardAvoidingView, Image, ActivityIndicator } from "react-native";
import { useRouter } from 'expo-router';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { commonStyles } from './../style'
export default function Index() {
  const router = useRouter();
  const [email, setEmail] = useState()
  const [password, setPassword] = useState();
  const [disable, setdisable] = useState(false)
  const [loginEmailerror, setLoginEmailerror] = useState("");
  const handleInputChange = (data: any, type: string) => {
    setLoginEmailerror("");
    setdisable(false)
    if (type == "email") {
      setEmail(data)
    }
    if (type == "password") {
      setPassword(data)
    }

  }
  const storeData = async (key: any, value: any) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.error(e);
    }
  };


  const onPress = async () => {
    setdisable(true)
    setLoginEmailerror("")
    let req = {
      email: email,
      password: password
    }

    axios.post('https://chatportal.pranathiss.com/qxbox/apiV1/login/', req).then(
      (res) => {
        const config = {
          headers: { Authorization: `Bearer ${res.data.access}`, 'content-type': 'multipart/form-data' }
        }
        let accesstoken = res.data.access

        axios.get('https://chatportal.pranathiss.com/qxbox/apiV1/user-info/', config).then((res2) => {
          setdisable(false)
          storeData("Admintoken", accesstoken)

          router.push('/Dashboard')

        }).catch((e) => {
          if (e.response.data.message) {
            setLoginEmailerror(e.response.data.message)
          }
          setdisable(false)
        });

      }
    ).catch((e) => {
      console.log(e)
      if (e.response.data.detail) {
        setLoginEmailerror(e.response.data.detail[0])
      }
      setdisable(false)
    });


    // fetch('https://chatportal.pranathiss.com/qxbox/apiV1/login/', requestOptions).then(response => response.json())
    // .then(data =>  {
    //   console.log(data)
    //   let accesstoken = res.data.access

    //   router.push('/Dashboard')
    // });

  }
  return (

    <ImageBackground source={require('./../../assets/background_dot.png')} resizeMode="repeat" style={commonStyles.FullWidthScreen} >
      <KeyboardAvoidingView style={commonStyles.container} behavior="padding">
        {/* <TouchableOpacity onPress={()=>router.push('/')} style={styles.container2}>
          <Image
            style={styles.image}
            source={require('./../../assets/arrow_back.png')}
          />


        </TouchableOpacity> */}
        <Image source={require('./../../assets/logo.png')} style={commonStyles.imagelogo} />
        <Text style={commonStyles.header}   >Welcome back.</Text>
        <TextInput
          style={commonStyles.input}
          value={email}
          onChangeText={(e) => handleInputChange(e, "email")}
          placeholder="Email"

        />

        <TextInput
          style={commonStyles.input}
          value={password}
          secureTextEntry={true}
          onChangeText={(e) => handleInputChange(e, "password")}
          placeholder="Password"

        />
        <View style={commonStyles.forgotPassword}>
          <TouchableOpacity
            onPress={() => console.log('enter')}
          >
            <Text style={commonStyles.forgot}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>
        {disable ? <ActivityIndicator size="large" color="#0000ff" /> :""}
        <View >
          <Text style={commonStyles.link}>{loginEmailerror}</Text>
        </View>
        <TouchableOpacity style={disable ? commonStyles.Commonbutton2 : commonStyles.Commonbutton} onPress={onPress}>
          <Text style={commonStyles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={commonStyles.row}>
          <Text>Don’t have an account? </Text>
          <TouchableOpacity onPress={() => router.push('/Register')}>
            <Text style={commonStyles.link}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>

  );
}