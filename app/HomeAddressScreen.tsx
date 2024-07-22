import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal, Button, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const HomeAddressScreen: React.FC = () => {
  const [addressLine, setAddressLine] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [postcode, setPostcode] = useState<string>('');
  const [selectedCountry, setSelectedCountry] = useState<string>('US');
  const [showCountryModal, setShowCountryModal] = useState<boolean>(false);
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [displayDate, setDisplayDate] = useState<string>(new Date().toDateString());

  const countries = [
    { code: 'US', name: 'United States' },
    { code: 'CA', name: 'Canada' },
    { code: 'NG', name: 'Nigeria' },
    { code: 'GH', name: 'Ghana' },
    // Add more countries as needed
  ];

  const handleDateChange = (newDate: Date) => {
    setSelectedDate(newDate);
    setDisplayDate(newDate.toDateString());
    setShowDatePicker(false);
  };

  const handleCountrySelect = (countryCode: string) => {
    setSelectedCountry(countryCode);
    setShowCountryModal(false);
  };

  const renderCountryModal = () => (
    <View style={styles.modalOverlay}>
      <View style={styles.countryModalContainer}>
        <View style={styles.closeBtnContainer}>
          <Text style={styles.countryModalTitle}>Select Country</Text>
          <TouchableOpacity onPress={() => setShowCountryModal(false)}>
          <Ionicons name='close' size={24}/>
        </TouchableOpacity>
        </View>
        {countries.map((country) => (
          <TouchableOpacity
            key={country.code}
            onPress={() => handleCountrySelect(country.code)}
            style={styles.countryModalItem}
          >
            <Text style={styles.countryModalText}>{country.name}</Text>
          </TouchableOpacity>
        ))}
       
      </View>
    </View>
  );



  return (
    <View style={styles.container}>
      <View style={styles.progressBar} />

      <Text style={styles.title}>Home address</Text>
      <Text style={styles.subtitle}>This info needs to be accurate with your ID document.</Text>

      <Text style={styles.headerText}>Address Line</Text>
      <TextInput
        style={styles.input}
        placeholder="Address Line"
        value={addressLine}
        onChangeText={setAddressLine}
      />

      <Text style={styles.headerText}>City</Text>
      <TextInput
        style={styles.input}
        placeholder="City, State"
        value={city}
        onChangeText={setCity}
      />

      <Text style={styles.headerText}>Select Country</Text>
      <TouchableOpacity
        style={styles.input}
        onPress={() => setShowCountryModal(true)}
      >
        <Text style={styles.inputText}>{countries.find(c => c.code === selectedCountry)?.name || 'Select Country'}</Text>
      </TouchableOpacity>

      <Text style={styles.headerText}>Postcode</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 123456"
        value={postcode}
        onChangeText={setPostcode}
      />


     

      <Modal
        transparent={true}
        visible={showCountryModal}
        onRequestClose={() => setShowCountryModal(false)}
      >
        {renderCountryModal()}
      </Modal>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/AddPersonalInfoScreen')}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  progressBar: {
    height: 4,
    backgroundColor: '#635BFF',
    width: '100%',
    marginBottom: 20,
    marginTop: 50
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 20,
  },
  input: {
    borderWidth: 2,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 7,
    marginBottom: 20,
    fontSize: 16
  },
  inputText: {
    fontSize: 16,
    color: "#555"
  },
  button: {
    backgroundColor: '#635BFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 180
  },
  buttonText: {
    fontSize: 16,
    color: "#fff"
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  countryModalContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    maxHeight: '60%',
  },
  countryModalTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  countryModalItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  countryModalText: {
    fontSize: 16,
  },
  headerText:{
    fontSize: 16,
    fontWeight: "500",
    color: "#444"
  },
  closeBtn:{
    backgroundColor: "#635BFF",
    padding: 8,
    borderRadius: 20,
    alignItems: "center"
  },
  closeBtnContainer:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }
});

export default HomeAddressScreen;
