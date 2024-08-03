// app/splash.js
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';

export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/Onboarding');
    }, 6000); // Redirect after 2 seconds
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>WCMF</Text>
      <Text style={styles.subtext}>WORLD CLASS MICROFINACE</Text>
      <ActivityIndicator size="large" color="#fff" style={styles.spinner} />
      <StatusBar backgroundColor={'#4945FF'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4945FF',
  },
  text: {
    fontSize: 28,
    color: '#fff',
    marginBottom: -5,
    marginTop: 300,
    fontFamily: "Bold"
  },
  spinner: {
    marginTop: '80%',
  },
  subtext:{
    fontFamily: "Bold",
    color: '#fff',
  }
});
