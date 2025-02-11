import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useColorScheme } from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome';
export default function Layout() {
  const theme = useColorScheme(); // Detect dark or light mode

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#121577" ,
           
        },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: theme === "dark" ? "#888" : "#aaa",
       
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Icon name="th-large" size={size} color={color} />
            
          ),
          headerShown:false
        }}
        
      />
      <Tabs.Screen
        name="Attendance"
        options={{
          //title: "Attendance",
          tabBarIcon: ({ color, size }) => (
            <Icon name="calendar-check-o" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Leave"
        options={{
          //title: "Attendance",
          tabBarIcon: ({ color, size }) => (
            <Icon name="calendar-minus-o" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
