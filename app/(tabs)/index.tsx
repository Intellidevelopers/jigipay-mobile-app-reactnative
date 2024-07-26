import React, { useEffect, useMemo, useRef, useState, useCallback } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, SafeAreaView, TouchableOpacity, Pressable, StatusBar } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons, MaterialCommunityIcons, Feather, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { router } from 'expo-router';
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync(); // Prevent the splash screen from auto-hiding

const fetchFonts = () => {
  return Font.loadAsync({
    'Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
    'Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
    'Extrabold': require('../../assets/fonts/Poppins-ExtraBold.ttf'),
    'Black': require('../../assets/fonts/Poppins-Black.ttf'),
    'ExtraLight': require('../../assets/fonts/Poppins-ExtraLight.ttf'),
    'Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
    'Semibold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
    'Thin': require('../../assets/fonts/Poppins-Thin.ttf'),
    'Light': require('../../assets/fonts/Poppins-Light.ttf'),
    'Mano': require('../../assets/fonts/SpaceMono-Regular.ttf')
  });
};

const Index = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [showBottomSheet, setShowBottomSheet] = useState(false);
  const [selectedBank, setSelectedBank] = useState<{ name: string, logo: any } | null>(null);

  const banks = [
    { name: 'Bank Transfer', logo: require('../../assets/images/bank.png') },
    { name: 'USSD', logo: require('../../assets/images/ussd.jpeg') },
    // Add more banks as needed
  ];

  const snapPoints = useMemo(() => ['25%', '40%'], []);

  const handleBankSelect = (bank: { name: string, logo: any }) => {
    setSelectedBank(bank);
    bottomSheetRef.current?.close();
    setShowBottomSheet(false);
  };

  useEffect(() => {
    fetchFonts().then(() => {
      setFontsLoaded(true);
      SplashScreen.hideAsync(); // Hide the splash screen when fonts are loaded
    }).catch((error) => console.warn(error));
  }, []);

  if (!fontsLoaded) {
    return null; // Return null until fonts are loaded and splash screen is hidden
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      <ImageBackground source={require('../../assets/images/Background.png')} style={styles.Dashboard}>
        <View style={styles.rowItems1}>
         <Pressable onPress={() => router.push('/Settings')}>
         <View style={styles.profileItems}>
            <Image source={require('../../assets/images/avatar.png')} style={styles.avatar} />
            <View>
              <Text style={styles.name}>Hi, Josiah</Text>
              <Text style={styles.date}>Wed, Jul 14 2024</Text>
            </View>
          </View>
         </Pressable>
          <TouchableOpacity onPress={() => router.push('/Notification')}>
          <Ionicons name='notifications-outline' color={"#000"} size={25} />
          </TouchableOpacity>
        </View>

        <Text style={styles.balance}>Balance</Text>
        <View style={styles.balanceItems}>
          <Text style={styles.amount}>
            {isHidden ? '₦••••••••' : '₦105,434.00'}
          </Text>
          <TouchableOpacity onPress={() => setIsHidden(!isHidden)}>
            <Ionicons name={isHidden ? 'eye-off' : 'eye'} size={30} />
          </TouchableOpacity>
        </View>
        <StatusBar backgroundColor={'black'} />
        <View style={styles.rowItems2}>
        <TouchableOpacity onPress={() => setShowBottomSheet(true)}>
              <View style={styles.columnItems}>
                <View style={styles.columnIcons}>
                  <MaterialCommunityIcons name='plus' size={25} color={"#635BFF"} />
                </View>
                <Text style={styles.subTitle}>Top Up</Text>
              </View>
            </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push('/Transfer')}>
          <View style={styles.columnItems}>
            <View style={styles.columnIcons}>
              <MaterialCommunityIcons name='bank' size={25} color={"#635BFF"}/>
            </View>
            <Text style={styles.subTitle}>Transfer</Text>
          </View>
          </TouchableOpacity>

          <View style={styles.columnItems}>
            <View style={styles.columnIcons}>
              <Feather name='arrow-up-circle' size={25} color={"#635BFF"}/>
            </View>
            <Text style={styles.subTitle}>Pay</Text>
          </View>

          <View style={styles.columnItems}>
            <View style={styles.columnIcons}>
              <Feather name='arrow-down-circle' size={25} color={"#635BFF"}/>
            </View>
            <Text style={styles.subTitle}>Request</Text>
          </View>

          <TouchableOpacity onPress={() => router.push('/MoreScreen')}>
          <View style={styles.columnItems}>
            <View style={styles.columnIcons}>
              <Feather name='more-horizontal' size={25} color={"#635BFF"}/>
            </View>
            <Text style={styles.subTitle}>More</Text>
          </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>

     <ScrollView showsVerticalScrollIndicator={false}>
     <Pressable onPress={() => router.push('/Splash')}>
     <View style={styles.notificationCard}>
        <View style={styles.columnInvite}>
          <Image source={require('../../assets/images/Invitation.png')} style={styles.invite}/>
          <View>
            <Text style={styles.text1}>Referral</Text>
            <Text style={styles.text2}>Invite your friends to join on</Text>
            <Text style={styles.text}>Jigipay and get ₦15,000.00</Text>
          </View>
        </View>
        <MaterialIcons name='keyboard-arrow-right' size={30} />
      </View>
      </Pressable>

      <View style={styles.transactionHeader}>
        <Text style={styles.transactionTitle}>Recent Transactions</Text>
        <Link href="/explore" style={styles.viewMore}>View All</Link>
      </View>

     <View style={styles.AllItems}>
    <Pressable onPress={() => router.push('/TransactionDetails')}>
    <View style={styles.rowTransaction}>
          <View style={styles.Transaction}>
            <Image source={require('../../assets/images/user1.png')} style={styles.user} />
            <View>
              <Text style={styles.columnDateText1}>James Gloom Berb</Text>
              <Text style={styles.columnDateText2}>Received • Jul 10</Text>
            </View>
          </View>
          <Text style={styles.amountText}>₦123.00</Text>
        </View>
    </Pressable>

     <Pressable  onPress={() => router.push('/TransactionDetails')}>
     <View style={styles.rowTransaction}>
        <View style={styles.Transaction}>
          <Image source={require('../../assets/images/user2.png')} style={styles.user} />
          <View>
            <Text style={styles.columnDateText1}>Adeagbo Josiah A..</Text>
            <Text style={styles.columnDateText2}>Received • Jul 10</Text>
          </View>
        </View>
        <Text style={styles.amountText2}>₦123.00</Text>
      </View>
     </Pressable>

      <Pressable onPress={() => router.push('/TransactionDetails')}>
      <View style={styles.rowTransaction}>
        <View style={styles.Transaction}>
          <Image source={require('../../assets/images/user3.png')} style={styles.user} />
          <View>
            <Text style={styles.columnDateText1}>Adeagbo Mary Abi..</Text>
            <Text style={styles.columnDateText2}>Received • Jul 10</Text>
          </View>
        </View>
        <Text style={styles.amountText}>₦123.00</Text>
      </View>
      </Pressable>

      <Pressable onPress={() => router.push('/TransactionDetails')}>
      <View style={styles.rowTransaction}>
        <View style={styles.Transaction}>
          <Image source={require('../../assets/images/user4.png')} style={styles.user} />
          <View>
            <Text style={styles.columnDateText1}>Kehinde Olanrewaju</Text>
            <Text style={styles.columnDateText2}>Received • Jul 10</Text>
          </View>
        </View>
        <Text style={styles.amountText2}>₦123.00</Text>
      </View>
      </Pressable>

     <Pressable onPress={() => router.push('/TransactionDetails')}>
     <View style={styles.rowTransaction}>
        <View style={styles.Transaction}>
          <Image source={require('../../assets/images/user1.png')} style={styles.user} />
          <View>
            <Text style={styles.columnDateText1}>Olabisi Kehinde Abd</Text>
            <Text style={styles.columnDateText2}>Received • Jul 10</Text>
          </View>
        </View>
        <Text style={styles.amountText2}>₦123.00</Text>
      </View>
     </Pressable>

     <Pressable onPress={() => router.push('/TransactionDetails')}>
     <View style={styles.rowTransaction}>
        <View style={styles.Transaction}>
          <Image source={require('../../assets/images/user2.png')} style={styles.user} />
          <View>
            <Text style={styles.columnDateText1}>Afolami Sarah Ola..</Text>
            <Text style={styles.columnDateText2}>Received • Jul 10</Text>
          </View>
        </View>
        <Text style={styles.amountText}>₦123.00</Text>
      </View>
     </Pressable>

      <Pressable onPress={() => router.push('/TransactionDetails')}>
      <View style={styles.rowTransaction}>
        <View style={styles.Transaction}>
          <Image source={require('../../assets/images/user2.png')} style={styles.user} />
          <View>
            <Text style={styles.columnDateText1}>Damilla Oluwapelumi</Text>
            <Text style={styles.columnDateText2}>Received • Jul 10</Text>
          </View>
        </View>
        <Text style={styles.amountText}>₦123.00</Text>
      </View>
      </Pressable>

     <Pressable onPress={() => router.push('/TransactionDetails')}>
     <View style={styles.rowTransaction}>
        <View style={styles.Transaction}>
          <Image source={require('../../assets/images/user4.png')} style={styles.user} />
          <View>
            <Text style={styles.columnDateText1}>Ominyi Isaac Ogbu</Text>
            <Text style={styles.columnDateText2}>Received • Jul 10</Text>
          </View>
        </View>
        <Text style={styles.amountText2}>₦123.00</Text>
      </View>
      </Pressable>

     </View>
     </ScrollView>

     {showBottomSheet && (
          <BottomSheet
            ref={bottomSheetRef}
            index={1}
            snapPoints={snapPoints}
            onClose={() => setShowBottomSheet(false)}
            enablePanDownToClose
          >
            <View style={styles.bottomSheetHeader}>
              <Text style={styles.bottomSheetTitle}>Select a Bank</Text>
            </View>
            <View style={styles.bankItem}>
              <FontAwesome style={{marginRight: 10}} name='bank' size={24} color={'#635BFf'} />
              <Text style={styles.bankName}>Bank Transfer </Text>
            </View>

            <View style={styles.bankItem}>
              <MaterialIcons style={{marginRight: 10}} name='numbers' size={24} color={'#635BFf'} />
              <Text style={styles.bankName}>USSD </Text>
            </View>
          </BottomSheet>
        )}
    </GestureHandlerRootView>
  )
}

export default Index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  Dashboard: {
    height: 300,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: 'hidden', // to ensure the rounded corners are applied
    backgroundColor: "#EFEFFF"
  },
  notificationCard: {
    backgroundColor: "#EFEFFF",
    height: 100,
    marginVertical: 30,
    width: '93%',
    alignSelf: "center",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row"
  },
  transactionHeader: {
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 98,
    alignSelf: "center",
    marginBottom: 20
  },
  transactionTitle: {
    fontSize: 18,
    fontWeight: "700"
  },
  viewMore: {
    color: "#635BFF",
    fontWeight: "500",
    marginLeft: -5,
  },
  avatar: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  rowItems: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    gap: 100,
  },
  rowItems1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    gap: 100,
    marginTop: 50,
    
  },
  profileItems: {
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    fontSize: 16,
    fontFamily: 'Bold',
    marginBottom: -5
  },
  date: {
    color: "#555",
    fontSize: 12,
    fontFamily: 'Medium'
  },
  balance: {
    fontSize: 14,
    fontWeight: "500",
    color: "#666",
    marginLeft: 20,
    marginVertical: 21,
    marginBottom: 25
  },
  balanceItems: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    gap: 106,
    marginTop: -25,
    width: '86%',
    alignSelf: "center"
  },
  amount: {
    fontSize: 32,
    fontWeight: "700"
  },
  rowItems2: {
    flexDirection: "row",
    marginTop: 15,
    alignItems: "center",
    justifyContent: "space-around",
  },
  columnItems: {
    alignItems: "center",
  },
  columnIcons: {
    backgroundColor: "#fff",
    padding: 13,
    borderRadius: 20,
    marginBottom: 10
  },
  subTitle: {
    alignSelf: "center",
    color: "#444",
    fontSize: 12,
    fontFamily: 'Medium'
  },
  invite: {
    width: 60,
    height: 60,
    marginRight: 10
  },
  columnInvite: {
    flexDirection: "row",
    marginLeft: -10
  },
  text1: {
    color: "#635BFF",
    fontSize: 16,
    fontFamily: 'Semibold'
  },
  text2: {
    color: "#635BFF",
    fontSize: 12,
    fontFamily: 'Medium'

  },
  text: {
    color: "#666",
    fontFamily: 'Medium',
    fontSize: 12,
  },
  Transaction:{
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  rowIcon:{
    flexDirection: "row",
    alignItems: "center",
  },
  rowTransaction:{
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 90,
    marginBottom: 15,
    backgroundColor: "#F6F6F6",
    alignItems: "center",
    padding: 14,
    width: "92%",
    alignSelf: "center",
    borderRadius: 15,
    paddingHorizontal: 25
  },
  user:{
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 50,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    alignItems: "center"
  },
  columnDateText1:{
    fontSize: 14,
    color: "#333",
    fontFamily: 'Semibold'
  },
  columnDateText2:{
    fontSize: 12,
    color: "#666",
    fontFamily: 'Medium'
  },
  amountText:{
    fontSize: 14,
    color: "#13C782",
    fontFamily: 'Bold'
  },
  amountText2:{
    fontFamily: 'Bold',
    fontSize: 14,
    color: "#F60909"
  },
  AllItems:{
    marginBottom: 100
  },
  bottomSheetHeader: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  bottomSheetTitle: {
    fontSize: 18,
    fontFamily: 'Semibold',
  },
  bankItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  bankLogo: {
    width: 40,
    height: 40,
    marginRight: 10,    
    borderRadius: 100
  },
  bankName: {
    fontSize: 15,
    fontFamily: "Medium"
  },
})
