// app/onboarding3.js
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function Onboarding3() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Onboarding Screen 3</Text>
      <Button title="Get Started" onPress={() => router.push('(tabs)')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
