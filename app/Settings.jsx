import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, Image, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons, MaterialIcons, Feather, SimpleLineIcons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { router } from 'expo-router';

const Settings = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [saveBeneficiary, setSaveBeneficiary] = useState(false);

  const toggleSwitch = () => {
    setSaveBeneficiary((prev) => !prev);
  };


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
        <TouchableOpacity>
          <Ionicons name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.profileContainer}>
        <Image source={require('../assets/images/user4.png')} style={styles.profileImage} />
        <View style={styles.profileDetails}>
          <Text style={styles.profileName}>Adeagbo Josiah</Text>
          <Text style={styles.profileID}>ID 28954761</Text>
        </View>
        <View style={styles.verifiedContainer}>
          <Text style={styles.verifiedText}>Verified</Text>
          <MaterialIcons name="verified" size={20} color="white" />
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
      <Text style={styles.sectionTitle}>Privacy</Text>
        <View style={styles.section}>
          <TouchableOpacity style={styles.sectionItem} onPress={() => router.push('/Profile')}>
            <FontAwesome5 name="user-circle" size={24} color="black" />
            <Text style={styles.sectionItemText}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sectionItem}>
            <MaterialCommunityIcons name="shield-account-variant-outline" size={24} color="#666" />
            <Text style={styles.sectionItemText}>Security</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Finance</Text>
        <View style={styles.section}>
          <TouchableOpacity style={styles.sectionItem}>
            <MaterialIcons name="history" size={24} color="#666" />
            <Text style={styles.sectionItemText}>History</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sectionItem}>
            <Feather name="pie-chart" size={24} color="#666" />
            <Text style={styles.sectionItemText}>Limits</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Account</Text>
        <View style={styles.section}>
          <TouchableOpacity style={styles.sectionItem}>
            <Ionicons name="color-palette" size={24} color="#666" />
            <Text style={styles.sectionItemText}>Theme</Text>
            <View style={styles.darkModeContainer}>
              <Text style={styles.darkModeText}>Dark mode</Text>
              <TouchableOpacity style={[styles.switch, saveBeneficiary && styles.switchActive]} onPress={toggleSwitch}>
            <View style={[styles.switchButton, saveBeneficiary && styles.switchButtonActive]} />
          </TouchableOpacity>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sectionItem}>
            <Feather name="bell" size={24} color="#666" />
            <Text style={styles.sectionItemText}>Notifications</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>More</Text>
        <View style={styles.section}>
          <TouchableOpacity style={styles.sectionItem}>
            <Ionicons name="gift" size={24} color="#666" />
            <Text style={styles.sectionItemText}>My bonus</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sectionItem}>
            <Feather name="user-plus" size={24} color="#666" />
            <Text style={styles.sectionItemText}>Share with friends</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sectionItem}>
            <Ionicons name="help-circle" size={24} color="#666" />
            <Text style={styles.sectionItemText}>Support</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.sectionItem} onPress={() => router.push('/Login')}>
            <SimpleLineIcons name="logout" size={24} color="red" />
            <Text style={{color: "red", fontSize: 14, marginLeft: 10, fontWeight: "500"}}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginVertical: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  profileDetails: {
    marginLeft: 10,
  },
  profileName: {
    fontSize: 16,
    fontFamily: 'Semibold',
  },
  profileID: {
    fontSize: 12,
    color: '#777',
    fontWeight: "500"
  },
  verifiedContainer: {
    marginLeft: 'auto',
    backgroundColor: '#4caf50',
    borderRadius: 15,
    paddingHorizontal: 8,
    paddingVertical: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  verifiedText: {
    color: 'white',
    marginRight: 5,
    fontSize: 12,
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  section: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 10,
    color: "#666"
  },
  sectionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  sectionItemText: {
    fontSize: 14,
    marginLeft: 10,
    fontWeight: "500"
  },
  darkModeContainer: {
    marginLeft: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
  },
  darkModeText: {
    marginRight: 10,
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
    backgroundColor: '#4945FF',
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
});
