import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5, Fontisto, Feather } from '@expo/vector-icons';



const create = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/debit-card.png')} style={styles.Image} />
      <Text style={styles.header}>Coming soon...</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
    marginTop: 30
  },
  carouselContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginHorizontal: 40,
  },
  Image: {
    width: '180%',
    height: 120,
    resizeMode: 'contain',
    marginBottom: 10,
    
  },
  cardType: {
    fontSize: 16,
    fontWeight: '500',
  },
  manageCardSection: {
    marginTop: 20,
  },
  manageCardHeader: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
  },
  optionList: {
    padding: 10,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    marginBottom: 10,
  },
  optionText: {
    flex: 1,
    marginLeft: 15,
    fontSize: 15,
    color: '#333',
    fontWeight: "500"
  },
});

export default create;
