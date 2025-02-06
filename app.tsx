import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Index from './app/index';
import Login from './app/Login/index'
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from '@/hooks/useColorScheme';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Layout from './app/_layout';
import { Stack } from 'expo-router';
// Create the stack navigator
// const Stack = createStackNavigator(); 
export default function App() {
  const colorScheme = useColorScheme();
  return (
  
      <View>
        <Text>welcome</Text>
      </View>
    
  );
}