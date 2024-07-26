import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync(); // Prevent the splash screen from auto-hiding

const fetchFonts = () => {
  return Font.loadAsync({
    'Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Extrabold': require('../assets/fonts/Poppins-ExtraBold.ttf'),
    'Black': require('../assets/fonts/Poppins-Black.ttf'),
    'ExtraLight': require('../assets/fonts/Poppins-ExtraLight.ttf'),
    'Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'Semibold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Thin': require('../assets/fonts/Poppins-Thin.ttf'),
    'Light': require('../assets/fonts/Poppins-Light.ttf'),
    'Mano': require('../assets/fonts/SpaceMono-Regular.ttf')
  });
};

const Signup = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/business.png')} style={styles.mockup} />
      <Text style={styles.headerText}>Create your Jigipay account today!</Text>
      <Text style={styles.subText}>Jigipay is a powerful tool that allows you to easily send, receive, and track all your transactions.</Text>
      <StatusBar backgroundColor={'black'} />
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
    width: 300,
    height: 300,
    marginBottom: 10,
    marginTop: 30
  },
  headerText:{
    fontSize: 26,
    marginBottom: -5,
    color: "#000",
    fontFamily: 'Bold',
    textAlign: "center"
  },
  subText:{
    textAlign: "center",
    width: '90%',
    fontFamily: "Regular",
    color: "#666",
    marginBottom: 30,
  },
  buttonContainer:{
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 60
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
    fontFamily: "Medium"
  },
  loginText:{
    color: "#635BFF",
    fontSize: 16,
    fontFamily: "Medium"
  },
  serviceText:{
    textAlign: "center",
    color: "#666",
    fontFamily: "Medium",
    marginBottom: 5
  },
  serviceTextRow:{
    flexDirection: "row",
    gap: 7
  },
  termsText:{
    color: "#635BFF",
    fontFamily: "Medium",
    textDecorationLine: "underline"
  },
  privacyText:{
    color: "#635BFF",
    fontFamily: "Medium",
    textDecorationLine: "underline"

  },
  andText:{
    color: "#666",
    fontFamily: "Regular"
  }
})