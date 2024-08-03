import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image, Dimensions, Animated, Easing } from 'react-native';
import { useRouter } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the icon library
import { MaterialIcons } from '@expo/vector-icons';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const Cable = () => {
  const [selectedNetwork, setSelectedNetwork] = useState(null);
  const [selectedAmount, setSelectedAmount] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showBottomCard, setShowBottomCard] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const bottomCardHeight = useRef(new Animated.Value(0)).current;
  const router = useRouter();

  const networks = [
    { id: 'DSTV', name: 'DSTV', icon: require('../assets/cable/dstv.png') },
    { id: 'GOTV', name: 'GOTV', icon: require('../assets/cable/gotv.png') },
    { id: 'SHOWMAX', name: 'SHOWMAX', icon: require('../assets/cable/showmax.png') },
    { id: 'STARTIMES', name: 'STARTIMES', icon: require('../assets/cable/startimes.png') },
  ];

  const plans = {
    DSTV: [
      { name: 'DStv Padi ₦2,950' },
      { name: 'DStv Yanga ₦4,200' },
      { name: 'DStv Confam ₦7,400' },
      { name: 'DStv Compact ₦12,500' },
      { name: 'DStv Premium ₦29,500' },
      { name: 'DStv Asia ₦9,900' },
      { name: 'DStv Compact Plus ₦19,800' },
      { name: 'DStv Premium-French ₦45,600' },
    ],
    GOTV: [
      { name: 'GOtv Smallie - Monthly ₦800' },
      { name: 'GOtv Smallie - Quarterly ₦2,100' },
      { name: 'GOtv Smallie - Yearly ₦6,200' },
      { name: 'GOtv Jinja ₦1,900' },
      { name: 'GOtv Jolli ₦2,460' },
      { name: 'GOtv Max ₦3,280' },
    ],
    SHOWMAX: [
      { name: 'Showmax Pro Mobile ₦3,200' },
      { name: 'Showmax Pro ₦6,300' },
      { name: 'Showmax Mobile ₦1,200' },
      { name: 'Showmax ₦2,900' },
    ],
    STARTIMES: [
      { name: 'StarTimes Nova ₦900' },
      { name: 'StarTimes Basic ₦1,300' },
      { name: 'StarTimes Smart ₦1,900' },
      { name: 'StarTimes Classic ₦2,600' },
      { name: 'StarTimes Super ₦4,800' },
    ],
  };

  const handleNetworkSelect = (networkId) => {
    setSelectedNetwork(networkId);
    setSearchQuery('');
  };

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
  };

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

  const filteredPlans = selectedNetwork
    ? plans[selectedNetwork].filter((plan) =>
        plan.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

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
          placeholder="Select TV Subscription"
          value={selectedAmount}
          editable={false}
        />
        <MaterialIcons name="keyboard-arrow-down" size={26} color="#555" style={styles.caretIcon} />
      </TouchableOpacity>
      <View style={styles.phoneInputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Smart Card / IUC Number"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </View>
      
      <TouchableOpacity style={styles.payButton} onPress={() => router.push('/PasscodeScreen')}>
        <Text style={styles.payButtonText}>Pay</Text>
      </TouchableOpacity>

      {showBottomCard && (
        <Animated.View style={[styles.bottomCard, { height: bottomCardHeight }]}>
          <ScrollView>
            <View style={styles.bottomCardHeader}>
              <Text style={styles.bottomCardTitle}>Television Plans</Text>
              <TextInput
                style={styles.searchInput}
                placeholder="Search Cable Television"
                value={searchQuery}
                onChangeText={setSearchQuery}
              />
            </View>
            {filteredPlans.map((plan) => (
              <TouchableOpacity
                key={plan.name}
                style={styles.bankItem}
                onPress={() => handleBankSelect(plan.name)} // Pass the amount to handleBankSelect
              >
                <Text style={styles.bankName}>{plan.name}</Text>
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
    marginTop: 290,
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
  searchInput: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 10,
    backgroundColor: "#f1f1f1"
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

export default Cable;
