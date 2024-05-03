import { useContext, useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { ClimaContext } from "./ClimaContext";

export default function Location() {
    const [lat, setLat] = useState('')
    const [lon, setLon] = useState('')
    const { buildUrl, setApiUrl } = useContext(ClimaContext)

    const updateLocation = () => {
        setApiUrl(buildUrl(lat, lon))
        console.log('URL', buildUrl(lat, lon));
    }

    return <View style={{ display: "flex" }}>
        <View style={{ flexDirection: "row" }}>
            <Text>Latitud:</Text>
            <TextInput onChangeText={setLat} />
        </View>
        <View style={{ flexDirection: "row" }}>
            <Text>Longitud:</Text>
            <TextInput onChangeText={setLon} />
        </View>
        <Button title="Buscar" onPress={updateLocation} />
    </View>
}
