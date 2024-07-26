import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { FontAwesome, FontAwesome6, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { router } from 'expo-router';

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


const MoreScreen = () => {
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
        <View style={styles.headerContent}>
          <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name='arrow-back' size={24} style={{marginRight: 10}} />
          </TouchableOpacity>
          <Text style={styles.greeting}>Explore More Services on Jigipay</Text>
        </View>
      </View>
    <ScrollView>

        <StatusBar backgroundColor={'black'} />

      <View style={styles.featuresContainer}>
        <TouchableOpacity style={styles.featureItem1}>
          <View style={[styles.featureIcon, { backgroundColor: '#EFEFFF' }]}>
            <MaterialCommunityIcons name='cellphone-wireless' size={20} color='#6366F1' />
          </View>
          <View style={styles.rowFeatures}>
            <Text style={styles.featureText}>Deposit money to bank</Text>
            <Text style={styles.subText}>Send money to any bank account</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.featureItem2}>
          <View style={[styles.featureIcon, { backgroundColor: '#FEE2E2' }]}>
            <FontAwesome name='wifi' size={20} color='#F87171' />
          </View>
          <View style={styles.rowFeatures}>
            <Text style={styles.featureText}>Withdraw money</Text>
            <Text style={styles.subText}>Customer can withdraw money from their account</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.featureItem3}>
          <View style={[styles.featureIcon, { backgroundColor: '#FFEDD5' }]}>
            <MaterialIcons name='electric-bolt' size={20} color='#FBBF24' />
          </View>
          <View style={styles.rowFeatures}>
            <Text style={styles.featureText}>Pay bills</Text>
            <Text style={styles.subText}>Airtime, Electricity, Cable, Data and Internet</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.featureItem4}>
          <View style={[styles.featureIcon, { backgroundColor: '#D1FAE5' }]}>
            <FontAwesome6 name='user' size={20} color='#10B981' />
          </View> 
          <View style={styles.rowFeatures}>
            <Text style={styles.featureText}>Open business account</Text>
            <Text style={styles.subText}>Open a savings account.</Text>
          </View>
        </TouchableOpacity>
      </View>

      

      <View style={styles.upgradeContainer}>
        <View style={styles.upgradeContent}>
          <Ionicons name='card' size={35} color='#6366F1' />
          <View style={styles.upgradeTextContainer}>
            <Text style={styles.upgradeTextTitle}>Upgrade KYC Level to deposit and perform higher transactions</Text>
            <TouchableOpacity>
              <Text style={styles.upgradeButtonText}>Upgrade</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
    </View>
  );
};

export default MoreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
    marginTop: 30
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  greeting: {
    fontSize: 16,
    fontFamily: 'Semibold',
  },
  notificationIcon: {
    marginLeft: 'auto',
  },
  balanceContainer: {
    padding: 20,
    backgroundColor: '#F8F9FA',
  },
  balanceTitle: {
    fontSize: 14,
    color: '#666',
  },
  balanceAmount: {
    fontSize: 24,
    fontFamily: 'bold',
    marginVertical: 10,
  },
  fundButton: {
    backgroundColor: '#FFA500',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  fundButtonText: {
    color: '#FFFFFF',
    fontFamily: 'bold',
  },
  searchInput: {
    backgroundColor: '#F8F9FA',
    borderRadius: 10,
    padding: 10,
    margin: 20,
    color: '#000',
  },
  featuresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
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
    alignSelf: "flex-start"
  },
  featureText: {
    fontSize: 16,
    textAlign: 'left',
    fontFamily: "Semibold"
  },
  upgradeContainer: {
    padding: 15,
    backgroundColor: '#E0E7FF',
    borderRadius: 10,
    margin: 20,
    width: '92%',
    alignSelf: "center",
    marginTop: -12
  },
  upgradeContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  upgradeTextContainer: {
    marginLeft: 10,
  },
  upgradeTextTitle: {
    fontSize: 14,
    fontFamily: 'Medium',
    marginBottom: 5,
    width: '55%'
  },
  upgradeButtonText: {
    color: '#6366F1',
    fontFamily: 'Semibold',
    fontSize: 16
  },
  rowFeatures:{
  },
  subText:{
    color: "#555",
    fontFamily: 'Regular',
    fontSize: 13
  }
});
