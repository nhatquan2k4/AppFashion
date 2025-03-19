import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { useNavigation} from '@react-navigation/native';

export default function CodeScreen(){
    const navigation = useNavigation();

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.subtitle}>Enter the code sent to your email</Text>
            <TextInput style={styles.input} placeholder="Enter code" keyboardType="number-pad"/>
            <TouchableOpacity style={styles.button} onPress={() => navigation.push('Reset')}>
                <Text style={styles.buttonText}>Verify</Text>
            </TouchableOpacity>
        </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
        container:{
            flex:1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        subtitle:{
            fontSize: 16,
            marginBottom: 20,
        },
        input:{
            borderWidth: 1,
            borderRadius: 10,
            width: '80%',
            padding: 12,
            marginBottom: 20,
            color: 'gray',
        },
        button:{
            backgroundColor: '#6342E8',
            paddingVertical: 12,
            width: '80%',
            alignItems: 'center',
            borderRadius: 54
        },
        buttonText:{
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
        },
        backButton: { 
            position: 'absolute', 
            top: 40, 
            left: 10, 
            padding: 10,
            zIndex: 10,
        },
    }
)