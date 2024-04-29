import React from 'react'
import { View, Text, StyleSheet, ImageBackground, Image, TextInput, Pressable, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import { appImages, colors, fontSizes, fonts } from '../../../services/utilities'
import { height, width, totalSize } from 'react-native-dimension'
import LinearGradient from 'react-native-linear-gradient'
import { Buttons, Scrollviews, Spacer, Textinputs, Texts } from '../../../components'

export default function Index() {
    return (
        // Wrapper
        <View style={styles.mainContainer}>
            <ImageBackground
                source={appImages.background_1}
                style={styles.imageBgContainer}
            >
                {/* Scroll View */}
                <Scrollviews.KeyboardAvoiding>
                    <Spacer height={height(10)} />
                    <View style={{ alignItems: 'center' }}>
                        <Image
                            source={appImages.logo_1}
                            style={styles.logo}
                            resizeMode='contain'
                        />
                    </View>
                    {/* Spacer */}
                    <Spacer isLarge />
                    <Spacer isLarge />
                    {/* Top Text */}
                    <Texts isMedium style={[{ color: colors.appColor1, textAlign: 'center' }]}>Enter your phone number to log in!</Texts>
                    {/* Spacer */}
                    <Spacer isBasic />
                    {/* Text Input */}
                    <Textinputs.Colored
                        title={'Phone'}
                        value={'0973-4444-52899'}
                        onChangeText={() => { }}
                    />
                    {/* Spacer */}
                    <Spacer isBasic />
                    {/* Bottom Text */}
                    <View style={{ marginHorizontal: width(10) }}>
                        <Texts isSmall textColor5 style={[{ textAlign: 'right' }]}>
                            Do not have an account?
                            {' '}
                            <Texts font2Bold>Create</Texts>
                        </Texts>
                    </View>
                    {/* Spacer */}
                    <Spacer height={height(10)} />
                    {/* Button */}
                    <Buttons.ColoredGradient
                        title={'LUBE ME UP!'}
                        onPress={() => { console.log('Pressed') }}
                    />
                    {/* Spacer */}
                    <Spacer isLarge />
                </Scrollviews.KeyboardAvoiding>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    imageBgContainer: {
        flex: 1,
        height: null,
        width: null,
    },
    logo: {
        width: width(70),
        height: width(60),
    },
    topText: {
        color: colors.appColor1,
        fontSize: fontSizes.medium,
        fontFamily: fonts.appFont1Medium,
    },
    bottomText: {
        color: colors.appTextColor4,
        fontSize: fontSizes.small,
        fontFamily: fonts.appFont2Light,
    },
    buttonText: {
        color: colors.appTextColor1,
        fontSize: fontSizes.medium,
        fontFamily: fonts.appFont1Bold,
    },
})