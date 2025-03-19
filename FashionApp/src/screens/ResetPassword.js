import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ResetPassword() {
    const navigation = useNavigation();
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleResetPassword = () => {
        if (!newPassword || !confirmPassword) {
            Alert.alert('Error', 'Vui lòng nhập đầy đủ thông tin');
            return;
        }

        if (newPassword.length < 6) {
            Alert.alert('Error', 'Mật khẩu phải có ít nhất 6 ký tự');
            return;
        }

        if (newPassword !== confirmPassword) {
            Alert.alert('Error', 'Mật khẩu và xác nhận mật khẩu không khớp');
            return;
        }

        // Giả lập xử lý đặt lại mật khẩu (thay bằng API thực tế nếu có)
        Alert.alert('Success', 'Mật khẩu đã được đặt lại thành công!');
        navigation.push('Login'); // Điều hướng về màn hình đăng nhập
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.subtitle}>Enter your new password</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter new password"
                    value={newPassword}
                    onChangeText={setNewPassword}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Confirm new password"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />
                <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
                    <Text style={styles.buttonText}>Reset</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderRadius: 10,
        width: '80%',
        padding: 12,
        marginBottom: 20,
        color: 'gray',
    },
    button: {
        backgroundColor: '#6342E8',
        paddingVertical: 12,
        width: '80%',
        alignItems: 'center',
        borderRadius: 54,
    },
    buttonText: {
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
});