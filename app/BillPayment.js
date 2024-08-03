import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated, Easing, Dimensions } from 'react-native';
import { FontAwesome, FontAwesome5, Feather, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const BillPayment = () => {
  const [showBottomCard, setShowBottomCard] = useState(false);
  const bottomCardHeight = useRef(new Animated.Value(0)).current;
  const router = useRouter();

  const banks = [
    { name: 'Cheap Data', description: 'up to 60% discount', route: '/CheapData' },
    { name: 'Regular Data', description: '', route: '/RegularData' },
    // Add more options as needed
  ];

  const handleBankSelect = (route) => {
    Animated.timing(bottomCardHeight, {
      toValue: 0,
      duration: 300,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => {
      setShowBottomCard(false);
      router.push(route); // Navigate to the selected route
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
    <View style={styles.container}>
      <View style={styles.featuresContainer}>
        <TouchableOpacity style={styles.featureItem1} onPress={() => router.push('/Airtime')}>
          <View style={[styles.featureIcon, { backgroundColor: '#EFEFFF' }]}>
            <MaterialCommunityIcons name='cellphone-wireless' size={20} color='#4945FF' />
          </View>
          <View style={styles.rowFeatures}>
            <Text style={styles.featureText}>Buy Airtime</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.featureItem2} onPress={toggleBottomCard}>
          <View style={[styles.featureIcon, { backgroundColor: '#FEE2E2' }]}>
            <FontAwesome name='wifi' size={20} color='#F87171' />
          </View>
          <View style={styles.rowFeatures}>
            <Text style={styles.featureText}>Buy Data</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.featureItem3} onPress={() => router.push('/Electricity')}>
          <View style={[styles.featureIcon, { backgroundColor: '#FFEDD5' }]}>
            <MaterialIcons name='electric-bolt' size={20} color='#FBBF24' />
          </View>
          <View style={styles.rowFeatures}>
            <Text style={styles.featureText}>Electricity</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.featureItem4} onPress={() => router.push('/Cable')}>
          <View style={[styles.featureIcon, { backgroundColor: '#D1FAE5' }]}>
            <Feather name='tv' size={20} color='#10B981' />
          </View>
          <View style={styles.rowFeatures}>
            <Text style={styles.featureText}>Cable/TV</Text>
          </View>
        </TouchableOpacity>
      </View>

      {showBottomCard && (
        <Animated.View style={[styles.bottomCard, { height: bottomCardHeight }]}>
          <View style={styles.bottomCardHeader}>
            <Text style={styles.bottomCardTitle}>Data Subscription</Text>
          </View>
          {banks.map((bank) => (
            <TouchableOpacity key={bank.name} style={styles.bankItem} onPress={() => handleBankSelect(bank.route)}>
              <Text style={styles.bankName}>{bank.name}</Text>
              {bank.description ? <Text style={styles.bankDescription}>{bank.description}</Text> : null}
            </TouchableOpacity>
          ))}
        </Animated.View>
      )}
    </View>
  );
};

export default BillPayment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  featuresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 20
  },
  featureItem1: {
    width: '48%',
    backgroundColor: '#F5F5FF',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  featureItem2: {
    width: '48%',
    backgroundColor: '#FFF4F4',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  featureItem3: {
    width: '48%',
    backgroundColor: '#FFF8EF',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  featureItem4: {
    width: '48%',
    backgroundColor: '#EEFFF6',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  featureIcon: {
    padding: 10,
    borderRadius: 50,
    marginBottom: 10,
    alignSelf: "center"
  },
  featureText: {
    fontSize: 16,
    textAlign: 'left',
    fontFamily: "Semibold"
  },
  rowFeatures: {},
  bottomCard: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  bankName: {
    fontSize: 16,
    fontFamily: "Regular"
  },
  bankDescription: {
    fontSize: 10,
    color: '#fff',
    fontFamily: "Regular",
    backgroundColor: "#635BFF",
    padding: 4,
    borderRadius: 15
  },
});
