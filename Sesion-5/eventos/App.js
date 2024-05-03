import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Calculator from './Calculator';
import Currency from './Currency';
import { CurrencyContext } from './CurrencyContext';

export default function App() {
  const [data, setData] = useState(null)
  const [currencyUSD, setCurrencyUSD] = useState(null)
  const [currencyGBP, setCurrencyGBP] = useState(null)
  const [currencyEUR, setCurrencyEUR] = useState(null)

  const [currencies, setCurrencies] = useState({})


  const loadInformation = () => {
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then((response) => response.json())
      .then(json => {
        setData(json)
        setCurrencyUSD(json.bpi.USD)
        setCurrencyGBP(json.bpi.GBP)
        setCurrencyEUR(json.bpi.EUR)
        setCurrencies(json.bpi)
      })
      .catch((error) => console.error(error))
  }

  return (
    <View style={styles.container}>
      <CurrencyContext.Provider value={currencies}>

        <Button title="Cargar información" onPress={loadInformation}></Button>
        <Text>Tipos de cambio</Text>
        {data && <Text>{data.disclaimer}</Text>}
        <Currency data={currencyUSD} />
        <Currency data={currencyGBP} />
        <Currency data={currencyEUR} />

        <Calculator />
      </CurrencyContext.Provider>
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
