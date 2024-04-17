import { StyleSheet, Text, View } from "react-native";


export function Navbar({ username, username2 }) {

    return <View style={style.container}>
        <Text style={style.menuItem}>Contact</Text>
        <Text style={style.menuItem}>Profile</Text>
        <Text style={style.menuItem}>{username}</Text>
        <Text style={style.menuItem}>{username2}</Text>
    </View>
}

const style = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        padding: 10,
        backgroundColor: "#333",
        color: "#FFF"
    },

    menuItem: {
        color: "white",
        paddingHorizontal: 3,
    }
})
