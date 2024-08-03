import React, { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Pressable,
  Modal,
  Animated,
  Easing,
  Dimensions,
} from 'react-native';
import { Link, useRouter } from 'expo-router';
import {
  Ionicons,
  MaterialCommunityIcons,
  Feather,
  MaterialIcons,
  FontAwesome,
} from '@expo/vector-icons';
import { router } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { ExpoRouter } from 'expo-router/types/expo-router'


const { height: SCREEN_HEIGHT } = Dimensions.get('window');



const Index = () => {
  const [isHidden, setIsHidden] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showBottomCard, setShowBottomCard] = useState(false);
  const bottomCardHeight = useRef(new Animated.Value(0)).current;
  const router = useRouter();


  function setShowBottomSheet(arg0: boolean): void {
    throw new Error('Function not implemented.');
  }


  
    const banks = [
      { name: 'Cheap Data', description: 'up to 60% discount', route: '/CheapData' },
      { name: 'Regular Data', description: '', route: '/RegularData' },
      // Add more options as needed
    ];
  
    const handleBankSelect = (route: ExpoRouter.Href) => {
      Animated.timing(bottomCardHeight, {
        toValue: 0,
        duration: 300,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start(() => {
        setShowBottomCard(false);
        router.push(route); // Navigate to the selected route
      });
    };
  
    const toggleBottomCard = () => {
      if (showBottomCard) {
        Animated.timing(bottomCardHeight, {
          toValue: 0,
          duration: 300,
          easing: Easing.linear,
          useNativeDriver: false,
        }).start(() => setShowBottomCard(false));
      } else {
        setShowBottomCard(true);
        Animated.timing(bottomCardHeight, {
          toValue: SCREEN_HEIGHT / 2,
          duration: 300,
          easing: Easing.linear,
          useNativeDriver: false,
        }).start();
      }
    };

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
        <View style={styles.rowItems2}>
        <TouchableOpacity onPress={() => setShowModal(true)}>
              <View style={styles.columnItems}>
                <View style={styles.columnIcons}>
                  <MaterialCommunityIcons name='plus' size={25} color={"#4945FF"} />
                </View>
                <Text style={styles.subTitle}>Top Up</Text>
              </View>
            </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push('/Transfer')}>
          <View style={styles.columnItems}>
            <View style={styles.columnIcons}>
              <MaterialCommunityIcons name='bank' size={25} color={"#4945FF"}/>
            </View>
            <Text style={styles.subTitle}>Transfer</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push('/Airtime')}>
          <View style={styles.columnItems}>
            <View style={styles.columnIcons}>
              <Feather name='phone' size={25} color={"#4945FF"}/>
            </View>
            <Text style={styles.subTitle}>Airtime</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity  onPress={toggleBottomCard}>
          <View style={styles.columnItems}>
            <View style={styles.columnIcons}>
              <Feather name='wifi' size={25} color={"#4945FF"}/>
            </View>
            <Text style={styles.subTitle}>Data</Text>
          </View>
          </TouchableOpacity>

         <TouchableOpacity onPress={() => router.push('/Withdraw')}>
          <View style={styles.columnItems}>
              <View style={styles.columnIcons}>
                <Feather name='arrow-down-circle' size={25} color={"#4945FF"}/>
              </View>
              <Text style={styles.subTitle}>Withdraw</Text>
            </View>
         </TouchableOpacity>

         
        </View>
      </ImageBackground>

     <ScrollView showsVerticalScrollIndicator={false}>
     <Pressable onPress={() => alert('You pressed referral')}>
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

     <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          setShowModal(!showModal);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>More</Text>
            <Text style={styles.modalText}>Choose your top-up method:</Text>
           <TouchableOpacity style={styles.button} onPress={() => {setShowModal(!showModal); router.push('/BankTransfer');}}>
            <Text style={styles.buttonText}>Top up with bank transfer</Text>
           </TouchableOpacity>

           <TouchableOpacity style={styles.button} onPress={() => {setShowModal(!showModal); router.push('/USSD');}}>
            <Text style={styles.buttonText}>USSD</Text>
           </TouchableOpacity>

           <TouchableOpacity style={styles.button} onPress={() => {setShowModal(!showModal);}}>
            <Text style={styles.buttonText}>Close</Text>
           </TouchableOpacity>
          </View>
        </View>
        </Modal>

        {showBottomCard && (
        <Animated.View style={[styles.bottomCard, { height: bottomCardHeight }]}>
          <View style={styles.bottomCardHeader}>
            <Text style={styles.bottomCardTitle}>Data Subscription</Text>
          </View>
          {banks.map((bank) => (
            <TouchableOpacity key={bank.name} style={styles.bankItem} onPress={() => handleBankSelect(bank.route)}>
              <Text style={styles.bankName}>{bank.name}</Text>
              {bank.description ? <Text style={styles.bankDescription}>{bank.description}</Text> : null}
            </TouchableOpacity>
          ))}
        </Animated.View>
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
    color: "#4945FF",
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
    color: "#4945FF",
    fontSize: 16,
    fontFamily: 'Semibold'
  },
  text2: {
    color: "#4945FF",
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
  bankLogo: {
    width: 40,
    height: 40,
    marginRight: 10,    
    borderRadius: 100
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontFamily: 'Bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  modalText: {
    fontSize: 16,
    fontFamily: 'Regular',
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButton: {
    borderRadius: 20,
    elevation: 2,
    marginTop: 10,
    width: '100%',
  },
  modalButtonClose: {
    backgroundColor: '#4945FF',
    width: '100%',
  },
  textStyle: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Bold',
    textAlign: 'center',
  },
  button:{
    backgroundColor: "#4945FF",
    padding: 10,
    width: 250,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: "center"
  },
  buttonText:{
    color: "#fff",
    fontFamily: "Medium"
  },
  bottomCard: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  bottomCardHeader: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  bottomCardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  bankItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  bankName: {
    fontSize: 16,
    fontFamily: "Regular"
  },
  bankDescription: {
    fontSize: 10,
    color: '#fff',
    fontFamily: "Regular",
    backgroundColor: "#635BFF",
    padding: 4,
    borderRadius: 15
  },
})
