import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal, Image } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { router } from 'expo-router';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';

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
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [isSelected, setSelection] = useState(false);
  const [firstNameFocused, setFirstNameFocused] = useState(false);
  const [lastNameFocused, setLastNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await fetchFonts();
      SplashScreen.hideAsync();
    };

    loadFonts();
  }, []);

  const handleFirstNameChange = (text: string) => {
    setFirstName(text);
    setFirstNameError(text ? '' : 'First name is required');
  };

  const handleLastNameChange = (text: string) => {
    setLastName(text);
    setLastNameError(text ? '' : 'Last name is required');
  };

  const handleEmailChange = (text: string) => {
    setEmail(text);
    setEmailError(validateEmail(text) ? '' : 'Invalid email address');
  };

  const handlePasswordChange = (password: string) => {
    setPassword(password);
    const error = validatePassword(password);
    setPasswordError(error);
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    const errors = [];
    if (password.length < 8) {
      errors.push('Must be at least 8 characters');
    }
    if (!/[a-z]/.test(password)) {
      errors.push('Must include a lowercase letter');
    }
    if (!/[A-Z]/.test(password)) {
      errors.push('Must include an uppercase letter');
    }
    if (!/\d/.test(password)) {
      errors.push('Must include a number');
    }
    if (!/[@$!%*?&]/.test(password)) {
      errors.push('Must include a special character');
    }
    return errors.join(', ');
  };

  const handleSignUp = () => {
    const isValid = firstName && lastName && validateEmail(email) && !validatePassword(password);
    if (isValid) {
      setModalVisible(true);
    } else {
      setFirstNameError(firstName ? '' : 'First name is required');
      setLastNameError(lastName ? '' : 'Last name is required');
      setEmailError(validateEmail(email) ? '' : 'Invalid email address');
      setPasswordError(validatePassword(password));
    }
  };

  const toggleCheckbox = () => {
    setSelection(!isSelected);
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.pagination}>
        <TouchableOpacity onPress={() => router.back()}>
          <FontAwesome6 style={{ marginRight: 50, marginLeft: -85 }} name='xmark' size={24} />
        </TouchableOpacity>
        <View style={[styles.dot, styles.activeDot]} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>
      <Text style={styles.title}>Create your account</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={styles.label}>First Name</Text>
      <TextInput
        style={[styles.input, firstNameFocused && styles.inputFocused]}
        placeholder="First Name"
        onFocus={() => setFirstNameFocused(true)}
        onBlur={() => setFirstNameFocused(false)}
        onChangeText={handleFirstNameChange}
        value={firstName}
      />
      {firstNameError ? <Text style={styles.errorText}>{firstNameError}</Text> : null}

      <Text style={styles.label}>Last Name</Text>
      <TextInput
        style={[styles.input, lastNameFocused && styles.inputFocused]}
        placeholder="Last Name"
        onFocus={() => setLastNameFocused(true)}
        onBlur={() => setLastNameFocused(false)}
        onChangeText={handleLastNameChange}
        value={lastName}
      />
      {lastNameError ? <Text style={styles.errorText}>{lastNameError}</Text> : null}

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={[styles.input, emailFocused && styles.inputFocused]}
        placeholder="Email"
        onFocus={() => setEmailFocused(true)}
        onBlur={() => setEmailFocused(false)}
        onChangeText={handleEmailChange}
        value={email}
        keyboardType="email-address"
      />
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={[styles.input, passwordFocused && styles.inputFocused]}
        placeholder="Password"
        secureTextEntry
        onFocus={() => setPasswordFocused(true)}
        onBlur={() => setPasswordFocused(false)}
        onChangeText={handlePasswordChange}
        value={password}
      />
      {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

      <View style={styles.termsContainer}>
        <TouchableOpacity style={styles.checkboxContainer} onPress={toggleCheckbox}>
          <View style={[styles.checkbox, isSelected && styles.checkboxSelected]}>
            {isSelected && <FontAwesome6 name="check" size={16} color="#fff" />}
          </View>
        </TouchableOpacity>
        <Text style={styles.termsText}>
          I certify that I'm 18 years of age or older, and I agree to the
          <Text style={styles.link}> User Agreement</Text> and
          <Text style={styles.link}> Privacy Policy</Text>
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Create account</Text>
      </TouchableOpacity>
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Image source={require('../assets/images/Invitation.png')} style={styles.logo} />
            <Text style={styles.modalText}>Please confirm your details:</Text>
            <Text style={styles.modalSubText}>First Name: <Text style={styles.labels}>{firstName}</Text></Text>
            <Text style={styles.modalSubText}>Last Name: <Text style={styles.labels}>{lastName}</Text></Text>
            <Text style={styles.modalSubText}>Email: <Text style={styles.labels}>{email}</Text></Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => {
                  setModalVisible(false);
                  router.push('/TwoStepVerificationScreen');
                }}
              >
                <Text style={styles.modalButtonText}>Confirm</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.modalButtonNo]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalButtonTextNo}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 50,
    alignItems: 'center',
  },
  dot: {
    width: 40,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#4945FF',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontFamily: 'Semibold',
  },
  input: {
    height: 55,
    borderColor: '#f0f0f0',
    borderWidth: 2,
    borderRadius: 8,
    marginBottom: 20,
    paddingLeft: 10,
    fontSize: 16,
    fontFamily: 'Regular',
  },
  inputFocused: {
    borderColor: '#4945FF',
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkboxContainer: {
    marginRight: 10,
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
  termsText: {
    flex: 1,
    flexWrap: 'wrap',
    fontFamily: 'Regular',
    fontSize: 12,
    color: '#444',
  },
  link: {
    color: 'blue',
  },
  button: {
    backgroundColor: '#4945FF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 100,
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Semibold',
  },
  label: {
    fontWeight: '500',
    fontFamily: 'Medium',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: 300,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
    height: 400
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },
  modalText: {
    fontSize: 18,
    fontFamily: 'Bold',
    marginBottom: 30,
  },
  modalSubText: {
    fontSize: 16,
    fontFamily: 'Regular',
    marginBottom: 5,
    textAlign: "left",
    alignSelf: "flex-start"
  },
  modalButtons: {
    flexDirection: 'row',
    marginTop: 65,
  },
  modalButton: {
    backgroundColor: '#4945FF',
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  modalButtonText: {
    color: '#fff',
    fontFamily: 'Regular',
  },
  modalButtonNo: {
    backgroundColor: '#ccc',
  },
  modalButtonTextNo: {
    color: '#000',
    fontFamily: 'Regular',
  },
  labels:{
    fontFamily: "Regular",
    color: "#4945FF"
  }
});

export default Signup;
