import { Text, View, SafeAreaView, TouchableHighlight } from 'react-native';
import { useState, useEffect } from "react";
import { useRouter } from 'expo-router';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { commonStyles } from './../style'
export default function Home() {
  const router = useRouter();
  const getData = async (key: any) => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value ? value : null;
    } catch (e) {
      console.error(e);
    }
  };
  const [DATA, setDATA] = useState([{ name: "" }])
  useEffect(() => {
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

  const getChatbotlist = (Admintoken: any) => {
    axios.defaults.headers.common = { 'Authorization': `Bearer ${Admintoken}` }
    axios.get("https://chatportal.pranathiss.com/qxbox/apiV1/chatbot/").then((response) => {

      setDATA(response.data);
    });
  }
  return (
    <SafeAreaView style={commonStyles.container}>
      {DATA.map((item, i) => {
        return (
          <TouchableHighlight key={i} onPress={() => router.push("/Intents")}>
            <View style={commonStyles.item} >
              <Text style={commonStyles.title} >{item?.name}</Text>
            </View>
          </TouchableHighlight>
        )
      })}
    </SafeAreaView>
  );
}


