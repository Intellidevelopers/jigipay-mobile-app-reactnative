import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BottomSheet from '@gorhom/bottom-sheet';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import CustomImagePicker from '../components/CustomImagePicker';
import { router } from 'expo-router';

const profile: React.FC = () => {
  const [profile, setProfile] = useState({
    name: 'Adeagbo Josiah Adebayo',
    dateOfBirth: new Date(2024, 7, 23),
    gender: 'Male',
    picture: null as string | null,
  });

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [currentSheet, setCurrentSheet] = useState<'name' | 'date' | 'gender' | null>(null);

  const nameSheetRef = useRef<BottomSheet>(null);
  const dateSheetRef = useRef<BottomSheet>(null);
  const genderSheetRef = useRef<BottomSheet>(null);

  const openSheet = (sheet: 'name' | 'date' | 'gender') => {
    if (currentSheet !== null) {
      closeSheet(currentSheet);
    }
    setCurrentSheet(sheet);
    if (sheet === 'name') {
      nameSheetRef.current?.expand();
    } else if (sheet === 'date') {
      dateSheetRef.current?.expand();
    } else if (sheet === 'gender') {
      genderSheetRef.current?.expand();
    }
  };

  const closeSheet = (sheet: 'name' | 'date' | 'gender') => {
    if (sheet === 'name') {
      nameSheetRef.current?.close();
    } else if (sheet === 'date') {
      dateSheetRef.current?.close();
    } else if (sheet === 'gender') {
      genderSheetRef.current?.close();
    }
    setCurrentSheet(null);
  };

  const handleNameChange = (newName: string) => {
    setProfile({ ...profile, name: newName });
    closeSheet('name');
  };

  const handleDateChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    const currentDate = selectedDate || profile.dateOfBirth;
    setShowDatePicker(false);
    setProfile({ ...profile, dateOfBirth: currentDate });
    closeSheet('date');
  };

  const handleGenderChange = (newGender: string) => {
    setProfile({ ...profile, gender: newGender });
    closeSheet('gender');
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Profile Setting</Text>
        </View>
        <View style={styles.profileContainer}>
          <CustomImagePicker picture={profile.picture} onChangePicture={(uri) => setProfile({ ...profile, picture: uri })} />
          <Text style={styles.profileName}>{profile.name}</Text>
        </View>
        <View style={styles.profileContainerItems}>
        <TouchableOpacity style={styles.item} onPress={() => openSheet('name')}>
          <Text style={styles.itemText}>Real Name</Text>
          <Text style={styles.itemValue}>{profile.name}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => openSheet('date')}>
          <Text style={styles.itemText}>Date of Birth</Text>
          <Text style={styles.itemValue}>{profile.dateOfBirth.toDateString()}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => openSheet('gender')}>
          <Text style={styles.itemText}>Gender</Text>
          <Text style={styles.itemValue}>{profile.gender}</Text>
        </TouchableOpacity>
        </View>

        {currentSheet && (
          <TouchableOpacity
            style={styles.overlay}
            activeOpacity={1}
            onPress={() => closeSheet(currentSheet)}
          />
        )}

        {/* Bottom Sheets */}
        <BottomSheet ref={nameSheetRef} snapPoints={['25%', '50%']} index={-1} onClose={() => setCurrentSheet(null)}>
          <View style={styles.bottomSheet}>
            <Text style={styles.sheetTitle}>Enter your name</Text>
            <TextInput style={styles.textInput} value={profile.name} onChangeText={handleNameChange} />
            <Button title="Save" onPress={() => handleNameChange(profile.name)} />
          </View>
        </BottomSheet>
        <BottomSheet ref={dateSheetRef} snapPoints={['25%', '50%']} index={-1} onClose={() => setCurrentSheet(null)}>
          <View style={styles.bottomSheet}>
            <Text style={styles.sheetTitle}>Select Date of Birth</Text>
            {showDatePicker && (
              <DateTimePicker value={profile.dateOfBirth} mode="date" display="default" onChange={handleDateChange} />
            )}
            <Button title="Pick Date" onPress={() => setShowDatePicker(true)} />
          </View>
        </BottomSheet>
        <BottomSheet ref={genderSheetRef} snapPoints={['25%', '50%']} index={-1} onClose={() => setCurrentSheet(null)}>
          <View style={styles.bottomSheet}>
            <Text style={styles.sheetTitle}>Select Gender</Text>
            <TouchableOpacity onPress={() => handleGenderChange('Male')}>
              <Text style={styles.genderOption}>Male</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleGenderChange('Female')}>
              <Text style={styles.genderOption}>Female</Text>
            </TouchableOpacity>
          </View>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
};

export default profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    marginTop: 40,
    gap: 80
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  profileContainer: {
    alignItems: 'center',
    marginVertical: 20,
    backgroundColor: "#fff",
    paddingVertical: 10,
    borderRadius: 15,
    marginBottom: 30
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: "#333"
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  itemText: {
    fontSize: 14,
    fontWeight: "500"
  },
  itemValue: {
    fontSize: 14,
    color: '#635bff',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  bottomSheet: {
    padding: 20,
  },
  sheetTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  genderOption: {
    fontSize: 16,
    paddingVertical: 10,
  },
  profileContainerItems:{
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10
  }
});
