import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ForgotPasswordScreen() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');

    // Hàm kiểm tra định dạng email hợp lệ
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSendOTP = async () => {
        if (!email) {
            Alert.alert('Error', 'Vui lòng nhập email');
            return;
        }

        if (!isValidEmail(email)) {
            Alert.alert('Error', 'Email không hợp lệ. Vui lòng nhập đúng định dạng.');
            return;
        }
        navigation.push('Code');
    };
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>

                <View style={styles.content}>
                    <Text style={styles.title}>Forgot password</Text>
                    <Text style={styles.subtitle}>Enter email to receive OTP code</Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Enter email"
                        keyboardType="email-address"
                        value={email}
                        onChangeText={setEmail}
                        autoCapitalize="none"
                    />

                    <TouchableOpacity style={styles.button} onPress={handleSendOTP} >
                        <Text style={styles.buttonText}>Send OTP code</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>

    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: '#fff', 
    },
    backButton: { 
        position: 'absolute', 
        top: 40, 
        left: 10, 
        padding: 10,
        zIndex: 10,
    },
    content: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    title: { 
        fontSize: 24, 
        fontWeight: 'bold', 
        marginBottom: 10 
    },
    subtitle: { 
        fontSize: 16, 
        color: 'gray', 
        marginBottom: 20 
    },
    input: {
        width: '80%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 12,
        marginBottom: 20
    },
    button: {
        backgroundColor: '#6342E8',
        paddingVertical: 12,
        width: '80%',
        alignItems: 'center',
        borderRadius: 54
    },
    buttonText: { 
        color: '#fff', 
        fontSize: 16, 
        fontWeight: 'bold' 
    }
});
