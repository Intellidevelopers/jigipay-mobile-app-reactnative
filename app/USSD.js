import 'react-native-gesture-handler';
import React, { useMemo, useRef, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';



const USSD = () => {

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.push('./(tabs)')}>
            <Ionicons name="arrow-back" size={30} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Fund with USSD</Text>
        </View>

        <Text style={styles.headerText2}>Enter the amount you want to add to your Jigipay account and tap the USSD code below to dial it.</Text>

        <View style={styles.passwordContainer}>
          <TextInput
            keyboardType="phone-pad"
            placeholder="Enter Amount"
            style={styles.phoneInput}
          />
        </View>

        <View style={styles.beneficiary1}>
            <View style={styles.rowItems}>
              <View>
                <Text style={styles.subText}>Personal Acct</Text>
                <Text style={styles.headText}>96068319434</Text>
              </View>
            </View>
        </View>

        <View style={styles.beneficiary}>
            <View style={styles.rowItems}>
              <View style={styles.iconContainer}>
                <Image source={require('../assets/banks/gtb.png')} style={styles.bankLogo}/>
              </View>
              <View>
                <Text style={styles.headText}>GTBank</Text>
                <Text style={styles.subText}>*737*2*0*96068319434#</Text>
              </View>
            </View>
        </View>

        <View style={styles.beneficiary}>
            <View style={styles.rowItems}>
              <View style={styles.iconContainer}>
                <Image source={require('../assets/banks/alat.png')} style={styles.bankLogo}/>
              </View>
              <View>
                <Text style={styles.headText}>Alat</Text>
                <Text style={styles.subText}>*737*2*0*96068319434#</Text>
              </View>
            </View>
        </View>

        <View style={styles.beneficiary}>
            <View style={styles.rowItems}>
              <View style={styles.iconContainer}>
                <Image source={require('../assets/banks/access.png')} style={styles.bankLogo}/>
              </View>
              <View>
                <Text style={styles.headText}>Access bank</Text>
                <Text style={styles.subText}>*737*2*0*96068319434#</Text>
              </View>
            </View>
        </View>

       
        

      </View>
    </GestureHandlerRootView>
  );
};

export default USSD;

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
    gap: 62,
    marginLeft: 15,
    marginBottom: 30
  },
  headerText: {
    fontSize: 18,
    fontFamily: "Semibold",
    textAlign: "center"
  },
  rowItems: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  beneficiary: {
    marginTop: 50,
    borderWidth: 1,
    padding: 15,
    borderRadius: 10,
    borderColor: '#ddd',
    alignItems: 'left',
    width: '90%',
    backgroundColor: "#f7f7f7",
    paddingHorizontal: 20,
    marginBottom: -28
  },
  beneficiary1: {
    marginTop: 50,
    padding: 15,
    borderRadius: 10,
    alignItems: 'left',
    width: '90%',
    backgroundColor: "#f1fafc",
    paddingHorizontal: 20,
    marginBottom: -28
  },
  iconContainer: {
    borderRadius: 100,
    padding: 2,
    marginRight: 5,
    alignItems: "center",
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
    borderWidth: 2,
    borderColor: '#eee',
    padding: 3,
    borderRadius: 8,
    width: '90%',
  },
  phoneInput: {
    fontSize: 16,
    color: '#333',
    backgroundColor: "#fff",
    padding: 10,
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
  headerText2:{
    marginBottom: 20,
    width: '90%',
    fontFamily: "Regular",
    color: "#333"
  }
});
