import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native'
 

export default function Header() {
  return <Text style={styles.header} />
}

const styles = StyleSheet.create({
  header: {
    fontSize: 21,
    color: "",
    fontWeight: 'bold',
    paddingVertical: 12,
  },
})
