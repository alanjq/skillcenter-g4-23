import { Image, Text, View } from "react-native";

export default function AlbumItem({ title, albumImage }) {
    return <View style={{ alignSelf: "flex-start", width: "45%", flexDirection: "column", marginVertical: 10 }}>
        <Image source={{
            uri: albumImage
        }}
            height={50}
            width={50}
        />
        <Text>{title}</Text>
    </View>
}