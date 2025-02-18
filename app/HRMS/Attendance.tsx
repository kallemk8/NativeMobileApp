import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View, ImageBackground, KeyboardAvoidingView, Image, ActivityIndicator, Modal } from "react-native";
import { useRouter } from 'expo-router';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { commonStyles } from './../style'
import { LinearGradient } from 'expo-linear-gradient'; //for expo
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Attendance() {
  
  const [selectedItem, setSelectedItem] = useState({icon:"", color:"",subtitle:"", title:""});
  
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
  const items = [
    { title: 'Profile', subtitle: 'View Profile', icon: 'address-book-o', color: '#6B5AED' },
    { title: 'Leaves', subtitle: 'Leave Charts', icon: 'bed', color: '#E94E77' },
    { title: 'Attendance', subtitle: 'Attendance', icon: 'calendar-o', color: '#FF5A5F' },
    { title: 'Announcement', subtitle: 'View Events', icon: 'bullhorn', color: '#FFA500' },
    { title: 'Payslips', subtitle: 'Salary Slips', icon: 'file-text', color: '#17A589' },
    { title: 'Holidays', subtitle: 'Holidays', icon: 'plane', color: '#8E44AD' },
  ];
  
  return (
    <LinearGradient colors={['#FF9933', '#FFFFFF', '#138808']} start={{ x: 0.84, y: 0.01 }} end={{ x: 0.0, y: 1.0 }} style={commonStyles.gradient} >
      <View style={commonStyles.flexcontainer}>
        {/* Left Section */}
        <View style={[commonStyles.left, commonStyles.marginTopbottom]}>

            <Text style={commonStyles.title}><TouchableOpacity  onPress={() => router.push('/HRMS')}> <Icon name="arrow-left" size={25} color="#eee" /> </TouchableOpacity>Attendance</Text>
        </View>
      </View>
      <View style={commonStyles.checkInHolder} >

       
        
        <View>
          <Text style={commonStyles.welcometext}>Welcome back, Bruce Lee!</Text>
        </View>
        <View style={commonStyles.container2}>
        {items.map((item, index) => (
        <TouchableOpacity key={index} style={commonStyles.card}  >
          <View style={commonStyles.iconContainer2}>
            <Icon name={item.icon} size={24} color={item.color} />
            <Text style={[commonStyles.title2, { color: item.color }]}>{item.title}</Text>
          </View>
          <Text style={commonStyles.subtitle}>{item.subtitle}</Text>
        </TouchableOpacity>
         ))}
        </View>
        
      </View>
      

    </LinearGradient>
  );
}