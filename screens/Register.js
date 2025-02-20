import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function RegisterScreen({ navigation }) {
  const [yourName, setYourName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View style={styles.container}>
      {/* Top Section */}
      <ImageBackground source={require('../assets/anh2.png')} style={styles.topSection}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <View style={styles.overlay} />
        <Text style={styles.welcomeText}>Welcome!</Text>
        <Text style={styles.subText}>Sign up to start your shopping journey</Text>
      </ImageBackground>

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        {/* Full Name Input */}
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Your Name</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="person-outline" size={25} color="#888" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Enter your full name"
              value={yourName}
              onChangeText={setYourName}
            />
          </View>
        </View>

        {/* Email Input */}
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Email Address</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="mail-outline" size={25} color="#888" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>
        </View>

        {/* Password Input */}
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed-outline" size={25} color="#888" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>
        </View>

        {/* Confirm Password Input */}
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Confirm Password</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed-outline" size={25} color="#888" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Re-enter your password"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
          </View>
        </View>

        {/* Sign Up Button */}
        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.registerText}>REGISTER</Text>
        </TouchableOpacity>

        {/* Navigate to Login Screen */}
        <View style={styles.signupContainer}>
          <Text>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.signupText}> Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topSection: {
    flex: 1.1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 10,
    zIndex: 10,
    padding: 10,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  subText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
  },
  bottomSection: {
    flex: 1.8,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: -3 },
    shadowRadius: 10,
  },
  inputWrapper: {
    width: '100%',
    marginBottom: 15,
  },
  label: {
    alignSelf: 'flex-start',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 12,
    width: '100%',
  },
  icon: {
    marginRight: 15,
  },
  input: {
    flex: 1,
  },
  registerButton: {
    backgroundColor: '#7F00FF',
    padding: 15,
    borderRadius: 56,
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  registerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signupText: {
    color: '#7F00FF',
    fontWeight: 'bold',
  },
});
