import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { ClimaContext } from './ClimaContext';
import ForecastItem from './ForecastItem';
import Location from './Location';

// API CLIMA:


export default function App() {
  const [apiurl, setApiUrl] = useState('')
  // Con este método creamos la URL a llamar
  const buildUrl = (latitud, longitud) => `https://api.open-meteo.com/v1/forecast?latitude=${latitud}&longitude=${longitud}&hourly=temperature_2m,relative_humidity_2m,rain`
  // const API_URL = 'https://api.open-meteo.com/v1/forecast?latitude=23&longitude=-102&hourly=temperature_2m,relative_humidity_2m,rain'
  const [results, setResults] = useState({})
  const [time, setTime] = useState([])
  const [temperature, setTemperature] = useState([])

  useEffect(() => {
    fetch(apiurl)
      .then(r => r.json())
      .then((data) => {
        setResults(data)
        setTemperature(data.hourly.temperature_2m)
        setTime(data.hourly.time)
      })
  }, [apiurl])

  return (
    <View style={styles.container}>
      <ClimaContext.Provider value={{ setApiUrl, buildUrl }}>
        <Location />

        <ScrollView style={{width: "100%"}}>
          {temperature && temperature.map((item, k) => <ForecastItem key={k} temperature={item} time={time[k]} />)}
        </ScrollView>
      </ClimaContext.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
