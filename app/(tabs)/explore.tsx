import React, { useEffect, useMemo, useRef, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import BottomSheet from '@gorhom/bottom-sheet';

SplashScreen.preventAutoHideAsync(); // Prevent the splash screen from auto-hiding

const fetchFonts = () => {
  return Font.loadAsync({
    'Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
    'Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
    'Extrabold': require('../../assets/fonts/Poppins-ExtraBold.ttf'),
    'Black': require('../../assets/fonts/Poppins-Black.ttf'),
    'ExtraLight': require('../../assets/fonts/Poppins-ExtraLight.ttf'),
    'Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
    'Semibold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
    'Thin': require('../../assets/fonts/Poppins-Thin.ttf'),
    'Light': require('../../assets/fonts/Poppins-Light.ttf'),
    'Mano': require('../../assets/fonts/SpaceMono-Regular.ttf')
  });
};

 
const transactions = {
  sent: [
    { id: '1', name: 'Ralph Edwards', date: 'Feb 09', amount: '₦50,000.00', status: 'successful', image: require('../../assets/images/user1.png') },
    { id: '2', name: 'Jerome Bell', date: 'Feb 08', amount: '₦35,000.00', status: 'successful', image: require('../../assets/images/user2.png') },
    { id: '3', name: 'Dianne Russell', date: 'Feb 06', amount: '₦6,400.00', status: 'successful', image: require('../../assets/images/user3.png') },
    { id: '4', name: 'Marvin McKinney', date: 'Feb 06', amount: '₦6,000.00', status: 'successful', image: require('../../assets/images/user4.png') },
    { id: '5', name: 'Courtney Henry', date: 'Feb 04', amount: '₦64.00', status: 'successful', image: require('../../assets/images/user1.png') },
    { id: '6', name: 'Darlene Robertson', date: 'Feb 03', amount: '₦1,400.00', status: 'successful', image: require('../../assets/images/user2.png') },
    { id: '7', name: 'Bessie Cooper', date: 'Feb 03', amount: '₦500.00', status: 'successful', image: require('../../assets/images/user2.png') },
    { id: '8', name: 'Kristin Watson', date: 'Feb 01', amount: '₦32.00', status: 'successful', image: require('../../assets/images/user3.png') },
    { id: '9', name: 'Robert Fox', date: 'Feb 01', amount: '₦12.00', status: 'successful', image: require('../../assets/images/user1.png') },
  ],
  received: [
    { id: '1', name: 'John Doe', date: 'Feb 09', amount: '₦100.00', status: 'successful', image: require('../../assets/images/user1.png') },
    { id: '2', name: 'Jane Smith', date: 'Feb 08', amount: '₦20.00', status: 'successful', image: require('../../assets/images/user2.png') },
  ],
  request: [
    { id: '1', name: 'Alice Johnson', date: 'Feb 07', amount: '₦15.00', status: 'successful', image: require('../../assets/images/user4.png') },
    { id: '2', name: 'Bob Brown', date: 'Feb 06', amount: '₦25.00', status: 'successful', image: require('../../assets/images/user2.png') },
  ],
};

const explore = () => {
  const [selectedTab, setSelectedTab] = useState<'sent' | 'received' | 'request'>('sent');
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [showBottomSheet, setShowBottomSheet] = useState(false);
  const [selectedBank, setSelectedBank] = useState<{ name: string, logo: any } | null>(null);

  const banks = [
    { name: 'Bank Transfer', logo: require('../../assets/images/bank.png') },
    { name: 'USSD', logo: require('../../assets/images/ussd.jpeg') },
    // Add more banks as needed
  ];

  const snapPoints = useMemo(() => ['25%', '40%'], []);

  const handleBankSelect = (bank: { name: string, logo: any }) => {
    setSelectedBank(bank);
    bottomSheetRef.current?.close();
    setShowBottomSheet(false);
  };

  useEffect(() => {
    fetchFonts().then(() => {
      setFontsLoaded(true);
      SplashScreen.hideAsync(); // Hide the splash screen when fonts are loaded
    }).catch((error) => console.warn(error));
  }, []);

  if (!fontsLoaded) {
    return null; // Return null until fonts are loaded and splash screen is hidden
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>History</Text>
      </View>
      <View style={styles.tabContainer}>
        <TouchableOpacity style={[styles.tabItem, selectedTab === 'sent' && styles.selectedTab]} onPress={() => setSelectedTab('sent')}>
          <Text style={[styles.tabText, selectedTab === 'sent' && styles.selectedTabText]}>Sent</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tabItem, selectedTab === 'received' && styles.selectedTab]} onPress={() => setSelectedTab('received')}>
          <Text style={[styles.tabText, selectedTab === 'received' && styles.selectedTabText]}>Received</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tabItem, selectedTab === 'request' && styles.selectedTab]} onPress={() => setSelectedTab('request')}>
          <Text style={[styles.tabText, selectedTab === 'request' && styles.selectedTabText]}>Request</Text>
        </TouchableOpacity>
      </View>
      
      <FlatList
      showsVerticalScrollIndicator={false}
        data={transactions[selectedTab]}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.transactionItem}>
            <Image source={item.image} style={styles.icon} />
            <View style={styles.transactionDetails}>
              <Text style={styles.transactionName}>{item.name}</Text>
              <Text style={styles.transactionDate}>Sent • {item.date}</Text>
            </View>
            <View style={styles.status}>
            <Text style={styles.transactionAmount}>{item.amount}</Text>
            <Text style={styles.transactionStatus}>{item.status}</Text>
            </View>
          </View>
        )}
      />
      <View style={styles.card}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginTop: 50,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '700',
    marginLeft: 10,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#F5F5F5',
    paddingVertical: 10,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  tabText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#999',
  },
  selectedTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#635BFF',
  },
  selectedTabText: {
    color: '#635BFF',
    fontWeight: '700',
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  icon: {
    width: 30,
    height: 30,
  },
  transactionDetails: {
    flex: 1,
    marginLeft: 15,
  },
  transactionName: {
    fontSize: 16,
    fontFamily: 'Semibold'
  },
  transactionDate: {
    color: '#777',
    marginTop: 5,
    fontFamily: 'Medium',
    fontSize: 12
  },
  transactionAmount: {
    fontSize: 16,
    fontFamily: 'Semibold',
  },
  card:{
    marginBottom: 100
  },
  status:{
    flexDirection: "column",
    alignSelf: "flex-end",
    textAlign: "right",
    alignItems: "center"
  },
  transactionStatus:{
    textAlign: "right",
    fontSize: 12,
    color: "#13C782"
  }
});

export default explore;
