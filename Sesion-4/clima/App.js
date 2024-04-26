import { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import CityWeather from './components/CityWeather';
import LocationInput from './components/LocationInput';

export default function App() {
  const [nombreCiudad, setNombreCiudad] = useState('')
  const [cityList, setCityList] = useState([])
  const apiUrl = (ciudad) => `https://www.meteoblue.com/es/server/search/query3?query=${ciudad}&apikey=DEMOKEY`

  useEffect(() => {
    // Traemos los datos de la API
    fetch(apiUrl(nombreCiudad.replace(" ", "%20")))
      .then((response) => response.json())
      .then((data) => data.results)
      .then((results) => setCityList(results))
      .catch(() => {
        setCityList([])
        console.log('No hay resultados.')
      })
  }, [nombreCiudad])

  return (
    <SafeAreaView style={styles.container}>
      <LocationInput onChangeText={setNombreCiudad} />

      <ScrollView style={styles.cityContainer}>
        {cityList.map((ciudad, i) => <CityWeather key={i}
          name={ciudad.name}
          country={ciudad.country}
          timezone={ciudad.timezone}
          image={`https://picsum.photos/2${i}/`} />)}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cityContainer: {
    width: "100%",
    rowGap: 5,
    flexDirection: 'column',
    flex: 1,
    paddingHorizontal: 3,
    marginTop: 20
  }
});
