import { StyleSheet, Text } from "react-native";


export function Despedida({ nombre }) {
    return <Text style={variosEstilos.clase1}>Hasta luego {nombre} </Text>
}

const styles = StyleSheet.create({
    fontSize: 40,
    color: "brown"
});

const variosEstilos = StyleSheet.create({
    clase1: {
        color: 'red',
        fontSize: 30
    },
    componenteB: {
        color: 'purple',
        fontSize: 50
    }
})
