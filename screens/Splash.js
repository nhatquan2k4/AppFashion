import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-web';
import CustomButton from '../components/Button';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={require('../assets/anh2.png')} style={styles.image2} />
      <Image source={require('../assets/anh4.png')} style={styles.image4} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Geeta</Text>
        <Text style = {{fontSize:20, color:'#000', textAlign:'center', fontWeight:'bold', marginTop: 110}}>Create your fashion{'\n'}in your own way</Text>
        <Text style = {{fontSize:12,fontWeight:'bold',marginTop: 30}}>Each men and women has their own style, Geeta {'\n'}          help you to create your unique style.</Text>


          <CustomButton title = "LOGIN" type = 'outline' onPress = {() => navigation.push('Login')} />
          <Text style = {{top: 98, fontSize:14, fontWeight:'bold'}}>--- OR ---</Text>
          <CustomButton title = "REGISTER" type = 'fill'  onPress = {() => navigation.push('Register')} />
  
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image2: {
    flex: 1,
    resizeMode: 'contain',//Ảnh sẽ được co giãn hoặc co lại để vừa khít trong khung hiển thị mà vẫn giữ nguyên tỉ lệ chiều rộng và chiều cao ban đầu.
  },
  image4: {
    flex: 1,
    width: 414, // Chiều rộng ảnh
    height: 875, // Chiều cao ảnh
    position: 'absolute', // Đặt ảnh này lên trên anh 2
    resizeMode: 'contain', 
  },
  textContainer: {
    position: 'absolute',
    top: 80,
    justifyContent: 'top',
    alignItems: 'center',
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default SplashScreen;