import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { theme } from '../core/theme.js';
import { Button } from '../components/Buttons.js';
import { useNavigation } from '@react-navigation/native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        marginTop: 20,
        fontSize: 16,
        color: '#6200ee',
    },
});

export default function LoadingScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#6200ee" />
            <Text style={styles.text}>Loading...</Text>

        </View>
    );
}