import { FontAwesome6 } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Modal } from 'react-native';

const EnterCodeScreen = () => {
  const [code, setCode] = useState('');
  const [inputFocused, setInputFocused] = useState(false);
  const [isErrorModalVisible, setIsErrorModalVisible] = useState(false);
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const correctCode = "1234"; // Example correct code

  const validateCode = () => {
    if (code === correctCode) {
      setIsSuccessModalVisible(true);
      setTimeout(() => {
        setIsSuccessModalVisible(false);
        router.push('/Login');
      }, 2000); // Delay for 2 seconds before redirecting
    } else {
      setErrorMessage('Invalid code. Please enter the correct 4-digit code.');
      setIsErrorModalVisible(true);
    }
  };

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
        style={[styles.input, inputFocused && styles.inputFocused]}
        placeholder="Code"
        keyboardType="numeric"
        value={code}
        onChangeText={setCode}
        onFocus={() => setInputFocused(true)}
        onBlur={() => setInputFocused(false)}
      />
      <TouchableOpacity style={styles.button} onPress={validateCode}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonNoBg} onPress={() => { /* Resend code logic */ }}>
        <Text style={styles.buttonTextNo}>Resend code</Text>
      </TouchableOpacity>

      {/* Error Modal */}
      <Modal
        transparent={true}
        visible={isErrorModalVisible}
        animationType="slide"
        onRequestClose={() => setIsErrorModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Error</Text>
            <Text style={styles.modalMessage}>{errorMessage}</Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setIsErrorModalVisible(false)}
            >
              <Text style={styles.modalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Success Modal */}
      <Modal
        transparent={true}
        visible={isSuccessModalVisible}
        animationType="slide"
        onRequestClose={() => setIsSuccessModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Success</Text>
            <Text style={styles.modalMessage}>Code is correct! Redirecting to login...</Text>
          </View>
        </View>
      </Modal>
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
    backgroundColor: '#4945FF',
  },
  labelText: {
    fontFamily: "Semibold"
  },
  inputFocused: {
    borderColor: '#4945FF',
  },
  button: {
    backgroundColor: '#4945FF',
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
  buttonNoBg: {
    backgroundColor: '#ccc',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonTextNo: {
    color: '#444',
    fontFamily: "Semibold"
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButton: {
    backgroundColor: '#4945FF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    paddingHorizontal: 50
  },
  modalButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default EnterCodeScreen;
