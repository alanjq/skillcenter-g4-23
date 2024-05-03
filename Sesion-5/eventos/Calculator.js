import { useContext, useState } from "react";
import { Text, TextInput, View } from "react-native";
import { CurrencyContext } from "./CurrencyContext";

export default function Calculator() {
    const { USD, GBP, EUR } = useContext(CurrencyContext)
    const [input, setInput] = useState(0)


    return <View style={{ marginTop: 30 }}>
        <Text>Ingresa un valor</Text>
        <TextInput onChangeText={setInput} />
        <Text>USD: {parseInt(input||0) * (USD?.rate || 0)}</Text>
        <Text>GBP: {parseInt(input||0) * (GBP?.rate || 0)}</Text>
        <Text>EUR: {parseInt(input||0) * (EUR?.rate || 0)}</Text>
    </View>
}
