// app/splash.js
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
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
      <Text style={styles.text}>Jigipay</Text>
      <ActivityIndicator size="large" color="#fff" style={styles.spinner} />
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
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    marginTop: 290
  },
  spinner: {
    marginTop: '80%',
  },
});
