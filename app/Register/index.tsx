import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View, StyleSheet, ImageBackground, KeyboardAvoidingView, Image, ScrollViewComponent, ScrollView } from "react-native";
import { getStatusBarHeight } from 'react-native-status-bar-height'
import { useRouter } from 'expo-router';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { commonStyles } from './../style'
import axios from 'axios';
export default function Index() {
  const router = useRouter();
  const [fullname, setfullname] = useState("")
  const [Username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [Mobile, setMobile] = useState("")
  const [confirmPassword, setconfirmPassword] = useState("")
  const [password, setPassword] = useState("")
  const handleInputChange = (data: any, type: string) => {
    if (type == "email") {
      setEmail(data)
    }
    if (type == "password") {
      setPassword(data)
    }

  }
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [signUpValidationErrors, setSignUpValidationErrors] = useState({})
  const onPress = () => {

    setIsSubmitting(true)
    let req = {
      fullname: fullname,
      email: email,
      mobile: Mobile,

      username: Username,

      password: password,
      confirm_password: confirmPassword,
    }
    axios.defaults.headers.common = { 'Authorization': `` }
    axios.post('https://chatportal.pranathiss.com/qxbox/apiV1/register/', req).then((rep) => {
      setIsSubmitting(false)
      router.push('/Login')
    }
    ).catch((e) => {
      setIsSubmitting(false)
      if (e.response.data) {
        setSignUpValidationErrors(e.response.data)
      }
    })


  }
  return (
    <SafeAreaProvider>
      <SafeAreaView  >
        <ScrollView  >

          <ImageBackground source={require('./../../assets/background_dot.png')} resizeMode="repeat" style={commonStyles.FullWidthScreen} >
            <KeyboardAvoidingView style={commonStyles.container} behavior="padding">
              {/* <TouchableOpacity onPress={() => router.push('/')} style={styles.container2}>
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
                onChangeText={(e) => setfullname(e)}
                placeholder="Full Name"

              />
              <TextInput
                style={commonStyles.input}
                value={email}
                onChangeText={(e) => setUsername(e)}
                placeholder="Username"

              />
              <TextInput
                style={commonStyles.input}
                value={email}
                onChangeText={(e) => setEmail(e)}
                placeholder="Email Address"

              />
              <TextInput
                style={commonStyles.input}
                value={email}
                onChangeText={(e) => setMobile(e)}
                placeholder="Mobile"

              />
              <TextInput
                style={commonStyles.input}
                value={password}
                secureTextEntry={true}
                onChangeText={(e) => setPassword(e)}
                placeholder="Password"

              />
              <TextInput
                style={commonStyles.input}
                value={password}
                secureTextEntry={true}
                onChangeText={(e) => setconfirmPassword(e)}
                placeholder="Confim Password"

              />
              <View >
                <TouchableOpacity
                  onPress={() => console.log('enter')}
                >
                  <Text style={commonStyles.textparagraphLeft} >I agree the  Terms and Conditions </Text>
                </TouchableOpacity>
              </View>

              <View>
                {Object.entries(signUpValidationErrors).map(c => (<Text style={commonStyles.forgot}>{c[0] + " " + c[1]} </Text>  ))}
                
              </View>
              <TouchableOpacity style={!isSubmitting ? commonStyles.Commonbutton : commonStyles.Commonbutton2} onPress={onPress}>
                <Text style={commonStyles.buttonText}>Register</Text>
              </TouchableOpacity>
              <View style={commonStyles.row}>
                <Text>Already have an account? </Text>
                <TouchableOpacity onPress={() => router.push('/Login')}>
                  <Text style={commonStyles.link}>Login</Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </ImageBackground>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
