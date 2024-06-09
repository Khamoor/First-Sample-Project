import { Image, Pressable } from 'react-native'
import { height, width, totalSize } from 'react-native-dimension'
import LinearGradient from 'react-native-linear-gradient';
import { Icon } from '@rneui/base';
import { colors } from '../../services/utilities';

export const Custom = ({ onPress, source, size, style }) => {
    const defaultSize = size || totalSize(2.5)  // Default size if not provided
    return (
        <Pressable
            onPress={onPress}
            disabled={!onPress}
        >
            <Image
                source={source}
                style={[{ height: defaultSize, width: defaultSize }, style]}
                resizeMode="contain"
            />
        </Pressable>
    )
}

export const Button = ({
    onPress,        // Function to handle press events
    buttonSize,     // Size of the button
    gradientColors, // Colors for the gradient background
    customIcon,     // Source of the custom icon image
    iconSize,       // Size of the icon
    buttonStyle,    // Additional styles for the button
    iconColor,      // Color of the icon
    iconName,       // Name of the icon (if using a predefined icon)
    iconType,       // Type of the icon (if using a predefined icon)
    containerStyle, // Additional styles for the pressable container
    buttonColor,    // Color of the Button
}) => {
    const defaultButtonSize = buttonSize || totalSize(5)    // Default button size if not provided
    const defaultIconSize = iconSize || totalSize(3.5)      // Default icon size if not provided
    const defaultColors = buttonColor ? [buttonColor, buttonColor] : gradientColors || colors.appGradient2
    return (
        <Pressable
            onPress={onPress}
            style={[
                {
                    borderRadius: 100,
                    backgroundColor: colors.appBackgrounColor1
                },
                containerStyle]}
        >
            <LinearGradient
                colors={defaultColors}
                style={[{ height: defaultButtonSize, width: defaultButtonSize, borderRadius: 100, alignItems: 'center', justifyContent: 'center' }, buttonStyle]}
            >
                {
                    customIcon ? (
                        <Custom
                            source={customIcon}
                            size={defaultIconSize}
                            color={iconColor}
                        />
                    ) : iconName ? (
                        <Icon
                            name={iconName}
                            type={iconType}
                            size={defaultIconSize}
                            color={iconColor}
                        />
                    ) : null
                }
            </LinearGradient>
        </Pressable>
    )
}