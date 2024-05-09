import { View } from "react-native";

export default function ForecastItem({temperature, time}){
    return <View>
            {time.split('T')[1]} - {temperature}
    </View>
}
