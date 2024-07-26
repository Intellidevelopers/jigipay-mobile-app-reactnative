import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Link, router } from 'expo-router';
import CountryPicker, { CountryCode } from 'react-native-country-picker-modal';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { FontAwesome6 } from '@expo/vector-icons';

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

const TwoStepVerificationScreen = () => {
  const [countryCode, setCountryCode] = useState<CountryCode>('NG');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [callingCode, setCallingCode] = useState('234'); // Updated to match Nigeria calling code
  const [InputFocused, setInputFocused] = useState(false);


  return (
    <View style={styles.container}>
        <View style={styles.pagination}>
        <TouchableOpacity onPress={() => router.back()}>
        <FontAwesome6 style={{ marginRight: 50, marginLeft: -85 }} name='xmark' size={24} />
        </TouchableOpacity>
        <View style={[styles.dot, styles.activeDot]} />
        <View style={[styles.dot, styles.activeDot]} />
        <View style={styles.dot} />
      </View>
      
      <Text style={styles.title}>Set up 2-step verification</Text>
      <Text style={styles.subtext}>
        Enter your phone number so we can text you an authentication code.
      </Text>
      <View style={styles.label}>
            <Text style={styles.labelText}>Country</Text>
            <Text style={styles.labelText}>Phone</Text>
        </View>
      <View style={styles.phoneContainer}>
        <View style={styles.flagContainer}>
          <CountryPicker
            countryCode={countryCode}
            withFlag
            withCallingCode
            withFilter
            onSelect={(country) => {
              setCountryCode(country.cca2 as CountryCode);
              setCallingCode(country.callingCode[0]);
            }}
          />
        </View>
        <TextInput
        style={[styles.input, InputFocused && styles.inputFocused]}
          placeholder="Phone"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        onFocus={() => setInputFocused(true)}
        onBlur={() => setInputFocused(false)}

        />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => {router.push('/EnterCodeScreen')}}>
        <Text style={styles.buttonText}>Create account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 5,
    marginTop: 40,
    fontFamily: "Semibold"
  },
  subtext: {
    marginBottom: 40,
    color: '#666',
    fontFamily: "Medium"
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  flagContainer: {
    position: 'absolute',
    left: 10,
    zIndex: 1,
  },
  input: {
    flex: 1,
    height: 55,
    borderColor: '#ddd',
    borderWidth: 2,
    borderRadius: 7,
    paddingLeft: 60, // Adjusted to make space for the flag
    paddingRight: 10,
    fontSize: 16
  },
  link: {
    color: 'blue',
    textAlign: 'center',
    marginTop: 10,
  },
  inputFocused: {
    borderColor: '#635BFF',
  },
  button: {
    backgroundColor: '#635BFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
    marginTop: '115%'
  },
  buttonText: {
    color: '#fff',
    fontFamily: "Semibold"
  },
  label:{
    flexDirection: "row",
    gap: 12    
  },
  labelText:{
    fontFamily: "Semibold"
  },
  paginationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: -5,
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
});

export default TwoStepVerificationScreen;
