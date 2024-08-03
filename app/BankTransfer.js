import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const BankTransfer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Bank Transfer</Text>
      </View>

      <Text style={styles.headText}>Transfer money to your personal account and get your wallet funded</Text>
        <View style={styles.card}>
            <View style={styles.row}>
                <Text style={styles.label}>Account Number</Text>
                <Text style={styles.value}>9606831944</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.label}>Account Name</Text>
                <Text style={styles.value}>JIGIPAY JOSIAH ADEAGBO</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.label}>Bank Name</Text>
                <Text style={styles.value}>World Classic MFB</Text>
            </View>
        </View>

        <View style={styles.card2}>
            <View style={styles.row}>
                <Text style={styles.label}>Account Number</Text>
                <Text style={styles.value}>9606831944</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.label}>Account Name</Text>
                <Text style={styles.value}>JIGIPAY JOSIAH ADEAGBO</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.label}>Bank Name</Text>
                <Text style={styles.value}>World Classic MFB</Text>
            </View>
        </View>
    </View>
  );
};

export default BankTransfer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    gap: 55,
    marginTop: 40,
    marginBottom: 30
  },
  headerText: {
    fontSize: 18,
    fontFamily: 'Semibold',
    marginLeft: 20,
  },

  card:{
    borderWidth: 2,
    padding: 10,
    borderColor: "#4945FF",
    borderRadius: 10,
    marginBottom: 20
  },
  card2:{
    borderWidth: 2,
    padding: 10,
    borderColor: "#eee",
    borderRadius: 10,
    marginBottom: 20
  },
  row:{
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10
  },
  label:{
    fontFamily: "Regular"
  },
  value:{
    fontFamily: "Semibold",
    color: "#333"
  },
  headText:{
    marginBottom: 30,
    fontFamily: "Regular",
    color: "#333"
  }
});
