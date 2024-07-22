import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const PinSetup = () => {
  return (
    <View style={styles.container}>
      <Text>PinSetup</Text>
      <TouchableOpacity style={styles.button} onPress={() => router.push("/(tabs)")}>
        <Text style={styles.text}>Go To Homepage</Text>
      </TouchableOpacity>
    </View>
  )
}

export default PinSetup

const styles = StyleSheet.create({
    container:{
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },
    button:{
        backgroundColor: "#635BFF",
        padding: 10,
        borderRadius: 20,
    },
    text:{
        color: "#fff"
    }
})