import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function ListItem({el, deleteCard}) {

    return (
        <TouchableOpacity onPress={() => deleteCard(el.key)}>
            <Text style={styles.text}>{el.text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text: {
        backgroundColor: 'green',
        opacity: 0.5,
        padding: 20,
        color: '#fff',
        fontSize: 24,
        textAlign: 'center',
        borderWidth: 2,
        marginTop: 20,
        width: '60%',
        marginLeft: '20%',
        borderRadius: 5,
    }
});
