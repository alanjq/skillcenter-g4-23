import { Image, StyleSheet, Text, View } from "react-native";

export default function CityWeather({ name, country, timezone, image }) {
    return <View style={styles.container}>
        <View style={styles.row}>
            <Text style={styles.col}>{name}, {country}</Text>
        </View>
        <View style={styles.row}>
            <Image source={{ uri: image }} width={50} height={50} />
            <Text style={styles.col}>{timezone}</Text>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        borderColor: '#DDD',
        borderWidth: 1,
        marginVertical: 5,
        paddingVertical: 4,
        paddingHorizontal: 8,
        flex: 1,
    },
    row: {
        flexDirection: "row",
        marginTop: 3,
        flexGrow: 1,
        marginBottom: 3
    },
    col: {
        flexDirection: "column"
    },


})
