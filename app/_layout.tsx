import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect, useState } from 'react';
import 'react-native-reanimated';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [fontsLoaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    // Add other fonts as needed
  });

  const router = useRouter();

  useEffect(() => {
    async function prepare() {
      try {
        // You can load any resources or data that you need here.
        if (fontsLoaded) {
          // Artificially delay for two seconds to simulate a slow loading experience.
          setAppIsReady(true);
        }
      } catch (e) {
        console.warn(e);
      }
    }

    prepare();
  }, [fontsLoaded]);

  useEffect(() => {
    if (appIsReady) {
      SplashScreen.hideAsync();
      router.replace('/Splash'); // Navigate to the main content after the splash screen
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack>
        <Stack.Screen name="Splash" options={{ headerShown: false }} />
        <Stack.Screen name="Settings" options={{ headerShown: false }} />
        <Stack.Screen name="TransactionDetails" options={{ headerShown: false }} />
        <Stack.Screen name="AddEmail" options={{ headerShown: false }} />
        <Stack.Screen name="Transfer" options={{ headerShown: false }} />
        <Stack.Screen name="Onboarding" options={{ headerShown: false }} />
        <Stack.Screen name="HomeAddressScreen" options={{ headerShown: false }} />
        <Stack.Screen name="getstarted" options={{ headerShown: false }} />
        <Stack.Screen name="Signup" options={{ headerShown: false }} />
        <Stack.Screen name="OtpVerification" options={{ headerShown: false }} />
        <Stack.Screen name="AddPersonalInfoScreen" options={{ headerShown: false }} />
        <Stack.Screen name="CountryResident" options={{ headerShown: false }} />
        <Stack.Screen name="PinSetup" options={{ headerShown: false }} />
        <Stack.Screen name="Scan" options={{ headerShown: false }} />
        <Stack.Screen name="Beneficiaries" options={{ headerShown: false }} />
        <Stack.Screen name="SendMoney" options={{ headerShown: false }} />
        <Stack.Screen name="PasscodeScreen" options={{ headerShown: false }} />
        <Stack.Screen name="Profile" options={{ headerShown: false }} />
        <Stack.Screen name="MoreScreen" options={{ headerShown: false }} />
        <Stack.Screen name="Login" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="TwoStepVerificationScreen" options={{ headerShown: false }} />
        <Stack.Screen name="EnterCodeScreen" options={{ headerShown: false }} />
        <Stack.Screen name="BudgetDetails" options={{ headerShown: false }} />
        <Stack.Screen 
          name="Notification" 
          options={{ 
            headerShown: true, 
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontFamily: 'Semibold',
              fontSize: 17  // Customize the header title style as needed
            },
          }} 
        />
      </Stack>
    </ThemeProvider>
  );
}
