import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { useRouter } from 'expo-router';

const AddPersonalInfoScreen = () => {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const router = useRouter();

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDateOfBirth(date.toLocaleDateString());
    hideDatePicker();
  };

  return (
    <View style={styles.container}>
      <View style={styles.progressBar} />

      <Text style={styles.title}>Add your personal info</Text>
      <Text style={styles.subtitle}>This info needs to be accurate with your ID document.</Text>

      <Text style={styles.label}>Full Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Mr. John Doe"
        value={fullName}
        onChangeText={setFullName}
      />
      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        placeholder="@username"
        value={username}
        onChangeText={setUsername}
      />
      <Text style={styles.label}>Date of Birth</Text>
      <TouchableOpacity onPress={showDatePicker} style={styles.dateInput}>
        <Text style={styles.dateText}>{dateOfBirth || 'MM/DD/YYYY'}</Text>
      </TouchableOpacity>

      <DateTimePicker
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/CountryResident')}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff"
  },
  progressBar: {
    height: 4,
    backgroundColor: '#635BFF',
    width: '75%',
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
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 7,
    marginBottom: 20,
    fontSize: 16
  },
  dateText: {
    color: '#888',
  },
  button: {
    backgroundColor: '#635BFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 250
  },
  buttonText: {
    fontSize: 16,
    color: "#fff"
  },
  dateInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 13,
    borderRadius: 7,
    marginBottom: 20,
    fontSize: 16
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    color: "#555"
  }
});

export default AddPersonalInfoScreen;
