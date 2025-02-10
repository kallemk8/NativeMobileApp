import { Stack } from "expo-router";
import { commonStyles } from './..//style'
import { LinearGradient } from 'expo-linear-gradient'; //for expo
export default function Layout() {

  return  (<LinearGradient
            colors={['#FF9933', '#FFFFFF', '#138808']}
            start={{ x: 0.84, y: 0.01 }}
            end={{ x: 0.0, y: 1.0 }}
            style={commonStyles.gradient}
          >

<Stack screenOptions={{ headerShown: false }} />
          </LinearGradient>)
  ;
}