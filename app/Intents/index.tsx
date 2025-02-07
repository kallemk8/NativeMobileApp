import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
  TouchableHighlight,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { useState, useEffect } from "react";
import { useRouter } from 'expo-router';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Home() {
  const router = useRouter();
  const [websiteurl, setwebsiteurl] = useState("")
  const [websitcontent, setwebsitcontent] = useState("")

  const getData = async (key: any) => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value ? value : null;
    } catch (e) {
      console.error(e);
    }
  };
  const [DATA, setDATA] = useState([{ url: "" }])
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
  const [showAdd, setshowAdd] = useState(false)
  const getChatbotlist = (Admintoken: any) => {
    axios.defaults.headers.common = { 'Authorization': `Bearer ${Admintoken}` }
    axios.get(`https://chatportal.pranathiss.com/qxbox/apiV1/web-page/?chatbot_id=${21}&is_active=true`).then((response) => {

      setDATA(response.data);
    });
  }
  const [errormsg, seterrormsg] = useState("")
  const [editID, seteditID] = useState("")
  const saveWebsitepagesListData = () => {
    seterrormsg("")
    if (websiteurl && websitcontent) {
        let object = {
            url: websiteurl,
            content: websitcontent,
            chatbot: 21
        }
        axios.defaults.headers.common = { 'Authorization': `Bearer ${sessionStorage.getItem("Admintoken")}` }
        if (editID) {
            axios.patch(`apiV1/web-page/${editID}/`, object).then((rep) => {
              getChatbotlist(21);
                setwebsiteurl("")
                setwebsitcontent("")
                seteditID("")
                 setshowAdd(false)
                //settypesofcharts(rep.data)
            }).catch((e) => {
                if (e.response.data.detail) {
                    seterrormsg(e.response.data.detail)
                }
            })
        } else {
            axios.post('apiV1/web-page/', object).then((rep) => {
              getChatbotlist(21);
              setwebsiteurl("")
              setwebsitcontent("")
              seteditID("")
               setshowAdd(false)
                //settypesofcharts(rep.data)
            }).catch((e) => {
                if (e.response.data.detail) {
                    seterrormsg(e.response.data.detail)
                }
            })
        }
    } else {
        alert("Please enter valid website url and website content")
    }
}
const onchangepageContentEdit = (data:any) => {
  setwebsiteurl(data.url)
  setwebsitcontent(data.content)
  seteditID(data.id)
  setshowAdd(true)
}
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Pages</Text>
        <TouchableOpacity onPress={() => router.push('/IntentsList/Index')}>
          <Text style={styles.plusButton}>Next </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setshowAdd(true)}>
          <Text style={styles.plusButton}>+</Text>
        </TouchableOpacity>
      </View>

      {!showAdd && DATA.map((item, i) => {
        return (
          <TouchableHighlight onPress={() =>  onchangepageContentEdit(item)}>
            <View style={styles.item} >
              <Text style={styles.title} >{item?.url}</Text>
            </View>
          </TouchableHighlight>
        )
      })}
      {showAdd ?
        <View>
          <TextInput
            style={styles.input}
            value={websiteurl}
            onChangeText={(e) => setwebsiteurl(e)}
            placeholder="Website Url"


          />
          <TextInput
            style={styles.input2}
            value={websitcontent}
            onChangeText={(e) => setwebsiteurl(e)}
            placeholder="Website Content"
            multiline={true}
            numberOfLines={4}

          />
          <View>
            <Text>{errormsg}</Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={saveWebsitepagesListData}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonCancel} onPress={() => setshowAdd(false)}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View> : ""}

    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  gradient: {
    flex: 1, // Full screen
    justifyContent: 'center',
    alignItems: 'center',
  },
  textcenter: {
    textAlign: "center"
  },
  link: {
    fontWeight: 'bold',
    color: "#ff0000",
  },
  button: {
    width: '100%',
    marginVertical: 10,
    paddingVertical: 10,
    backgroundColor: "rgb(86, 12, 206)",

  },
  buttonCancel:{
    width: '100%',
    marginVertical: 10,
    paddingVertical: 10,
    backgroundColor: "rgb(243, 11, 69)",
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
    textAlign: "center",
    color: "#fff"
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,


  },
  input: {
    backgroundColor: "#fff",
    height: 40,
    width: "100%",
    padding: 5,
    marginBottom: 20,

    borderWidth: 1,
    borderColor: "#999"
  },
  input2: {
    backgroundColor: "#fff",
    height: 100,
    width: "100%",
    padding: 5,
    marginBottom: 20,

    borderWidth: 1,
    borderColor: "#999"
  },
  item: {
    backgroundColor: 'rgb(233 230 230)',
    padding: 20,
    marginVertical: 8,
    boxShadow: "0px 3px 4px 0px #ccc"
  },

  title: {
    fontSize: 24,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
  },
  headerTitle: { fontSize: 20, fontWeight: "bold" },
  plusButton: { fontSize: 24, fontWeight: "bold", color: "blue" },
});