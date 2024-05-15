import { Image, Pressable } from "react-native"
import { height, width, totalSize } from 'react-native-dimension'

export const Custom = ({ onPress, source, size, style }) => {
    const defaultSize = size || totalSize(2.5)
    return (
        <Pressable
            onPress={onPress}
        >
            <Image
                source={source}
                style={[{ height: defaultSize, width: defaultSize }, style]}
                resizeMode="contain"
            />
        </Pressable>
    )
}