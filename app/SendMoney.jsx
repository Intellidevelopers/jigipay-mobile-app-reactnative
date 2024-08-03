import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';

const SendMoney = () => {
  const navigation = useNavigation();
  const [amountFocused, setAmountFocused] = useState(false);
  const [notesFocused, setNotesFocused] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Bank Transfer</Text>
      </View>

      <View style={styles.beneficiaryInfo}>
        <Image source={require('../assets/images/user1.png')} style={styles.beneficiaryImage} />
        <View>
          <Text style={styles.beneficiaryName}>MARY ADEAGBO</Text>
          <Text style={styles.beneficiaryDetails}>Paycom(OPay), 8109263500</Text>
        </View>
      </View>

      <TextInput
        placeholder="Amount"
        style={[styles.input, amountFocused && styles.inputFocused]}
        keyboardType="numeric"
        onFocus={() => setAmountFocused(true)}
        onBlur={() => setAmountFocused(false)}
      />
      <TextInput
        placeholder="Notes *optional"
        style={[styles.notesInput, notesFocused && styles.inputFocused]}
        multiline
        numberOfLines={4}
        onFocus={() => setNotesFocused(true)}
        onBlur={() => setNotesFocused(false)}
      />

      <TouchableOpacity style={styles.button} onPress={() => router.push('/Confirmation')}>
        <Text style={styles.buttonText}>Proceed</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SendMoney;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    gap: 55,
    marginTop: 40
  },
  headerText: {
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 20,
  },
  beneficiaryInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F4FAFC',
    borderRadius: 10,
    marginVertical: 20,
  },
  beneficiaryImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  beneficiaryName: {
    fontSize: 18,
    fontWeight: '700',
  },
  beneficiaryDetails: {
    color: '#666',
    fontWeight: "500"
  },
  input: {
    height: 50,
    borderColor: '#EEE',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    fontSize: 16,
    marginVertical: 10,
  },
  notesInput: {
    borderColor: '#EEE',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    fontSize: 16,
    marginVertical: 10,
    paddingVertical: 15,
    textAlignVertical: 'top',
  },
  inputFocused: {
    borderColor: '#635BFF',
  },
  button: {
    backgroundColor: '#635BFF',
    paddingVertical: 16,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: '70%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
