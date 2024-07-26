import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Feather, FontAwesome6, Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const Budget = () => {
  return (
    <ImageBackground source={require('../../assets/images/Card.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Ionicons name='arrow-back' size={24} color={'#ddd'} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Budget</Text>
          <Feather name='more-horizontal' size={25} color={"#ddd"}/>
        </View>
        <Text style={styles.amountText}>₦29,880 left</Text>
        <Text style={styles.budgetedText}>Out of ₦80,888 budgeted</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>+ Create new budget</Text>
        </TouchableOpacity>
        <View style={styles.cardContainer}>
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.cardScrollContainer}>
            <TouchableOpacity onPress={() => router.push('/BudgetDetails')}>
            <View style={styles.card}>
              <View style={styles.cards}>
                <Image source={require('../../assets/notification/5.png')} style={styles.icon} />
              <View style={styles.cardsd}>
                  <Text style={styles.cardSubtitle}>Flexing Budget</Text>
                  <Text style={styles.cardText}>₦500 daily</Text>
              </View>
                <Text style={styles.cardAmount}>₦200,000.00</Text>
              </View>
              <Text style={styles.cardStatus}>You are doing really great! 🎉</Text>
            </View>
            </TouchableOpacity>

            <View style={styles.card}>
              <View style={styles.cards}>
                <Image source={require('../../assets/notification/5.png')} style={styles.icon} />
              <View style={styles.cardsd}>
                  <Text style={styles.cardSubtitle}>Flexing Budget</Text>
                  <Text style={styles.cardText}>₦500 daily</Text>
              </View>
                <Text style={styles.cardAmount}>₦200,000.00</Text>
              </View>
              <Text style={styles.cardStatus}>You are doing really great! 🎉</Text>
            </View>

            <View style={styles.card}>
              <View style={styles.cards}>
                <Image source={require('../../assets/notification/5.png')} style={styles.icon} />
              <View style={styles.cardsd}>
                  <Text style={styles.cardSubtitle}>Flexing Budget</Text>
                  <Text style={styles.cardText}>₦500 daily</Text>
              </View>
                <Text style={styles.cardAmount}>₦200,000.00</Text>
              </View>
              <Text style={styles.cardStatus}>You are doing really great! 🎉</Text>
            </View>

            <View style={styles.card}>
              <View style={styles.cards}>
                <Image source={require('../../assets/notification/5.png')} style={styles.icon} />
              <View style={styles.cardsd}>
                  <Text style={styles.cardSubtitle}>Flexing Budget</Text>
                  <Text style={styles.cardText}>₦500 daily</Text>
              </View>
                <Text style={styles.cardAmount}>₦200,000.00</Text>
              </View>
              <Text style={styles.cardStatus}>You are doing really great! 🎉</Text>
            </View>

            <View style={styles.card}>
              <View style={styles.cards}>
                <Image source={require('../../assets/notification/5.png')} style={styles.icon} />
              <View style={styles.cardsd}>
                  <Text style={styles.cardSubtitle}>Flexing Budget</Text>
                  <Text style={styles.cardText}>₦500 daily</Text>
              </View>
                <Text style={styles.cardAmount}>₦200,000.00</Text>
              </View>
              <Text style={styles.cardStatus}>You are doing really great! 🎉</Text>
            </View>
          </ScrollView>
          <View style={styles.divider}></View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: -500,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'Medium',
  },
  amountText: {
    fontSize: 30,
    color: '#fff',
    fontFamily: 'Bold',
    marginBottom: -5,
  },
  budgetedText: {
    fontSize: 14,
    color: '#fff',
    fontFamily: 'Regular',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 25,
    marginBottom: 20,
  },
  buttonText: {
    color: '#635BFF',
    fontFamily: 'Semibold',
    fontSize: 12,
  },
  cardContainer: {
    backgroundColor: '#f3f3f3',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: '110%',
    height: '65%', // Adjust height as needed
    position: 'absolute',
    bottom: 0,
    padding: 20,
    paddingBottom: 40, // Extra space at the bottom if needed

  },
  cardScrollContainer: {
    paddingBottom: 20, // Space at the bottom of the scroll view
  },
  card: {
    backgroundColor: '#635BFF',
    borderRadius: 12,
    padding: 10,
    marginBottom: 20,
    marginTop: 7,
  },
  cards: {
    backgroundColor: '#635BFF',
    borderRadius: 12,
    padding: 10,
    marginBottom: 20,
    marginTop: 7,
    flexDirection: "row",
    paddingVertical: 2
  },
  cardTitle: {
    color: '#fff',
    fontFamily: 'Bold',
    fontSize: 14,
  },
  cardSubtitle: {
    color: '#fff',
    fontFamily: 'Semibold',
    fontSize: 14,
  },
  cardAmount: {
    color: '#21F46A',
    fontFamily: 'Semibold',
    fontSize: 12,
    marginBottom: 5,
  },
  cardText: {
    color: '#fff',
    fontFamily: 'Regular',
    fontSize: 13,
    marginBottom: 5,
  },
  cardStatus: {
    color: '#fff',
    fontFamily: 'Medium',
    fontSize: 13,
    left: 45
  },
  icon:{
    width: 40,
    height: 40,
    borderRadius: 100,
    marginRight: 10,
    marginLeft: -10
  },
  cardsd:{
    marginRight: 60
  },
  divider:{
    marginBottom: 40
  }
});

export default Budget;
