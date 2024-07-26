// app/Onboarding1.tsx
import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, Animated, Image, NativeScrollEvent, NativeSyntheticEvent, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { Slide } from './types';
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

const { width } = Dimensions.get('window');

const slides: Slide[] = [
  {
    key: '1',
    title: 'Track Your Expenses',
    description: 'Easily monitor your daily spending and manage your budget effectively.',
    image: require('../assets/images/1.png'),
  },
  {
    key: '2',
    title: 'Set Financial Goals',
    description: 'Plan for the future by setting financial goals. Whether you\'re saving for a vacation or a new home, we\'ll help you stay on track and reach your milestones.',
    image: require('../assets/images/2.png'),
  },
  {
    key: '3',
    title: 'Get Personalized Insights',
    description: 'Receive tailored financial insights and tips based on your spending habits. Make informed decisions with our personalized recommendations to maximize your savings.',
    image: require('../assets/images/3.png'),
  },
];

const Onboarding: React.FC = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / width);
    setCurrentIndex(index);
  };

  const renderItem = ({ item }: { item: Slide }) => (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={slides}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        onMomentumScrollEnd={handleScroll}
      />
      <View style={styles.pagination}>
        {slides.map((_, index) => (
          <View key={index} style={[styles.dot, currentIndex === index && styles.activeDot]} />
        ))}
      </View>
      {currentIndex === 2 && (
        <Pressable style={styles.button} onPress={() => router.push('/getstarted')}>
          <Text style={styles.buttonText}>Get Started</Text>
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width,
  },
  image: {
    width: '80%',
    height: '50%',
    resizeMode: 'contain',
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Bold',
    color: '#222',
    textAlign: 'center',
    marginVertical: 10,
    marginBottom: 6,
  },
  description: {
    fontSize: 15,
    color: '#666',
    textAlign: 'center',
    marginBottom: 80,
    paddingHorizontal: 20,
    fontFamily: 'Regular'
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
  },
  dot: {
    height: 10,
    width: 10,
    backgroundColor: '#888',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#635BFF',
  },
  button: {
    position: 'absolute',
    bottom: 80,
    backgroundColor: "#635BFF",
    paddingVertical: 13,
    paddingHorizontal: 110,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Medium",
  },
});

export default Onboarding;
