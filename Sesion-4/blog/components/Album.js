import { Image, Text, View } from "react-native"

export default function Album({ id, title, image, link }) {
    // Mostrar imágenes del mismo álbum
    return <View style={{ flexDirection: "row" }}>
        <Text>{title}</Text>
        <Image source={{ uri: image }} height={20} width={50} />
        <Text>{link}</Text>
    </View>
}
