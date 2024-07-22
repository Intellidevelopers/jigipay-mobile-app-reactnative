import React from 'react';
import { View, Text, StyleSheet, Image, Switch, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, FontAwesome6 } from '@expo/vector-icons';

const profile = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleDarkMode = () => setIsDarkMode(previousState => !previousState);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>My Profile</Text>
      </View>
      <View style={styles.profileSection}>
        <Image
          source={require('../../assets/images/avatar.png')} // Replace with the actual image URL
          style={styles.profileImage}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Adeagbo Josiah</Text>
          <Text style={styles.profileEmail}>adeagbojosiah1@gmail.com</Text>
          <Text style={styles.profilePhone}>+234 (808) 888 6823</Text>
        </View>
        <TouchableOpacity style={styles.editIcon}>
          <FontAwesome6 name="edit" size={20} color="#635BFF" />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.optionSection} showsVerticalScrollIndicator={false}>
      <View style={styles.optionSection}>
        <View style={styles.optionItem}>
          <Text style={styles.optionText}>Dark Mode</Text>
          <Switch
            value={isDarkMode}
            onValueChange={toggleDarkMode}
            thumbColor={isDarkMode ? "#635BFF" : "#f4f3f4"}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
          />
        </View>
        <OptionItem icon="info" iconColor="#3b82f6" text="Personal Info" />
        <OptionItem icon="credit-card" iconColor="#f59e0b" text="Bank & Cards" />
        <OptionItem icon="money-bill-trend-up" iconColor="#ef4444" text="Transaction" />
        <OptionItem icon="gear" iconColor="#6366f1" text="Settings" />
        <OptionItem icon="shield" iconColor="#10b981" text="Data Privacy" />
        <OptionItem icon="person-running" iconColor="#10b981" text="Logout" />
      </View>
      </ScrollView>
      <View style={styles.divider}></View>
    </View>
  );
};

const OptionItem = ({ icon, iconColor, text }: { icon: string; iconColor: string; text: string }) => {
  return (
    <TouchableOpacity style={styles.optionItem}>
      <View style={[styles.optionIcon, { backgroundColor: iconColor }]}>
        <FontAwesome6 name={icon} size={16} color="#fff" />
      </View>
      <Text style={styles.optionText}>{text}</Text>
      <Ionicons name="chevron-forward" size={24} color="#000" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5"
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 40
  },
  headerText: {
    fontSize: 20,
    fontWeight: '700',
    marginLeft: 10,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 18,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileInfo: {
    alignItems: 'center',
    marginTop: 10,
  },
  profileName: {
    fontSize: 20,
    fontWeight: '700',
  },
  profileEmail: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  profilePhone: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  editIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 15,
  },
  optionSection: {
    marginBottom: 30,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  optionIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionText: {
    flex: 1,
    marginLeft: 15,
    fontSize: 16,
    color: '#333',
    fontWeight: "500"
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  optionSectionScroll:{
    marginBottom: 70,
    borderRadius: 15
  },
  divider:{
    marginBottom: 60
  }
});

export default profile;
