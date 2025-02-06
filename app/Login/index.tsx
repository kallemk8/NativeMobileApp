import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View, StyleSheet, ImageBackground, KeyboardAvoidingView, Image } from "react-native";
import { getStatusBarHeight } from 'react-native-status-bar-height'
import { useRouter } from 'expo-router';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Index() {
  const router = useRouter();
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const handleInputChange =  (data:any, type:string) => {
    if(type == "email"){
      setEmail(data)
    }
    if(type == "password"){
      setPassword(data)
    }
    
  }
  const storeData = async (key:any, value:any) => {
    try {
      await AsyncStorage.setItem(key,  value);
    } catch (e) {
      console.error(e);
    }
  };
  
   
  const onPress = async () => {
    let req = {
      email: email,
      password:password
    }
   
  axios.post('https://chatportal.pranathiss.com/qxbox/apiV1/login/', req).then(
    (res) => {
        const config = {
            headers: { Authorization: `Bearer ${res.data.access}`, 'content-type': 'multipart/form-data' }
          }
          let accesstoken = res.data.access
          
        axios.get('https://chatportal.pranathiss.com/qxbox/apiV1/user-info/', config).then((res2) => {
          
          storeData("Admintoken", accesstoken)
          
            router.push('/Dashboard')
             
          }).catch((e) => { 
            
          });
         
    }
).catch((e) => {
    

});


    // fetch('https://chatportal.pranathiss.com/qxbox/apiV1/login/', requestOptions).then(response => response.json())
    // .then(data =>  {
    //   console.log(data)
    //   let accesstoken = res.data.access

    //   router.push('/Dashboard')
    // });
    
  }
  return (

    <ImageBackground source={require('./../../assets/background_dot.png')} resizeMode="repeat" style={styles.background} >
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <TouchableOpacity onPress={()=>router.push('/')} style={styles.container2}>
          <Image
            style={styles.image}
            source={require('./../../assets/arrow_back.png')}
          />


        </TouchableOpacity>
        <Image source={require('./../../assets/logo.png')} style={styles.imagelogo} />
        <Text style={styles.header}   >Welcome back.</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(e)=>handleInputChange(e, "email")}
          placeholder="Email"

        />

        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(e)=>handleInputChange(e, "password")}
          placeholder="Password"

        />
        <View style={styles.forgotPassword}>
          <TouchableOpacity
            onPress={() => console.log('enter')}
          >
            <Text style={styles.forgot}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.row}>
          <Text>Don’t have an account? </Text>
          <TouchableOpacity onPress={() => console.log('sdfsd')}>
            <Text style={styles.link}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
 
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',

  },
  button: {
    width: '100%',
    marginVertical: 10,
    paddingVertical: 10,
    backgroundColor: "rgb(86, 12, 206)",
     
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
    textAlign: "center",
    color: "#fff"
  },
  header: {
    fontSize: 21,
    color: '#560CCE',
    fontWeight: 'bold',
    paddingVertical: 12,
  },
  container2: {
    position: 'absolute',
    top: 10 + getStatusBarHeight(),
    left: 4,
  },
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',

  },
  image: {
    width: 24,
    height: 24,
  },
  imagelogo: {
    width: 110,
    height: 110,
    marginBottom: 8,
  },
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  input: {
    backgroundColor: "#fff",
    height: 55,
    width: "100%",
    padding: 5,
    marginBottom: 20,
 
    borderWidth: 1,
    borderColor: "#999"
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: "#ff0000",
  },
  link: {
    fontWeight: 'bold',
    color: "#ff0000",
  },
})