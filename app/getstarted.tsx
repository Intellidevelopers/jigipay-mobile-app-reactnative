import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'

const Signup = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/business.png')} style={styles.mockup} />
      <Text style={styles.headerText}>Create your Jigipay account</Text>
      <Text style={styles.subText}>Jigipay is a powerful tool that allows you to easily send, receive, and track all your transactions.</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.signupBtn} onPress={() => router.push('/Signup')}>
          <Text style={styles.signupText}> Sign up</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn} onPress={() => router.push('/(tabs)')}>
          <Text style={styles.loginText}> Log in</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.serviceText}>By continuing you accept our</Text>
      <View style={styles.serviceTextRow}>
          <Link style={styles.termsText} href='/terms'>Terms of Service</Link> 
          <Text style={styles.andText}>and</Text>
          <Link style={styles.privacyText} href='/privacy'>Privacy Policy</Link>
      </View>
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  },
  mockup:{
    width: '100%',
    height: '50%',
    marginBottom: 30
  },
  headerText:{
    fontSize: 26,
    fontWeight: "900",
    marginBottom: 10,
    color: "#444"
  },
  subText:{
    textAlign: "center",
    width: '90%',
    fontWeight: "500",
    color: "#666",
    marginBottom: 50
  },
  buttonContainer:{
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50
  },
  signupBtn:{
    backgroundColor: "#635BFF",
    padding: 14,
    width: 330,
    alignItems: "center",
    borderRadius: 7,
    marginBottom: 10
  },
  loginBtn:{
    padding: 14,
    width: 330,
    alignItems: "center",
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "#635BFF"
  },
  signupText:{
    color: "#fff",
    fontSize: 16,
    fontWeight: "500"
  },
  loginText:{
    color: "#635BFF",
    fontSize: 16,
    fontWeight: "500"
  },
  serviceText:{
    textAlign: "center",
    color: "#666",
    fontWeight: "500",
    marginBottom: 5
  },
  serviceTextRow:{
    flexDirection: "row",
    gap: 7
  },
  termsText:{
    color: "#635BFF",
    fontWeight: "500",
    textDecorationLine: "underline"
  },
  privacyText:{
    color: "#635BFF",
    fontWeight: "500",
    textDecorationLine: "underline"

  },
  andText:{
    color: "#666",
    fontWeight: "500"
  }
})