import { StyleSheet, Text, View } from "react-native"

export const Saludo = ({ nombre }) => {
    return (
        <View>
            <Text style={styles}>Hola {nombre}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    fontSize: 50,
    color: "blue"
});