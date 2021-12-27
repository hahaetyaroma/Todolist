import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function Header() {

    return (
        <View style={styles.main}>
            <Text style={styles.text}>Список дел</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        paddingTop: 50,
        height: 100,
    },
    text: {
        backgroundColor: '#000',
        height: 50,
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
    },
});
