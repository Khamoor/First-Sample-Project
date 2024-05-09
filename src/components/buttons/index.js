import React from 'react'
import { Pressable } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { appStyles, colors } from '../../services/utilities'
import Texts from '../texts'
import { height, width, totalSize } from 'react-native-dimension'

export function ColoredGradient({
    title,          // text displayed on the button
    containerStyle, // Additional styles for the button container
    onPress,        // Function to be called when the button is pressed
    gradientStyle,  // Additional styles for the gradient background
    shadowWhite,    // A boolena flag indicating whether to apply a white shadow around the button
}) {
    return (
        // Component is wrapped in a 'Pressable' component to make it pressable. It triggers the 'onPress' function when pressed
        <Pressable onPress={onPress} style={[{
            marginHorizontal: width(5),
            backgroundColor: colors.appBackgrounColor1,
            borderRadius: 100,
        },
        shadowWhite && [appStyles.shadowDark, { shadowColor: colors.appBackgrounColor1 }],
            containerStyle]}>
            <LinearGradient
                //          Top     Left             Top    Right
                start={{ x: 0.0, y: 0.0 }} end={{ x: 1.0, y: 0.0 }}
                // locations={[0.5, 0.5]}
                colors={colors.appGradient1}
                useAngle={true} // Enabling Angle
                angle={90}  // Gradient 90 degree Angle
                angleCenter={{ x: 0.5, y: 0.5 }}    // Gradient starts at center of button
                style={[{
                    height: height(6),
                    borderRadius: 100,
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                    gradientStyle
                ]}>
                <Texts isMedium font1bold>
                    {title}
                </Texts>
            </LinearGradient>
        </Pressable>
    )
}