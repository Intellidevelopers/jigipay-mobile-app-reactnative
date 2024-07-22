import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

const OTPVerification = ({ phoneNumber }: { phoneNumber: string }) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isValid, setIsValid] = useState(true);

  const inputs = useRef<TextInput[]>([]);

  const handleChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    validateOtp(newOtp);

    // Move to the next input if a digit is entered
    if (text && index < otp.length - 1) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && index > 0 && otp[index] === '') {
      inputs.current[index - 1].focus();
    }
  };

  const validateOtp = (otpArray: string[]) => {
    const otpString = otpArray.join('');
    setIsValid(otpString.length === 6);
  };

  const handleVerify = () => {
    const otpString = otp.join('');
    if (isValid && otpString.length === 6) {
      // Add your OTP verification logic here
      console.log('OTP is valid:', otpString);
    } else {
      console.log('OTP is invalid');
    }
  };

  const handleResend = () => {
    // Add your resend OTP logic here
    console.log('Resend OTP');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Confirm your phone</Text>
      <Text style={styles.subText}>We sent a 6 digit code to {phoneNumber}</Text>
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputs.current[index] = ref!)}
            style={styles.otpInput}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
            onKeyPress={(e) => handleKeyPress(e, index)}
            keyboardType="number-pad"
            maxLength={1}
          />
        ))}
      </View>
      <Text style={styles.resendText}>
        Didn't get a code?{' '}
        <Text style={styles.resendLink} onPress={handleResend}>
          Resend
        </Text>
      </Text>
      <TouchableOpacity
        style={[styles.verifyButton, isValid ? styles.verifyButtonActive : styles.verifyButtonDisabled]}
        onPress={() => router.push('/AddEmail')}
        disabled={!isValid}
      >
        <Text style={styles.verifyButtonText}>Verify Your Number</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OTPVerification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  headerText: {
    marginTop: 60,
    fontSize: 20,
    fontWeight: '700',
  },
  subText: {
    color: '#666',
    marginBottom: 20,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  otpInput: {
    width: 40,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    fontSize: 18,
    textAlign: 'center',
  },
  resendText: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
  },
  resendLink: {
    color: '#635BFF',
    fontWeight: 'bold',
  },
  verifyButton: {
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  verifyButtonActive: {
    backgroundColor: '#635BFF',
  },
  verifyButtonDisabled: {
    backgroundColor: '#ccc',
  },
  verifyButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
