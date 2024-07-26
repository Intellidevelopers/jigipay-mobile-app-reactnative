import { router } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Modal, Image } from 'react-native';

const Signup = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handlePhoneChange = (text: string) => {
    setPhoneNumber(text);
    const isValid = validatePhoneNumber(text);
    setPhoneError(isValid ? '' : 'Invalid phone number');
  };

  const handlePasswordChange = (password: string) => {
    setPassword(password);
    const error = validatePassword(password);
    setPasswordError(error);
  };

  const validatePhoneNumber = (number: string) => {
    const phoneRegex = /^(\+?\d{1,4}[-.\s]?)?(\d{10})$/;
    return phoneRegex.test(number);
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
    const isPhoneValid = validatePhoneNumber(phoneNumber);
    const passwordValidation = validatePassword(password);
    if (isPhoneValid && !passwordValidation) {
      setModalVisible(true);
    } else {
      console.log('Phone number or password is invalid');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Create an account</Text>
      <Text style={styles.subText}>Enter your mobile number to verify your account</Text>

      <Text style={styles.phoneText}>Phone</Text>
      <View style={styles.phoneInputContainer}>
        <Text style={styles.countryCode}>+234</Text>
        <TextInput
          style={styles.phoneInput}
          value={phoneNumber}
          onChangeText={handlePhoneChange}
          keyboardType="phone-pad"
          placeholder="Mobile number"
          onFocus={() => setPhoneError('')}
        />
      </View>
      {!!phoneError && <Text style={styles.errorText}>{phoneError}</Text>}

      <Text style={styles.phoneText}>Password</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          value={password}
          onChangeText={handlePasswordChange}
          keyboardType="default"
          placeholder="Password"
          secureTextEntry
          onFocus={() => setPasswordError('')}
        />
      </View>
      {!!passwordError && <Text style={styles.errorText}>{passwordError}</Text>}

      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Image source={require('../assets/images/Invitation.png')} style={styles.logo} />
            <Text style={styles.modalText}>Verify your phone number before we send code</Text>
            <Text style={styles.modalSubText}>Is this correct? +234 {phoneNumber}</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.modalButton} onPress={() => router.push('/OtpVerification')}>
                <Text style={styles.modalButtonText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.modalButtonNo]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalButtonTextNo}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff"
  },
  headerText: {
    marginTop: 60,
    fontSize: 20,
    fontWeight: '700',
  },
  subText: {
    color: '#666',
    marginBottom: 20,
  },
  phoneText: {
    marginBottom: 10,
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
  },
  passwordContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 7,
    borderRadius: 5,
  },
  countryCode: {
    fontSize: 18,
    marginRight: 10,
  },
  phoneInput: {
    flex: 1,
    fontSize: 18,
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
  signUpButton: {
    marginTop: 20,
    backgroundColor: '#635BFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  signUpButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: "#444"
  },
  modalSubText: {
    fontSize: 16,
    marginBottom: 25,
    textAlign: 'center',
  },
  modalButtons: {
    flexDirection: 'column',
    marginBottom: 40,
  },
  modalButton: {
    backgroundColor: '#635BFF',
    padding: 14,
    borderRadius: 5,
    margin: 5,
    alignItems: 'center',
    width: 250,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: "500"
  },
  modalButtonNo: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#635BFF',
    fontWeight: "500"
  },
  modalButtonTextNo: {
    color: '#635BFF',
    fontSize: 16,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20
  }
});