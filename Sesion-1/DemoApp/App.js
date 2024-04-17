import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Navbar } from './components/Navbar';

// Declarar el componente
export default function App() {
  // Valores y métodos
  const saludo = "Hola mundo"

  // Toda la vista y componentes
  return (
    <SafeAreaView>
      <Navbar username="Sergio" username2="Ivy" />
      <ScrollView>
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
        <View style={styles.contenedor2}>
          <StatusBar style="auto" />
          <Text>Este es un componente Text</Text>
          <Text>==={saludo}===</Text>
          <Text>Esto es desde el móvil con React Native</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  contenedor2: {
    borderColor: '#f00',
    borderWidth: 4,
    marginTop: 80
  }
});
