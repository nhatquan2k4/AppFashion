import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRemember, setIsRemember] = useState(false);

  return (
    <View style={styles.container}>
      {/* Nửa trên */}
      <ImageBackground source={require('../assets/anh2.png')} style={styles.topSection}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <View style={styles.overlay} />
        <Text style={styles.welcomeText}>Welcome Back!</Text>
      </ImageBackground>

      {/* Nửa dưới */}
      <View style={styles.bottomSection}>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Email address</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="mail-outline" size={25} color="#888" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Enter email"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>
        </View>

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

        <View style={styles.row}>
          <View style={styles.rememberMe}>
            <Checkbox value={isRemember} onValueChange={setIsRemember} color={isRemember ? '#7F00FF' : undefined} />
            <Text style={styles.rememberText}>Remember me</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>LOG IN</Text>
        </TouchableOpacity>

        <View style={styles.signupContainer}>
          <Text>Not registered yet?</Text>
          <TouchableOpacity>
            <Text style={styles.signupText}> Create an Account</Text>
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
    flex: 1.1, // Nửa trên chiếm 1.2 phần
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
    top: 40, // Điều chỉnh khoảng cách xuống dưới 
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
    flex: 1.8, // Nửa dưới chiếm 1.8 phần
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  rememberMe: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberText: {
    marginLeft: 5,
  },
  forgotText: {
    color: '#7F00FF',
    fontWeight: 'bold',
  },
  loginButton: {
    backgroundColor: '#7F00FF',
    padding: 15,
    borderRadius: 56,
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  loginText: {
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
