import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const SendMoney = () => {
  const navigation = useNavigation();

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

      <TextInput placeholder="Amount" style={styles.input} keyboardType="numeric" />
      <TextInput placeholder="Notes *optional" style={styles.notesInput} multiline numberOfLines={4} />

      <TouchableOpacity style={styles.button}>
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
    fontWeight: '500',
    marginLeft: 20,
  },
  beneficiaryInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f8f8',
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
    fontWeight: '600',
  },
  beneficiaryDetails: {
    color: '#666',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    fontSize: 16,
    marginVertical: 10,
  },
  notesInput: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    fontSize: 16,
    marginVertical: 10,
    paddingVertical: 15,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#0057FF',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: '0%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
