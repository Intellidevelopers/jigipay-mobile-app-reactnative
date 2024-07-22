import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, SafeAreaView, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { Ionicons, MaterialCommunityIcons, Feather, MaterialIcons, AntDesign } from '@expo/vector-icons'
import { router } from 'expo-router'

const index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../../assets/images/Background.png')} style={styles.Dashboard}>
        <View style={styles.rowItems1}>
         <Pressable onPress={() => router.push('/profile')}>
         <View style={styles.profileItems}>
            <Image source={require('../../assets/images/avatar.png')} style={styles.avatar} />
            <View>
              <Text style={styles.name}>Hi, Josiah</Text>
              <Text style={styles.date}>Wed, Jul 14 2024</Text>
            </View>
          </View>
         </Pressable>
          <Ionicons name='notifications-outline' color={"#000"} size={25} />
        </View>

        <Text style={styles.balance}>Balance</Text>
        <View style={styles.balanceItems}>
          <Text style={styles.amount}>₦105,434.00</Text>
          <Ionicons name='eye' size={30}/>
        </View>

        <View style={styles.rowItems2}>
          <View style={styles.columnItems}>
            <View style={styles.columnIcons}>
              <MaterialCommunityIcons name='plus' size={25} color={"#635BFF"}/>
            </View>
            <Text style={styles.subTitle}>Top Up</Text>
          </View>

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

          <View style={styles.columnItems}>
            <View style={styles.columnIcons}>
              <Feather name='more-horizontal' size={25} color={"#635BFF"}/>
            </View>
            <Text style={styles.subTitle}>More</Text>
          </View>
        </View>
      </ImageBackground>

     <ScrollView showsVerticalScrollIndicator={false}>
     <Pressable onPress={() => alert('Referral Is Pressed')}>
     <View style={styles.notificationCard}>
        <View style={styles.columnInvite}>
          <Image source={require('../../assets/images/Invitation.png')} style={styles.invite}/>
          <View>
            <Text style={styles.text1}>Referral</Text>
            <Text style={styles.text2}>Invite your friends to join on</Text>
            <Text style={styles.text}>Jigipay and get ₦15.00</Text>
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
     </View>
     
     </ScrollView>
    </SafeAreaView>
  )
}

export default index

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
    fontWeight: "700",
    fontFamily: 'Roboto',
  },
  date: {
    color: "#555",
    fontSize: 12,
    fontWeight: "500"
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
    fontWeight: "900",
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
    fontWeight: "500",
    color: "#444",
    fontSize: 12
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
    fontWeight: "700"
  },
  text2: {
    color: "#635BFF",
    fontWeight: "500",
    fontSize: 12,
  },
  text: {
    color: "#666",
    fontWeight: "500",
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
    borderRadius: 15
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
    fontWeight: "900",
    color: "#333"
  },
  columnDateText2:{
    fontSize: 12,
    color: "#666",
    fontWeight: "400"
  },
  amountText:{
    fontWeight: "900",
    fontSize: 14,
    color: "#13C782"
  },
  amountText2:{
    fontWeight: "900",
    fontSize: 14,
    color: "#F60909"
  },
  AllItems:{
    marginBottom: 100
  },
})
