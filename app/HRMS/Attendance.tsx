import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View, ImageBackground, KeyboardAvoidingView, Image, ActivityIndicator } from "react-native";
import { useRouter } from 'expo-router';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { commonStyles } from './../style'
import { LinearGradient } from 'expo-linear-gradient'; //for expo
import Icon from 'react-native-vector-icons/FontAwesome';
export default function Attendance() {
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
    <LinearGradient colors={['#FF9933', '#FFFFFF', '#138808']} start={{ x: 0.84, y: 0.01 }} end={{ x: 0.0, y: 1.0 }} style={commonStyles.gradient} >
      <View style={commonStyles.flexcontainer}>
        {/* Left Section */}
        <View style={commonStyles.left}>
          <Image source={require('./../../assets/images/tradition.jpg')} style={commonStyles.imagelogo3} />
        </View>

        {/* Middle Section */}
        <View style={commonStyles.middle}>
          <Image source={require('./../../assets/images/bplogo.png')} style={commonStyles.imagelogo4} />
        </View>

        {/* Right Section */}
        <View style={commonStyles.right}>
          <Icon name="bell-o" size={20} color="#000" />
        </View>
      </View>
      <View style={commonStyles.checkInHolder} >

       
        
        <View>
          <Text style={commonStyles.welcometext}>Welcome back, Bruce Lee!</Text>
        </View>
        <View style={commonStyles.flexcontainer}>
          <View style={commonStyles.left3}>
            <View style={commonStyles.modules}>
              <Text>Profile</Text>
              <Text>View Details</Text>
            </View>
            <View style={commonStyles.modules}>
              <Text>Profile</Text>
              <Text>View Details</Text>
            </View>
          </View>
          <View style={commonStyles.right2}>
            <View style={commonStyles.modules}>
              <Text>Attendance</Text>
              <Text>View Details</Text>
            </View>
            <View style={commonStyles.modules}>
              <TouchableOpacity style={commonStyles.button2} onPress={() => router.push('/HRMS/Attendance')}>
                <Text>Profile</Text>
                <Text>View Details</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>


    </LinearGradient>
  );
}