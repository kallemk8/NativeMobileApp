import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
} from 'react-native';
import { useState, useEffect } from "react";
import { useRouter } from 'expo-router';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Home() {
  const router = useRouter();
  const onPress =() => {
    router.push('/Login')
  }
  const getData = async (key:any) => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value ?  value : null;
    } catch (e) {
      console.error(e);
    }
  };
  const [DATA, setDATA] = useState([{name:""}])
  useEffect(()=>{
    const fetchData = async () => {
      try {
        let Admintoken = await getData("Admintoken"); // Wait for token
        if (Admintoken) {
          getChatbotlist(Admintoken);
        } else {
          console.error("No token found");
        }
      } catch (error) {
        console.error("Error fetching token:", error);
      }
    };
  
    fetchData();
   
  }, [])

  const getChatbotlist = (Admintoken:any) => {
    axios.defaults.headers.common = { 'Authorization':`Bearer ${Admintoken}`}
      axios.get("https://chatportal.pranathiss.com/qxbox/apiV1/chatbot/").then((response) => {
        console.log(response.data)
        setDATA(response.data);
      });
  }
  return (
    <SafeAreaView style={styles.container}>
      {DATA.map((item,i )=>{
        return(
          <View style={styles.item}>
            <Text style={styles.title} >{item?.name}</Text>
          </View>
        )
      })}
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  gradient: {
    flex: 1, // Full screen
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
    

  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});