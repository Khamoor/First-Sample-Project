import React from 'react'
import { Text, TextInput, View } from 'react-native'
import { colors, fontSizes, fonts } from '../../services/utilities'
import { height, width, totalSize } from 'react-native-dimension'
import Wrapper from '../wrapper'

export function Colored({
    containerStyle, // Allows custom styling to be applied to the container view
    title,          // The title or label for the input field
    value,          // The value of the input field
    onChangeText,   // A function to handle text input changes
    inputStyle,     // Allows custom styling to be applied to the input field
    titleStyle,     // Allows custom styling to be applied to the title or label
    right,          // An optional component or element to be rendered on the right side of the input field
    ...props        // Any additional props that can be passed to the TextInput component
}) {
    return (
        <View style={[{ marginHorizontal: width(5), backgroundColor: colors.appColor1, borderRadius: 10, paddingHorizontal: width(3), }, containerStyle]}>
            <Wrapper style={{ flexDirection: 'row' }}>
                <Wrapper flex={1}>
                    <Text style={[{ fontSize: fontSizes.small, fontFamily: fonts.appFont1Bold, color: colors.appTextColor2, paddingTop: height(1) }, titleStyle]}>{title}</Text>
                    <TextInput
                        value={value}
                        onChangeText={onChangeText}
                        // placeholderTextColor={}
                        style={[{
                            height: height(5),
                            fontFamily: fonts.appFont1Regular,
                            fontSize: fontSizes.medium,
                            color: colors.appTextColor3,
                            paddingHorizontal: width(0),    // Removing gap from start of textinput
                            // backgroundColor:'red'
                        }, inputStyle]}
                        {...props}
                    />
                </Wrapper>
                {
                    right ? right : null
                }
            </Wrapper>
        </View>
    )
}