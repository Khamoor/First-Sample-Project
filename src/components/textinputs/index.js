import React from 'react'
import { Text, TextInput, View } from 'react-native'
import { colors, fontSizes, fonts } from '../../services/utilities'
import { height, width, totalSize } from 'react-native-dimension'

export function Colored({
    containerStyle,
    title,
    value,
    onChangeText,
    ...props
}) {
    return (
        <View style={[{ marginHorizontal: width(5), backgroundColor: colors.appColor1, borderRadius: 10, paddingHorizontal: width(2.5), }, containerStyle]}>
            <Text style={{ fontSize: fontSizes.tiny, fontFamily: fonts.appFont1Bold, color: colors.appTextColor2, paddingTop: height(1) }}>{title}</Text>
            <TextInput
                value={value}
                onChangeText={onChangeText}
                style={{
                    height: height(5),
                    fontFamily: fonts.appFont1Regular,
                    fontSize: fontSizes.small,
                    color: colors.appTextColor3
                    // backgroundColor:'red'
                }}
                {...props}
            />
        </View>
    )
}