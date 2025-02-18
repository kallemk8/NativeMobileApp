import { ImageBackground, KeyboardAvoidingView, Text, Image, TouchableOpacity } from "react-native";
import { useRouter } from 'expo-router';
import { commonStyles } from './style'
import { LinearGradient } from 'expo-linear-gradient'; //for expo
export default function Home() {
  const router = useRouter();
  return (
    <LinearGradient colors={['#FF9933', '#FFFFFF', '#138808']} start={{ x: 0.84, y: 0.01 }} end={{ x: 0.0, y: 1.0 }} style={commonStyles.gradient} >
      <ImageBackground source={require('./../assets/background_dot.png')} resizeMode="repeat" style={commonStyles.FullWidthScreen} >
        <KeyboardAvoidingView style={commonStyles.container} behavior="padding">
          <Image source={require('./../assets/images/bplogo.png')} style={commonStyles.imagelogo} />
                  <Image source={require('./../assets/images/tradition.jpg')} style={commonStyles.imagelogo2} />
          <Text style={commonStyles.header}   >Welcome back.</Text>
          <Text style={commonStyles.textparagraph} >The easiest way to start with your amazing application.</Text>
          <TouchableOpacity style={commonStyles.Commonbutton} onPress={() => router.push('/Login')}>
            <Text style={commonStyles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={commonStyles.button2} onPress={() => router.push('/HRMS')}>
            <Text style={commonStyles.buttonText2}>Sign Up</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ImageBackground>
    </LinearGradient>
  );
}