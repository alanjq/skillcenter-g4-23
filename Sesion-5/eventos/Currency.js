import { Text, View } from "react-native";

export default function Currency({ data }) {
    if (!data) {
        return null
    }

    return <View>
        <Text>{data.code} | {data.description}</Text>
        <Text>{data.rate}</Text>
    </View>
}