import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, View, TouchableOpacity } from 'react-native';

export default function From({ addHandler }) {

    const [userText, setValue] = useState('');

    const onChange = (text) => {
        setValue(text);
    };

    return (
        <View>
            <TextInput style={styles.input} onChangeText={onChange} placeholder='Введите задачу..' placeholderTextColor="#fff" ></TextInput>
            <TouchableOpacity style={styles.button}>
            <Button color='green' title='Добавить' onPress={() => addHandler(userText)} onPress={() => setText("")}></Button>
            </TouchableOpacity>
        </View>
    );

}

const styles = StyleSheet.create({
    input: {
        backgroundColor: 'green',
        marginTop: 50,
        padding: 10,
        color: '#fff',
        marginHorizontal: '20%',
    },
    button: {
        paddingTop: 15,
        color: '#fff',
        marginHorizontal: '20%',
    }
});
