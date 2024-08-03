import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { router } from 'expo-router';

const Airtime = () => {
  const [selectedNetwork, setSelectedNetwork] = useState(null);
  const [selectedAmount, setSelectedAmount] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const networks = [
    { id: 'mtn', name: 'MTN', icon: require('../assets/networks/mtn.png') }, // Replace with actual image paths
    { id: 'airtel', name: 'AIRTEL', icon: require('../assets/networks/airtel.png') }, // Replace with actual image paths
    { id: '9mobile', name: '9MOBILE', icon: require('../assets/networks/etisalat.png') }, // Replace with actual image paths
    { id: 'glo', name: 'GLO', icon: require('../assets/networks/glo.png') }, // Replace with actual image paths
  ];

  const amounts = ['₦50.00', '₦100.00', '₦200.00', '₦500.00', '₦1,000.00', '₦2,000.00'];

  const handleNetworkSelect = (networkId) => {
    setSelectedNetwork(networkId);
  };

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.networksContainer}>
        {networks.map((network, index) => (
          <TouchableOpacity
            key={network.id}
            style={[
              styles.networkButton,
              selectedNetwork === network.id && { borderColor: '#4945FF' },
            ]}
            onPress={() => handleNetworkSelect(network.id)}
          >
            <Image source={network.icon} style={styles.networkIcon} />
            <Text style={styles.networName}>{network.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.chooseAmountText}>Choose Amount</Text>
      <View style={styles.amountsContainer}>
        {amounts.map((amount) => (
          <TouchableOpacity
            key={amount}
            style={[
              styles.amountButton,
              selectedAmount === amount && styles.amountButtonSelected,
            ]}
            onPress={() => handleAmountSelect(amount)}
          >
            <Text style={styles.amountText}>{amount}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Choose Amount"
        value={selectedAmount}
        onChangeText={setSelectedAmount}
        editable={true}
        keyboardType="phone-pad"
      />
      <View style={styles.fromContainer}>
        <Text style={styles.fromText}>From</Text>
        <View style={styles.fromAccountFlex}>
        <Text style={styles.fromAccount}>Personal Account</Text>
        <Text style={styles.amount}>₦0.00</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.payButton} onPress={() => router.push('/PasscodeScreen')}>
        <Text style={styles.payButtonText}>Pay</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  networksContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  networkButton: {
    width: '48%',
    alignItems: 'center',
    padding: 10,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#ddd',
    marginBottom: 10,
    flexDirection: "row"
  },
  networkIcon: {
    width: 24,
    height: 24,
    marginBottom: 5,
    marginRight: 20,
    marginLeft: 5
  },
  chooseAmountText: {
    fontSize: 16,
    fontFamily: 'Semibold',
    marginBottom: 10,
  },
  amountsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  amountButton: {
    width: '30%',
    padding: 11,
    borderRadius: 10,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    marginBottom: 10,
  },
  amountButtonSelected: {
    backgroundColor: '#D1E3FF',
  },
  amountText: {
    fontSize: 16,
  },
  input: {
    height: 55,
    borderColor: '#ddd',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontFamily: "Semibold",
    color: "#555"
  },
  fromContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: "#D1E3FF",
    height: 50,
    padding: 10,
    borderRadius: 10
  },
  fromText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  fromAccount: {
    fontSize: 13,
    fontFamily: "Regular"
  },
  payButton: {
    backgroundColor: '#4945FF',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30
  },
  payButtonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Medium',
  },
  networName:{
    fontFamily: "Medium"
  },
  amount:{
    textAlign: "right",
    fontFamily: "Semibold"
  }
});

export default Airtime;
