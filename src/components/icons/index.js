import { Image, Pressable } from 'react-native'
import { height, width, totalSize } from 'react-native-dimension'
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../services/utilities';

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

export const Button = ({ onPress, buttonSize, gradientColors, customIcon, iconSize, buttonStyle }) => {
    const defaultButtonSize = buttonSize || totalSize(5)
    const defaultIconSize = iconSize || totalSize(3.5)
    return (
        <Pressable
            onPress={onPress}
        >
            <LinearGradient
                colors={gradientColors || colors.appGradient2}
                style={[{ height: defaultButtonSize, width: defaultButtonSize, borderRadius: 100, alignItems: 'center', justifyContent: 'center' }, buttonStyle]}
            >
                <Custom
                    source={customIcon}
                    size={defaultIconSize}
                />
            </LinearGradient>
        </Pressable>
    )
}