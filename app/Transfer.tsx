import 'react-native-gesture-handler';
import React, { useMemo, useRef, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';
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

type Bank = {
  name: string;
  logo: any;
};

const Transfer: React.FC = () => {
  const [selectedBank, setSelectedBank] = useState<Bank | null>(null);
  const [saveBeneficiary, setSaveBeneficiary] = useState(false);
  const [showBottomSheet, setShowBottomSheet] = useState(false);
  const bottomSheetRef = useRef<BottomSheet>(null);

  const banks: Bank[] = [
    { name: 'Access Bank', logo: require('../assets/banks/access.png') },
    { name: 'Alat VFD', logo: require('../assets/banks/alat.png') },
    { name: 'Citibank', logo: require('../assets/banks/citi.png') },
    { name: 'Fcmb', logo: require('../assets/banks/fcmb.png') },
    { name: 'Fidelity Bank', logo: require('../assets/banks/fidelity.png') },
    { name: 'Firstbank', logo: require('../assets/banks/firstbank.png') },
    { name: 'GTBank', logo: require('../assets/banks/gtb.png') },
    { name: 'Heritage Bank', logo: require('../assets/banks/heritage.png') },
    { name: 'Jaiz Bank', logo: require('../assets/banks/jaiz.png') },
    { name: 'Keystone Bank', logo: require('../assets/banks/keystone.png') },
    { name: 'Kuda', logo: require('../assets/banks/kuda.png') },
    { name: 'Parallax', logo: require('../assets/banks/parallax.png') },
    { name: 'Polaris', logo: require('../assets/banks/polaris.png') },
    { name: 'Providus', logo: require('../assets/banks/providus.png') },
    { name: 'Standard Chartered Bank', logo: require('../assets/banks/standard.png') },
    { name: 'Sterling Bank', logo: require('../assets/banks/sterling.png') },
    { name: 'Taj Bank', logo: require('../assets/banks/tajbank.png') },
    { name: 'Union Bank', logo: require('../assets/banks/union.png') },
    { name: 'Unity Bank', logo: require('../assets/banks/unity.png') },
    { name: 'vby FD', logo: require('../assets/banks/vbyfd.png') },
    { name: 'Wema Bank', logo: require('../assets/banks/wema.png') },
    { name: 'Zenith Bank', logo: require('../assets/banks/zenith.png') },
  ];

  const handleBankSelect = (bank: Bank) => {
    setSelectedBank(bank);
    bottomSheetRef.current?.close();
    setShowBottomSheet(false);
  };

  const toggleSwitch = () => {
    setSaveBeneficiary((prev) => !prev);
  };

  const snapPoints = useMemo(() => ['25%', '50%', '75%'], []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.push('./(tabs)')}>
            <Ionicons name="arrow-back" size={30} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Bank Transfer</Text>
        </View>

        <TouchableOpacity onPress={() => router.push('/Beneficiaries')}>
          <View style={styles.beneficiary}>
            <View style={styles.rowItems}>
              <View style={styles.iconContainer}>
                <Ionicons name="person-circle" size={50} color="#635BFF" />
              </View>
              <View>
                <Text style={styles.headText}>Beneficiaries</Text>
                <Text style={styles.subText}>Transfer to already saved account</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <Text style={styles.divider}>OR</Text>

        <View style={styles.dropdownContainer}>
          <TouchableOpacity style={styles.dropdownHeader} onPress={() => setShowBottomSheet(true)}>
            <Text style={styles.dropdownHeaderText}>{selectedBank ? selectedBank.name : 'Select Bank'}</Text>
            <MaterialIcons name="keyboard-arrow-down" size={24} color="#555" />
          </TouchableOpacity>
        </View>

        <View style={styles.passwordContainer}>
          <TextInput
            keyboardType="phone-pad"
            placeholder="Account Number"
            style={styles.phoneInput}
          />
        </View>

        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Save this beneficiary</Text>
          <TouchableOpacity style={[styles.switch, saveBeneficiary && styles.switchActive]} onPress={toggleSwitch}>
            <View style={[styles.switchButton, saveBeneficiary && styles.switchButtonActive]} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => router.push('/PasscodeScreen')}>
          <Text style={styles.buttonText}>Proceed</Text>
        </TouchableOpacity>

        {showBottomSheet && (
          <BottomSheet
            ref={bottomSheetRef}
            snapPoints={snapPoints}
            enablePanDownToClose
            onClose={() => setShowBottomSheet(false)}
            backgroundStyle={styles.bottomSheetBackground}
          >
            <BottomSheetFlatList
              data={banks}
              keyExtractor={(item) => item.name}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.bankItem} onPress={() => handleBankSelect(item)}>
                  <Image source={item.logo} style={styles.bankLogo} />
                  <Text style={styles.bankName}>{item.name}</Text>
                </TouchableOpacity>
              )}
              contentContainerStyle={styles.flatListContentContainer}
            />
          </BottomSheet>
        )}
      </View>
    </GestureHandlerRootView>
  );
};

export default Transfer;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 50,
    alignSelf: "flex-start",
    gap: 80,
    marginLeft: 15,
  },
  headerText: {
    fontSize: 18,
    fontFamily: "Semibold",
  },
  rowItems: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  beneficiary: {
    marginTop: 50,
    borderWidth: 1,
    padding: 20,
    borderRadius: 10,
    borderColor: '#ddd',
    alignItems: 'center',
    width: '90%',
    backgroundColor: "#f7f7f7",
  },
  iconContainer: {
    backgroundColor: '#ddd',
    borderRadius: 100,
    padding: 8,
    marginRight: 10,
  },
  headText: {
    fontSize: 16,
    fontFamily: 'Semibold',
    color: "#333",
  },
  subText: {
    color: '#333',
    fontFamily: 'Medium',
    fontSize: 12,
  },
  divider: {
    marginTop: 40,
    color: '#666',
  },
  dropdownContainer: {
    width: '90%',
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 7,
    overflow: 'hidden',
    padding: 3,
    marginBottom: 20,
  },
  dropdownHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 14,
    backgroundColor: '#fff',
  },
  dropdownHeaderText: {
    fontSize: 14,
    fontFamily: 'Medium',
    color: '#666',
  },
  bankItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginBottom: 10,
  },
  bankLogo: {
    width: 30,
    height: 30,
    marginRight: 10,
    borderRadius: 100,
  },
  bankName: {
    fontSize: 16,
    color: '#333',
    fontFamily: 'Medium',
  },
  passwordContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 3,
    borderRadius: 5,
    width: '90%',
  },
  phoneInput: {
    fontSize: 16,
    color: '#666',
    backgroundColor: "#fff",
    padding: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    width: '90%',
    justifyContent: "space-between",
  },
  switchLabel: {
    fontSize: 15,
    marginRight: 10,
    color: "#444",
    fontFamily: "Medium",
  },
  switch: {
    width: 50,
    height: 30,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    padding: 2,
    backgroundColor: '#ccc',
  },
  switchActive: {
    backgroundColor: '#635BFF',
  },
  switchButton: {
    width: 22,
    height: 22,
    borderRadius: 12,
    backgroundColor: '#fff',
  },
  switchButtonActive: {
    backgroundColor: '#fff',
    transform: [{ translateX: 20 }],
  },
  button: {
    backgroundColor: "#635BFF",
    padding: 15,
    width: '90%',
    marginTop: 150,
    alignItems: "center",
    borderRadius: 7,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Medium",
  },
  bottomSheetBackground: {
    backgroundColor: '#f8f8f8', // Change this to your desired color
  },
  flatListContentContainer: {
    paddingBottom: 20,
  },
});
