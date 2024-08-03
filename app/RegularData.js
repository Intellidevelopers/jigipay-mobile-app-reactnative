import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image, Dimensions, Animated, Easing } from 'react-native';
import { useRouter } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the icon library
import { MaterialIcons } from '@expo/vector-icons';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const RegularData = () => {
  const [selectedNetwork, setSelectedNetwork] = useState(null);
  const [selectedAmount, setSelectedAmount] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showBottomCard, setShowBottomCard] = useState(false);
  const bottomCardHeight = useRef(new Animated.Value(0)).current;
  const router = useRouter();

  const networks = [
    { id: 'mtn', name: 'MTN', icon: require('../assets/networks/mtn.png') },
    { id: 'airtel', name: 'AIRTEL', icon: require('../assets/networks/airtel.png') },
    { id: '9mobile', name: '9MOBILE', icon: require('../assets/networks/etisalat.png') },
    { id: 'glo', name: 'GLO', icon: require('../assets/networks/glo.png') },
  ];

  const handleNetworkSelect = (networkId) => {
    setSelectedNetwork(networkId);
  };

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
  };

  const banks = [
    { name: '500MB SME - 30 Days ₦160' },
    { name: '1GB SME - 30 Days ₦290' },
    { name: '2GB SME - 30 Days ₦580' },
    { name: '3GB SME - 30 Days ₦870' },
    { name: '5GB SME - 30 Days ₦1450' },
    { name: '10GB SME - 30 Days ₦2900' },
  ];

  const handleBankSelect = (amount) => {
    setSelectedAmount(amount); // Set the selected amount
    Animated.timing(bottomCardHeight, {
      toValue: 0,
      duration: 300,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => {
      setShowBottomCard(false);
    });
  };

  const toggleBottomCard = () => {
    if (showBottomCard) {
      Animated.timing(bottomCardHeight, {
        toValue: 0,
        duration: 300,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start(() => setShowBottomCard(false));
    } else {
      setShowBottomCard(true);
      Animated.timing(bottomCardHeight, {
        toValue: SCREEN_HEIGHT / 2,
        duration: 300,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.networksContainer}>
        {networks.map((network) => (
          <TouchableOpacity
            key={network.id}
            style={[
              styles.networkButton,
              selectedNetwork === network.id && { borderColor: '#4945FF' },
            ]}
            onPress={() => handleNetworkSelect(network.id)}
          >
            <Image source={network.icon} style={styles.networkIcon} />
            <Text style={styles.networkName}>{network.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity onPress={toggleBottomCard} style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Choose Data Plan"
          value={selectedAmount}
          editable={false}
        />
        <MaterialIcons name="keyboard-arrow-down" size={26} color="#555" style={styles.caretIcon} />
      </TouchableOpacity>
      <View style={styles.phoneInputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
        <Icon name="phone" size={26} color="#4945FF" style={styles.phoneIcon} />
      </View>
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

      {showBottomCard && (
        <Animated.View style={[styles.bottomCard, { height: bottomCardHeight }]}>
          <ScrollView>
            <View style={styles.bottomCardHeader}>
              <Text style={styles.bottomCardTitle}>Data Plans</Text>
            </View>
            {banks.map((bank) => (
              <TouchableOpacity
                key={bank.name}
                style={styles.bankItem}
                onPress={() => handleBankSelect(bank.name)} // Pass the amount to handleBankSelect
              >
                <Text style={styles.bankName}>{bank.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </Animated.View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flexGrow: 1,
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
    flexDirection: 'row',
  },
  networkIcon: {
    width: 24,
    height: 24,
    marginBottom: 5,
    marginRight: 20,
    marginLeft: 5,
  },
  inputWrapper: {
    position: 'relative',
    marginBottom: 20,
    
  },
  phoneInputWrapper: {
    position: 'relative',
    marginBottom: 20,
  },
  input: {
    height: 55,
    borderColor: '#ddd',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 10,
    fontFamily: 'Semibold',
    color: '#555',
    paddingRight: 40, // Add padding to make space for the icon
  },
  caretIcon: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -10 }],
  },
  phoneIcon: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -10 }],
  },
  fromContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#D1E3FF',
    height: 50,
    padding: 10,
    borderRadius: 10,
  },
  fromText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  fromAccount: {
    fontSize: 13,
    fontFamily: 'Regular',
  },
  payButton: {
    backgroundColor: '#4945FF',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 200,
  },
  payButtonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Regular',
  },
  networkName: {
    fontFamily: 'Medium',
  },
  amount: {
    textAlign: 'right',
    fontFamily: 'Semibold',
  },
  bottomCard: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
  },
  bottomCardHeader: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  bottomCardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  bankItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  bankName: {
    fontSize: 16,
    fontFamily: "Regular"
  },
  bankDescription: {
    fontSize: 14,
    color: '#666',
  },
});

export default RegularData;
