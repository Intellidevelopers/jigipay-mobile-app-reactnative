import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5, Fontisto, Feather } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const cardData = [
  { id: 1, image: require('../../assets/images/debit-card.png'), type: 'Debit Card' },
  { id: 2, image: require('../../assets/images/credit-card.png'), type: 'Credit Card' },
];

const CustomCarousel = ({ data }: { data: any[] }) => {
  return (
    <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.carouselContainer}
    >
      {data.map(item => (
        <View key={item.id} style={styles.card}>
          <Image source={item.image} style={styles.cardImage} />
          <Text style={styles.cardType}>{item.type}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const create = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cards</Text>

      <CustomCarousel data={cardData} />

      <ScrollView style={styles.manageCardSection}>
        <Text style={styles.manageCardHeader}>Manage Card</Text>
        <View style={styles.optionList}>
          <OptionItem icon="wallet" iconLibrary={FontAwesome5} text="Manage Payment Method" />
          <OptionItem icon="locked" iconLibrary={Fontisto} text="Show PIN" />
          <OptionItem icon="unlock" iconLibrary={Feather} text="Unblock PIN" />
          <OptionItem icon="credit-card" iconLibrary={FontAwesome5} text="Replace Card" />
          <OptionItem icon="tachometer-alt" iconLibrary={FontAwesome5} text="Card Limit" />
        </View>
      </ScrollView>
    </View>
  );
};

const OptionItem = ({ icon, iconLibrary: IconLibrary, text }: { icon: string, iconLibrary: any, text: string }) => {
  return (
    <TouchableOpacity style={styles.optionItem}>
      <IconLibrary name={icon} size={20} color="#635BFF" />
      <Text style={styles.optionText}>{text}</Text>
      <Ionicons name="chevron-forward" size={20} color="#000" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
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
    width: width * 0.5,
  },
  cardImage: {
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
