import { StyleSheet, Text } from "react-native";


export function Despedida({ nombre }) {
    return <Text style={styles}>Hasta luego {nombre} </Text>
}

const styles = StyleSheet.create({
    fontSize: 40,
    color: "brown"
});