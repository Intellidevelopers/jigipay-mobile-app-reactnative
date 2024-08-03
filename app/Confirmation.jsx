import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

const Confirmation = () => {

  return (
    <View style={styles.container}>
      <View style={{backgroundColor: "#fff", padding: 20, borderRadius: 5}}>
      <Text style={{textAlign: "center", color: "#888", fontFamily: "Semibold"}}>You are withdrawing</Text>
      <Text style={styles.amount}>₦10,000.00</Text>
      <Text style={{fontFamily: "Semibold", color: "#999"}}>Recipient</Text>
      <Text style={{fontFamily: "Bold", color: "#000", fontSize: 16}}>Adeagbo Josiah</Text>
      <Text  style={{fontFamily: "Semibold", color: "#333", fontSize: 14}}>Keystone bank</Text>
      </View>

      <TouchableOpacity style={styles.proceedButton} onPress={() => router.push('/PasscodeScreen')}>
        <Text style={styles.proceedText}> Proceed </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  amount: {
    fontSize: 30,
    fontFamily: 'Bold',
    marginVertical: 10,
    textAlign: "center",
    marginBottom: 40
  },
  proceedButton: {
    backgroundColor: '#635bff',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 320,
  },
  proceedText: {
    color: '#fff',
    fontFamily: 'Regular',
    fontSize: 16,
  },
});

export default Confirmation;
