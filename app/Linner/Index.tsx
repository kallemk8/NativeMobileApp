import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; //for expo

//import LinearGradient from 'react-native-linear-gradient'; for react native andoird

const Index = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#FF9933', '#FFFFFF', '#138808']}
        start={{ x: 0.84, y: 0.01 }}
        end={{ x: 0.0, y: 1.0 }}
        style={styles.gradient}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
});

export default Index;
