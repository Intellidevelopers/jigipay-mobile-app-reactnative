import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { router } from 'expo-router';
import { FontAwesome6, MaterialIcons } from '@expo/vector-icons';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSelected, setSelection] = useState(false);
  const [loading, setLoading] = useState(false); // State to manage loading indicator
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); // State to manage password visibility

  const correctEmail = 'worldclassmicrofinance@gmail.com';
  const correctPassword = '1234ABC@#$';

  const toggleCheckbox = () => {
    setSelection(!isSelected);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleLogin = () => {
    setLoading(true); // Start loading
    setTimeout(() => {
      if (email === correctEmail && password === correctPassword) {
        setLoading(false); // Stop loading
        router.push('/(tabs)'); // Navigate to the home page
      } else {
        setLoading(false); // Stop loading
        Alert.alert('Error', 'Invalid email or password. Please try again.');
      }
    }, 2000); // Simulated delay for login process
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()}>
        <FontAwesome6 style={{ marginRight: 50, marginTop: 30 }} name='xmark' size={22} />
      </TouchableOpacity>
      <View style={styles.header}>
        <Text style={styles.logo}>Jigipay</Text>
      </View>
      <Text style={styles.welcomeText}>Welcome back!</Text>
      <Text style={styles.subtitleText}>Please login to continue</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!isPasswordVisible} // Toggle secure text entry
          />
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <MaterialIcons
              name={isPasswordVisible ? "visibility" : "visibility-off"}
              size={24}
              color="gray"
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.rememberMeContainer}>
          <TouchableOpacity style={styles.checkboxContainer} onPress={toggleCheckbox}>
            <View style={[styles.checkbox, isSelected && styles.checkboxSelected]}>
              {isSelected && <FontAwesome6 name="check" size={16} color="#fff" />}
            </View>
          </TouchableOpacity>
          <Text style={styles.rememberMeText}>Remember me</Text>
          <TouchableOpacity onPress={() => router.push('/ForgotPassword')}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.signupbtn} onPress={() => router.push('/Signup')}>
            <Text style={styles.forgotPasswordText}>Register</Text>
          </TouchableOpacity>
      </View>
     
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin} disabled={loading}>
        {loading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={styles.loginButtonText}>Login</Text>
        )}
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20
  },
  logo: {
    fontSize: 24,
    color: '#4945FF',
    fontFamily: "Semibold"
  },
  welcomeText: {
    fontSize: 24,
    marginBottom: -5,
    fontFamily: "Bold"
  },
  subtitleText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    fontFamily: "Medium"
  },
  inputContainer: {
    marginBottom: 20,
    marginTop: 40
  },
  input: {
    height: 55,
    borderColor: '#4945FF',
    borderWidth: 1,
    borderRadius: 7,
    paddingLeft: 10,
    marginBottom: 20,
    fontFamily: "Medium"
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#4945FF',
    borderWidth: 1,
    borderRadius: 7,
    paddingLeft: 10,
    height: 50,
    marginBottom: 20,
  },
  passwordInput: {
    flex: 1,
    height: '100%',
  },
  eyeIcon: {
    paddingRight: 10,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rememberMeText: {
    marginLeft: 8,
    fontFamily: "Semibold"
  },
  forgotPasswordText: {
    color: '#4945FF',
    fontFamily: "Semibold"
  },
  loginButton: {
    height: 55,
    backgroundColor: '#4945FF',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: "Medium"
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  label: {
    fontFamily: "Semibold"
  },
  checkboxContainer: {
    marginRight: -60,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxSelected: {
    backgroundColor: '#4945FF',
    borderColor: '#4945FF',
  },
  signupbtn:{
    alignSelf: "center",
    marginTop: 140
  }
});

export default Login;
