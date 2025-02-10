import { ImageBackground, KeyboardAvoidingView, Text,  Image,  TouchableOpacity } from "react-native";
import { useRouter } from 'expo-router';
import { commonStyles } from './style'
export default function Home() {
  const router = useRouter();
  return (
    <ImageBackground source={require('./../assets/background_dot.png')} resizeMode="repeat" style={commonStyles.FullWidthScreen} >
      <KeyboardAvoidingView style={commonStyles.container} behavior="padding">
        <Image source={require('./../assets/logo.png')} style={commonStyles.imagelogo} />
        <Text style={commonStyles.header}   >Welcome back.</Text>
        <Text style={commonStyles.textparagraph} >The easiest way to start with your amazing application.</Text>
        <TouchableOpacity style={commonStyles.Commonbutton} onPress={()=>router.push('/Login')}>
          <Text style={commonStyles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={commonStyles.button2} onPress={()=>router.push('/Register')}>
          <Text style={commonStyles.buttonText2}>Sign Up</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </ImageBackground>
  );
}