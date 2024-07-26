import { Link, router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, FlatList, Pressable } from 'react-native';

interface Country {
  label: string;
  value: string;
  flag: string;
}

const countries: Country[] = [
  { label: 'Nigeria', value: 'Nigeria', flag: '🇳🇬' },
  { label: 'Bangladesh', value: 'Bangladesh', flag: '🇧🇩' },
  { label: 'United States', value: 'United States', flag: '🇺🇸' },
  { label: 'Singapore', value: 'Singapore', flag: '🇸🇬' },
  { label: 'India', value: 'India', flag: '🇮🇳' },
  { label: 'Ghana', value: 'Ghana', flag: '🇬🇭' },
];

const CountryResident: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const selectCountry = (country: Country) => {
    setSelectedCountry(country);
    setModalVisible(false);
  }; 

  return (
    <View style={styles.container}>
      <View style={styles.progressBar} />
      <Text style={styles.label}>Country of residence</Text>
      <Text style={styles.subLabel}>This info needs to be accurate with your ID document.</Text>
      
      <TouchableOpacity style={styles.pickerContainer} onPress={() => setModalVisible(true)}>
        <View style={styles.selectedCountry}>
          <Text style={styles.flag}>{selectedCountry.flag}</Text>
          <Text style={styles.input}>{selectedCountry.label}</Text>
        </View>
      </TouchableOpacity>
      
      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={countries}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.countryItem} onPress={() => selectCountry(item)}>
                  <Text style={styles.flag}>{item.flag}</Text>
                  <Text style={styles.countryText}>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
      
      <Link style={styles.button} href={'/PinSetup'}>
          <Text style={styles.buttonText}>Continue</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 50,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  subLabel: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 20,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 30,
  },
  selectedCountry: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    color: 'black',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    margin: 20,
    padding: 20,
    borderRadius: 10,
  },
  countryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  flag: {
    marginRight: 10,
    fontSize: 20,
  },
  countryText: {
    fontSize: 18,
  },
  button: {
    backgroundColor: '#635BFF',
    borderRadius: 5,
    alignItems: 'center',
    padding: 10,
    marginTop: 410,
    textAlign: "center"
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  progressBar: {
    height: 4,
    backgroundColor: '#635BFF',
    width: '100%',
    marginBottom: 20,
    marginTop: 50,
  },
});

export default CountryResident;
