import { createRef, useState } from 'react';
import { Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput } from 'react-native';
import AppIcon from './assets/icon.png'


export default function App() {
  const [items, setItems] = useState(['Tomate', 'Cebolla'])
  const [newItem, setNewItem] = useState('')
  const refInput = createRef()

  const handleAddItem = () => {
    setItems([newItem, ...items])
    // Borrar el valor de newItem
    setNewItem('')
    refInput.current.value = ""
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Lista del súper</Text>

      <Image source={{ uri: 'assets/icon.png', scale: "20%" }}
      resizeMode="contain"
      style={styles.image} />

      <TextInput style={styles.input}
        placeholder="Escribe un elemento"
        onChangeText={setNewItem}
        ref={refInput}
      />

      <Button title="Agregar a la lista" onPress={handleAddItem} />

      <ScrollView style={styles.itemsContainer}>
        {items.map((item, key) => <Text key={key} style={styles.itemList}> {item} </Text>)}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 50,
    width: 100,
    textAlign: "center",
    alignItems: "center",
    flex: 1
  },
  input: {
    borderColor: "#999",
    marginHorizontal: 10,
    borderWidth: 1,
    padding: 5
  },
  container: {
    flex: 1,
  },
  title: {
    fontSize: 50,
    textAlign: "center"
  },
  itemsContainer: {
    marginTop: 5,
    marginBottom: 10,
  },
  itemList: {
    fontSize: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderBottomColor: "#333",
    borderBottomWidth: 2
  }
});
