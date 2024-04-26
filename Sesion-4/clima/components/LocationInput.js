import { TextInput, View, StyleSheet, Text } from "react-native";

export default function LocationInput({ onChangeText }) {
    return <View style={{ width: "100%", paddingHorizontal: 5 }}>
        <Text>Ingresa el nombre de la ciudad</Text>
        <TextInput onChangeText={onChangeText} style={style} placeholder="Ingresa la ciudad" />
    </View>
}

const style = StyleSheet.create({
    borderWidth: 1,
    padding: 5,
    flexDirection: "column",
})
