import 'react-native-gesture-handler';
import React, { useMemo, useRef, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput, FlatList } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import BottomSheet from '@gorhom/bottom-sheet';

const Transfer = () => {
  const [selectedBank, setSelectedBank] = useState<{ name: string; logo: any } | null>(null);
  const [saveBeneficiary, setSaveBeneficiary] = useState(false);
  const [showBottomSheet, setShowBottomSheet] = useState(false);
  const bottomSheetRef = useRef<BottomSheet>(null);

  const banks = [
    { name: 'Firstbank', logo: require('../assets/images/user1.png') },
    { name: 'GTBank', logo: require('../assets/images/user1.png') },
    // Add more banks as needed
  ];

  const handleBankSelect = (bank: { name: string; logo: any }) => {
    setSelectedBank(bank);
    bottomSheetRef.current?.close();
    setShowBottomSheet(false);
  };

  const toggleSwitch = () => {
    setSaveBeneficiary((prev) => !prev);
  };

  const snapPoints = useMemo(() => ['25%', '50%'], []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.push('./(tabs)')}>
            <Ionicons name='arrow-back' size={30} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Bank Transfer</Text>
        </View>

        <TouchableOpacity onPress={() => router.push('/Beneficiaries')}>
          <View style={styles.beneficiary}>
            <View style={styles.rowItems}>
              <View style={styles.iconContainer}>
                <Ionicons name='person-circle' size={50} color='#635BFF'/>
              </View>
              <View style={styles.textContainer}>
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
            <MaterialIcons name='keyboard-arrow-down' size={24} color='#555' />
          </TouchableOpacity>
        </View>

        <View style={styles.passwordContainer}>
          <TextInput
            keyboardType="default"
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

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Proceed</Text>
        </TouchableOpacity>

        {showBottomSheet && (
          <BottomSheet
            ref={bottomSheetRef}
            snapPoints={snapPoints}
            enablePanDownToClose
            onClose={() => setShowBottomSheet(false)}
            backgroundStyle={styles.bottomSheetBackground} // Apply the background color
          >
            <FlatList
              data={banks}
              keyExtractor={(item) => item.name}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.bankItem} onPress={() => handleBankSelect(item)}>
                  <Image source={item.logo} style={styles.bankLogo} />
                  <Text style={styles.bankName}>{item.name}</Text>
                </TouchableOpacity>
              )}
            />
          </BottomSheet>
        )}
      </View>
    </GestureHandlerRootView>
  );
}

export default Transfer;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: "#fff"
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 50,
    alignSelf: "flex-start",
    gap: 80,
    marginLeft: 15
  },
  headerText: {
    fontSize: 18,
    fontWeight: "500"
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
    backgroundColor: "#f8f8f8"
  },
  iconContainer: {
    backgroundColor: '#ddd',
    borderRadius: 100,
    padding: 8,
    marginRight: 10,
  },
  headText: {
    fontSize: 17,
    fontWeight: '700',
  },
  textContainer: {},
  subText: {
    color: '#666',
    fontWeight: '500',
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
    fontWeight: '500',
    color: '#666',
  },
  bankItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  bankLogo: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  bankName: {
    fontSize: 16,
    color: '#333',
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
    padding: 10
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    width: '90%',
    justifyContent: "space-between"
  },
  switchLabel: {
    fontSize: 16,
    marginRight: 10,
    color: "#444",
    fontWeight: "600"
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
    marginTop: 200,
    alignItems: "center",
    borderRadius: 7
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "400"
  },
  bottomSheetBackground: {
    backgroundColor: '#f8f8f8' // Change this to your desired color
  }
});
