import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Button({ mode, style, ...props }) {
    return (
        <TouchableOpacity
            style={[
                styles.button,
                mode === 'outlined' && { backgroundColor: 'transparent', borderColor: '#6200ee', borderWidth: 1 },
                style,
            ]}
            {...props}
        >
            <Text style={styles.text}>Button</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6200ee',
    },
    text: {
        color: 'white',
        fontSize: 16,
    },
});
