import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, FlatList, Image } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';

const Beneficiaries = () => {
  const [beneficiaries, setBeneficiaries] = useState([
    { id: '1', name: 'Adeagbo Josiah', amount: '₦5,000', date: 'sent 4 days ago', fee: '₦44.85' },
    { id: '2', name: 'Adeagbo Josiah', amount: '₦5,000', date: 'sent 4 days ago', fee: '₦44.85' },
    { id: '3', name: 'Adeagbo Josiah', amount: '₦5,000', date: 'sent 4 days ago', fee: '₦44.85' },
    { id: '4', name: 'Adeagbo Josiah', amount: '₦5,000', date: 'sent 4 days ago', fee: '₦44.85' },
    { id: '5', name: 'Adeagbo Josiah', amount: '₦5,000', date: 'sent 4 days ago', fee: '₦44.85' },
    { id: '6', name: 'Adeagbo Josiah', amount: '₦5,000', date: 'sent 4 days ago', fee: '₦44.85' },
    { id: '7', name: 'Adeagbo Josiah', amount: '₦5,000', date: 'sent 4 days ago', fee: '₦44.85' },
    { id: '8', name: 'Adeagbo Josiah', amount: '₦5,000', date: 'sent 4 days ago', fee: '₦44.85' },
    { id: '9', name: 'Adeagbo Josiah', amount: '₦5,000', date: 'sent 4 days ago', fee: '₦44.85' },
    { id: '10', name: 'Adeagbo Josiah', amount: '₦5,000', date: 'sent 4 days ago', fee: '₦44.85' },
    { id: '11', name: 'Adeagbo Josiah', amount: '₦5,000', date: 'sent 4 days ago', fee: '₦44.85' },
    { id: '12', name: 'Adeagbo Josiah', amount: '₦5,000', date: 'sent 4 days ago', fee: '₦44.85' },
    { id: '13', name: 'Adeagbo Josiah', amount: '₦5,000', date: 'sent 4 days ago', fee: '₦44.85' },
    { id: '14', name: 'Adeagbo Josiah', amount: '₦5,000', date: 'sent 4 days ago', fee: '₦44.85' },
    { id: '15', name: 'Adeagbo Josiah', amount: '₦5,000', date: 'sent 4 days ago', fee: '₦44.85' },
    { id: '16', name: 'Adeagbo Josiah', amount: '₦5,000', date: 'sent 4 days ago', fee: '₦44.85' },
    { id: '17', name: 'Adeagbo Josiah', amount: '₦5,000', date: 'sent 4 days ago', fee: '₦44.85' },
    { id: '18', name: 'Adeagbo Josiah', amount: '₦5,000', date: 'sent 4 days ago', fee: '₦44.85' },
    { id: '19', name: 'Adeagbo Josiah', amount: '₦5,000', date: 'sent 4 days ago', fee: '₦44.85' },
    { id: '20', name: 'Adeagbo Josiah', amount: '₦5,000', date: 'sent 4 days ago', fee: '₦44.85' },
    // Add more beneficiaries as needed
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={30} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Beneficiaries</Text>
      </View>

      <View style={styles.infoContainer}>
        <MaterialIcons name='bubble-chart' size={34} color={'#635BFF'}/>
        <View>
          <Text style={styles.infoText}>These are accounts you saved for later.</Text>
          <Text style={styles.infoText}>You can edit and delete them too...</Text>
        </View>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Ionicons name="search" size={20} color="#ccc" style={styles.searchIcon} />
          <TextInput placeholder="Search" style={styles.searchInput} />
        </View>
      </View>

      <FlatList
        data={beneficiaries}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.beneficiaryItem} onPress={() => router.push('/SendMoney')}>
            <View style={styles.beneficiaryDetails}>
              <Image source={require('../assets/images/user4.png')} style={styles.beneficiaryImage} />
              <View>
                <Text style={styles.beneficiaryName}>{item.name}</Text>
                <Text style={styles.beneficiaryDate}>{item.date}</Text>
              </View>
            </View>
            <View style={styles.amountContainer}>
              <Text style={styles.amount}>{item.amount}</Text>
              <Text style={styles.fee}>{item.fee}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Beneficiaries;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginTop: 40,
    marginBottom: 20,
    gap: 60,
  },
  headerText: {
    fontSize: 18,
    fontFamily: 'Semibold',
    marginLeft: 20,
  },
  infoContainer: {
    padding: 10,
    backgroundColor: '#f2f2f2',
    width: '93%',
    alignSelf: "center",
    borderRadius: 5,
    flexDirection: "row",
    gap: 10
  },
  searchContainer: {
    padding: 10,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 2,
    borderRadius: 30,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16
  },
  beneficiaryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  beneficiaryDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  beneficiaryImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  beneficiaryName: {
    fontSize: 16,
    fontFamily: 'Semibold',
  },
  beneficiaryDate: {
    color: '#666',
  },
  amountContainer: {
    alignItems: 'flex-end',
  },
  amount: {
    fontSize: 16,
    fontFamily: 'Medium',
  },
  fee: {
    color: '#666',
  },
  infoText:{
    color: "#666",
    fontWeight: "500"
  }
});
