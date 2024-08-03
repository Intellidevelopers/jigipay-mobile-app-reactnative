import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal, FlatList, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';

const Withdraw = () => {
  const [amount, setAmount] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [bank, setBank] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigation = useNavigation();

  const banks = [
    '9 Payment Solutions Bank',
    'Access Bank',
    'Accion Microfinance Bank',
    'AKU MFB',
    'Amergy MFB',
    'Assetmatrix Microfinance Bank',
    'Keystone Bank',
    'Ecobank',
    'Starling Bank',
    'Moniepoint',
    'Fairmoney',
    'UBA Bank',
    'Union Bank',
    'Unity Bank',
    'Providus Bank',
    'GTBank',
    'Amucha Microfinance',
    'Palmpay',
    'Kuda',
    'Paga',
    'Firstbank',
    'Zenith',
    'Polaris Bank',
    'Wema Bank',
    // Add more banks as needed
  ];

  const handleBankSelect = (selectedBank) => {
    setBank(selectedBank);
    setIsModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recently Used</Text>
      <View style={styles.recentlyUsedContainer}>
        <TouchableOpacity style={styles.recentlyUsedButton}>
          <Text>Josiah</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.recentlyUsedButton}>
          <Text>Adeagbo Josiah</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.recentlyUsedButton}>
          <Text>See All</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Select Bank</Text>
      <TouchableOpacity
        style={styles.input}
        onPress={() => setIsModalVisible(true)}
      >
        <Text style={{ color: bank ? '#000' : '#999' }}>
          {bank || 'Select your bank'}
        </Text>
      </TouchableOpacity>

      <Text style={styles.label}>Account Number</Text>
      <TextInput
        placeholder="Enter beneficiary account no"
        style={styles.input}
      />

      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Text style={styles.label}>Amount</Text>
        <Text style={styles.balance}>Balance: ₦19,920.00</Text>
      </View>

      <TextInput
        placeholder="Enter amount"
        style={styles.input}
        keyboardType="numeric"
      />
      <TouchableOpacity
        style={styles.proceedButton}
        onPress={() => router.push('/Confirmation')}
      >
        <Text style={styles.proceedText}>Proceed</Text>
      </TouchableOpacity>

      {/* Modal for bank selection */}
      <Modal
        transparent={true}
        visible={isModalVisible}
        animationType="slide"
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Bank</Text>
            <TextInput
              placeholder="Search"
              style={styles.searchInput}
              // Add search functionality if needed
            />
            <FlatList
              data={banks}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.bankItem}
                  onPress={() => handleBankSelect(item)}
                >
                  <Text>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  recentlyUsedContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    marginBottom: 40,
  },
  recentlyUsedButton: {
    marginRight: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  input: {
    borderWidth: 2,
    borderColor: '#ddd',
    padding: 14,
    marginVertical: 5,
    borderRadius: 5,
    marginBottom: 20,
    fontFamily: 'Regular',
  },
  balance: {
    marginVertical: 10,
    fontFamily: 'Bold',
  },
  label: {
    fontFamily: 'Medium',
  },
  proceedButton: {
    backgroundColor: '#635bff',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 120,
  },
  proceedText: {
    color: '#fff',
    fontFamily: 'Regular',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: height * 0.5, // 50% of screen height
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  bankItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

export default Withdraw;
