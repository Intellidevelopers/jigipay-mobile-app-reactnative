import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack>
        <Stack.Screen name="Transfer" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="Splash" options={{ headerShown: false }} />
        <Stack.Screen name="Onboarding" options={{ headerShown: false }} />
        <Stack.Screen name="AddEmail" options={{ headerShown: false }} />
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
      </Stack>
    </ThemeProvider>
  );
}
