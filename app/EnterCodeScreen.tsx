import { FontAwesome6 } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const EnterCodeScreen = () => {
  const [InputFocused, setInputFocused] = useState(false);

  return (
    <View style={styles.container}>
         <View style={styles.pagination}>
      <TouchableOpacity onPress={() => router.back()}>
        <FontAwesome6 style={{ marginRight: 50, marginLeft: -85 }} name='xmark' size={24} />
        </TouchableOpacity>
        <View style={[styles.dot, styles.activeDot]} />
        <View style={[styles.dot, styles.activeDot]} />
        <View style={[styles.dot, styles.activeDot]} />
      </View>
      
      <Text style={styles.title}>Enter authentication code</Text>
      <Text style={styles.subtitle}>
        Enter the 4-digit code that we have sent to your phone number, +62 8231234231
      </Text>

      <Text style={styles.labelText}>Code</Text>
      <TextInput 
       style={[styles.input, InputFocused && styles.inputFocused]}
      placeholder="Code" 
      keyboardType="numeric" 
      onFocus={() => setInputFocused(true)}
      onBlur={() => setInputFocused(false)}
      />
      <TouchableOpacity style={styles.button} onPress={() => {router.push('/Login')}}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonNoBg} onPress={() => {router.push('/EnterCodeScreen')}}>
        <Text style={styles.buttonTextNo}>Resend code</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    fontFamily: "Semibold"
  },
  subtitle: {
    marginBottom: 40,
    fontFamily: "Medium",
    color: "#555"
  },
  input: {
    height: 55,
    borderColor: '#ddd',
    borderWidth: 2,
    marginBottom: 20,
    paddingLeft: 10,
    borderRadius: 7,
    fontSize: 16
  },
  paginationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 50,
    alignItems: "center",
  },
  dot: {
    width: 40,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#635BFF',
  },
  labelText:{
    fontFamily: "Semibold"
  },
  inputFocused: {
    borderColor: '#635BFF',
  },
  button: {
    backgroundColor: '#635BFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
    marginTop: '95%'
  },
  buttonText: {
    color: '#fff',
    fontFamily: "Semibold"
  },
  buttonNoBg:{
    backgroundColor: '#ccc',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonTextNo:{
     color: '#444',
    fontFamily: "Semibold"
  }
});

export default EnterCodeScreen;
