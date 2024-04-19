import { StyleSheet, View } from 'react-native';
import { Despedida } from './components/Despedida';
import { Saludo } from './components/Saludo';

export default function App() {
  return (
    <View style={styles.container}>
      <Despedida nombre="Sergio" />
      <Saludo nombre="Ivy" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
