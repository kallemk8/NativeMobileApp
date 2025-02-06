import { ImageBackground, KeyboardAvoidingView, Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from 'expo-router';
export default function Home() {
  const router = useRouter();
  const onPress =() => {
    router.push('/Login')
  }
  return (
    <ImageBackground source={require('./../assets/background_dot.png')} resizeMode="repeat" style={styles.background} >
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Image source={require('./../assets/logo.png')} style={styles.imagelogo} />
        <Text style={styles.header}   >Welcome back.</Text>
        <Text style={styles.textparagraph} >The easiest way to start with your amazing application.</Text>
        <TouchableOpacity style={styles.button} onPress={()=>router.push('/Login')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={()=>router.push('/Register')}>
          <Text style={styles.buttonText2}>Sign Up</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',

  },
  textparagraph:{
    fontSize: 15,
    lineHeight: 21,
    textAlign: 'center',
    marginBottom: 12,
  },
  button2:{
    width: '100%',
    marginVertical: 10,
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderRadius: "5px",
    borderColor:"#999",
    borderWidth:1
  },
  button: {
    width: '100%',
    marginVertical: 10,
    paddingVertical: 10,
    backgroundColor: "rgb(86, 12, 206)",
    borderRadius: "5px"
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
    textAlign: "center",
    color: "#fff"
  },
  buttonText2:{
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
    textAlign: "center",
    color: "rgb(86, 12, 206)"
  },
  header: {
    fontSize: 21,
    color: '#560CCE',
    fontWeight: 'bold',
    paddingVertical: 12,
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
    borderRadius: "10px",
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