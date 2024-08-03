import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar } from 'react-native';
import { Ionicons, Zocial } from '@expo/vector-icons';
import { router } from 'expo-router';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync(); // Prevent the splash screen from auto-hiding

const fetchFonts = () => {
  return Font.loadAsync({
    'Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Extrabold': require('../assets/fonts/Poppins-ExtraBold.ttf'),
    'Black': require('../assets/fonts/Poppins-Black.ttf'),
    'ExtraLight': require('../assets/fonts/Poppins-ExtraLight.ttf'),
    'Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'Semibold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Thin': require('../assets/fonts/Poppins-Thin.ttf'),
    'Light': require('../assets/fonts/Poppins-Light.ttf'),
    'Mano': require('../assets/fonts/SpaceMono-Regular.ttf')
  });
};

const TransactionDetails = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

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
        <TouchableOpacity onPress={() => router.push('/(tabs)')}>
          <Ionicons name="arrow-back" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Transaction Details</Text>
      </View>

      <View style={styles.profileContainer}>
        <View style={styles.profileIcon}>
          <Image source={require('../assets/notification/success.png')} style={styles.success} />
        </View>
        <Text style={styles.transferTo}>Payment Successful</Text>
      </View>

      <View style={styles.transactionInfoNote}>
       <Zocial name='buffer' size={15} color={'#666'}/>
       <Text style={{color: '#4945FF', fontFamily: 'Semibold', fontSize: 12}}>Eating out</Text>
       <Ionicons name='caret-down' size={15} color={'#666'}/>
      </View>

      <View style={styles.transactionInfo}>
        <View style={styles.transactionInfo3}>
        <Text style={styles.transactionLabel}>Beneficiary</Text>
        <Text style={styles.transactionLabel}>Bank Name</Text>
        </View>
        <View style={styles.transactionInfo1}>
        <Text style={styles.transactionValue1}>Adeagbo Josiah</Text>
        <Text style={styles.transactionValue}>Palmpay</Text>
        </View>
      </View>

      <View style={styles.transactionInfo}>
        <View style={styles.transactionInfo2}>
            <Text style={styles.transactionLabel}>Account Number</Text>
            <Text style={styles.transactionLabel}>Description</Text>
        </View>

       <View style={styles.transactionInfo1}>
         <Text style={styles.transactionValue}>7054867271</Text>
        <Text style={styles.transactionValue}>Money for food stuff</Text>
       </View>
      </View>

      <View style={styles.transactionInfo}>
        <View style={styles.transactionInfo4}>
            <Text style={styles.transactionLabel}>Date</Text>
            <Text style={styles.transactionLabel}>Reference:</Text>
        </View>

       <View style={styles.transactionInfo1}>
         <Text style={styles.transactionValue}>July 23, 2024 06:49:37 PM</Text>
        <Text style={styles.transactionValue2}>20240723174937IHLEKQHB</Text>
       </View>
      </View>


      <View style={{flexDirection: "row", gap: 15}}>
      <View style={{
        paddingVertical: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#4945FF",
        marginBottom: 20,
        width: '45%',
        alignSelf: "center",
        paddingHorizontal: 20,
        borderRadius: 15,
        marginLeft: 5
      }}>
        <Text  style={{color: '#FFF', fontWeight: "500"}}>Share receipt</Text>
      </View>

      <View style={{
        paddingVertical: 17,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#F4FAFC",
        marginBottom: 20,
        width: '45%',
        alignSelf: "center",
        paddingHorizontal: 30,
        borderRadius: 15,
        gap: 10,
        borderWidth: 1,
        borderColor: '#4945FF'
      }}>
        <Text style={{color: '#4945FF', fontWeight: "700"}}>Download</Text>
        <Ionicons name='cloud-download' size={24} color={'#4945FF'} />
      </View>
      </View>
    </View>
  );
};

export default TransactionDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    gap: 50,
    marginTop: 20
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  profileContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 30,
    justifyContent: "center",
    backgroundColor: '#F4FAFC',
    paddingVertical: 15,
    borderRadius: 15,
    borderColor: "#eee",
    borderWidth: 1
  },
  profileIcon: {
    width: 80,
    height: 80,
    borderRadius: 100,
    backgroundColor: '#E8F7FD',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
    alignSelf: "center",
    marginBottom: 5,
    marginLeft: 10
  },
  profileInitial: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4945FF',
  },
  transferTo: {
    fontSize: 16,
    alignSelf: "center",
    color: '#333',
    fontFamily: 'Semibold'
  },
  transactionInfo: {
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#F4FAFC",
    marginBottom: 20,
    width: '95%',
    alignSelf: "center",
    paddingHorizontal: 30,
    borderRadius: 15,
    gap: 20,
    alignItems: "center"
  },
  transactionLabel: {
    fontSize: 13,
    color: '#666',
    alignSelf: "flex-start",
    marginLeft: -15,
    fontFamily: 'Medium',
    marginRight: 10

  },
  transactionValue: {
    fontSize: 13,
    alignSelf: "flex-end",
    marginBottom: 10,
    color: '#444',
    marginLeft: 5,
    fontFamily: 'Medium'
    
  },
  transactionValue2: {
    fontSize: 13,
    fontWeight: '700',
    alignSelf: "flex-end",
    marginBottom: 10,
    color: '#4945FF',
    marginLeft: -15
  },
  transactionValue3: {
    fontSize: 14,
    fontWeight: '700',
    alignSelf: "flex-end",
    marginBottom: 10,
    color: '#00B856',
    marginLeft: 15
  },
  transactionInfoNote: {
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "#E8F7FD",
    marginBottom: 20,
    width: '40%',
    alignSelf: "center",
    paddingHorizontal: 1,
    borderRadius: 100,
    alignItems: "center"
  },
  transactionValue1: {
    fontSize: 14,
    fontWeight: '500',
    alignSelf: "flex-end",
    marginBottom: 10,
    color: '#4945FF',
    
  },
  success:{
    width: 65,
    height: 65,
  },
  transactionInfo1:{
    marginLeft: 1,
    marginTop: 9,
    alignItems: "center"
  },
  transactionInfo3:{
    marginRight: 45
  },
  transactionInfo2:{
    marginRight: 5
  },
  transactionInfo4:{
    marginRight: 15
  },
});
