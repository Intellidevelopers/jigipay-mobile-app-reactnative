import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
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

type NotificationItem = {
  id: string;
  title: string;
  description: string;
  time: string;
  date?: string;
  type?: string;
  action?: string;
  image: any;
};

const notifications: NotificationItem[] = [
  {
    id: '1',
    title: 'Shopping budget has exceeded...',
    description: 'Your Utilities budget has exceeded...',
    time: '3:40 PM',
    date: 'Yesterday',
    type: 'Info',
    image: require('../assets/notification/2.png'),
  },
  {
    id: '2',
    title: 'Use TPLACE Promo Code',
    description: 'Use Promo Code for The Place',
    time: 'Promo',
    date: 'Yesterday',
    type: 'Promo',
    image: require('../assets/notification/3.png'),
  },
  {
    id: '3',
    title: 'GetBrees Flex Friday Deal',
    description: 'Your Utilities budget has exceeded',
    time: '10:39 AM',
    date: 'Yesterday',
    type: 'Promo',
    image: require('../assets/notification/4.png'),
  },
  {
    id: '4',
    title: 'Use TPLACE Promo Code',
    description: 'Use Promo Code for The Place',
    time: 'Promo',
    date: 'Yesterday',
    type: 'Promo',
    image: require('../assets/notification/5.png'),
  },
  {
    id: '5',
    title: 'GetBrees Flex Friday Deal',
    description: 'Your Utilities budget has exceeded',
    time: '10:39 AM',
    date: 'Yesterday',
    type: 'Promo',
    image: require('../assets/notification/5.png'),
  },
  {
    id: '6',
    title: 'Use TPLACE Promo Code',
    description: 'Use Promo Code for The Place',
    time: 'Promo',
    date: 'Yesterday',
    type: 'Promo',
    image: require('../assets/notification/3.png'),
  },
  {
    id: '7',
    title: 'GetBrees Flex Friday Deal',
    description: 'Your Utilities budget has exceeded',
    time: '10:39 AM',
    date: 'Yesterday',
    type: 'Promo',
    image: require('../assets/notification/2.png'),
  },
  // Add more notifications as needed
];

const Notification = () => {
  const renderItem = ({ item }: { item: NotificationItem }) => (
    <View style={styles.notificationItem}>
      <Image source={item.image} style={styles.notificationImage} />
      <View style={styles.notificationTextContainer}>
       <View>
       <Text style={styles.notificationTitle}>{item.title}</Text>
       <Text style={styles.notificationDescription}>{item.description}</Text>
       </View>
        <View style={styles.notificationDateTime}>
        <Text style={styles.notificationTime}>{item.time}</Text>
        <Text style={styles.notificationDate}>{item.date}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
        <Text style={styles.dateText}>Today</Text>
        <View style={styles.notificationItems}>
            <Image source={require('../assets/notification/1.png')} style={styles.notificationImage} />
            <View style={styles.notificationTextContainers}>
                <Text style={styles.notificationTitle}>Cashback 50% </Text>
                <Text style={styles.notificationDescription}>Get 50% cashback for pizza</Text>
                <Text style={styles.notificationAction}>Claim it now</Text>
            </View>
        </View>
        <Text style={styles.dateText}>Yesterday</Text>

      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.notificationList}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingTop: 40,
  },
  header: {
    fontSize: 18,
    fontFamily: 'bold',
    marginBottom: 20,
  },
  notificationList: {
    paddingBottom: 20,
  },
  notificationItem: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#f6f6f6',
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  notificationImage: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  notificationTextContainer: {
    flex: 1,
  },
  notificationTextContainers: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 14,
    fontFamily: 'Semibold',
    width: '100%'
  },
  notificationDescription: {
    fontSize: 12,
    color: '#666',
    fontFamily: 'Regular',

  },
  notificationTime: {
    fontSize: 12,
    color: '#777',
    fontFamily: "Medium"

  },
  notificationDate: {
    fontSize: 12,
    color: '#666',
    fontFamily: "Medium"
  },
  notificationAction: {
    fontSize: 14,
    color: '#635BFF',
    marginTop: 5,
    fontFamily: 'Semibold'
  },
  cashbackIcon:{
  width: 50,
  height: 50
  },
  dateText:{
    marginBottom: 10,
    fontSize: 15,
    fontFamily: "Medium",
    color: "#555",
    marginTop: -20

  },
  notificationItems:{
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#E3F2FD',
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',

  },
  notificationDateTime:{
    flexDirection: "row",
    gap: 15
  }
});
