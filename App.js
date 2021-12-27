import React, { useState } from 'react';
import Header from './components/Header';
import ListItem from './components/ListItem';
import Form from './components/Form';
import { StyleSheet, SafeAreaView, FlatList, ImageBackground, View } from 'react-native';

const image = { uri: "https://i.pinimg.com/originals/35/9c/3a/359c3a0435ec51814a90e752bf4329d0.jpg" };

export default function App() {

  const [listOfItems, setListOfItems] = useState([])

  const addHandler = (text) => {
    if (text != '') {
      setListOfItems((list) => {
        return [
          { text: text, key: Math.random().toString(36).substring(7) },
          ...list
        ]
      })
    }
  }
  const deleteCard = (key) => {
    setListOfItems((list) => {
      return list.filter(listOfItems => listOfItems.key != key)
    })
  }

  return (
    <SafeAreaView style={styles.backImg}>
      <ImageBackground source={image} resizeMode="cover" style={styles.backImg}>

        {/* <Header /> */}
        <Form addHandler={addHandler} />
        <View>
          <FlatList data={listOfItems} renderItem={({ item }) => (
            <ListItem el={item} deleteCard={deleteCard}></ListItem>
          )}>
          </FlatList>
        </View>

      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backImg: {
    flex: 1,
  },
});
