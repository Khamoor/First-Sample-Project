import React from 'react'
import { View, Text, StyleSheet, ImageBackground, Image, TextInput, Pressable, ScrollView, KeyboardAvoidingView } from 'react-native'
import { appImages, colors, fontSizes, fonts } from '../../../services/utilities'
import { height, width, totalSize } from 'react-native-dimension'
import LinearGradient from 'react-native-linear-gradient'

export default function Index() {
    return (
        <View style={styles.mainContainer}>
            <ImageBackground
                source={appImages.background_1}
                style={styles.imageBgContainer}
            >
                <KeyboardAvoidingView>
                    <ScrollView>
                        <View style={{ height: height(10) }} />
                        <View style={{ alignItems: 'center' }}>
                            <Image
                                source={appImages.logo_1}
                                style={styles.logo}
                                resizeMode='contain'
                            />
                        </View>
                        {/* Spacer */}
                        <View style={{ height: height(10) }} />
                        {/* Top Text */}
                        <Text style={[styles.topText, { textAlign: 'center' }]}>Enter your phone number to log in!</Text>
                        {/* Spacer */}
                        <View style={{ height: height(2.5) }} />
                        {/* Text Input */}
                        <View style={{ marginHorizontal: width(7.5), backgroundColor: colors.appColor1, borderRadius: 10, paddingHorizontal: width(2.5) }}>
                            <Text style={{ fontSize: fontSizes.tiny, /*backgroundColor: 'green'*/ fontFamily: fonts.appFont1Bold, color: colors.appTextColor2, paddingTop: height(1) }}>Phone</Text>
                            <TextInput
                                value='0973-4444-52899'
                                style={{
                                    height: height(5),
                                    fontFamily: fonts.appFont1Regular,
                                    fontSize: fontSizes.small,
                                    color: colors.appTextColor3
                                    // backgroundColor:'red'
                                }}
                            />
                        </View>
                        {/* Spacer */}
                        <View style={{ height: height(2.5) }} />
                        {/* Bottom Text */}
                        <View style={{ marginHorizontal: width(10) }}>
                            <Text style={[styles.bottomText, { textAlign: 'right' }]}>
                                Do not have an account?
                                {' '}
                                <Text style={[{ fontFamily: fonts.appFont2Bold, color: colors.appTextColor5 }]}>Create</Text>
                            </Text>
                        </View>
                        {/* Spacer */}
                        <View style={{ height: height(5) }} />
                        {/* Button */}
                        <Pressable style={{ marginHorizontal: width(20) }}>
                            <LinearGradient
                                //          Top     Left             Top    Right
                                start={{ x: 0.0, y: 0.0 }} end={{ x: 1.0, y: 0.0 }}
                                // locations={[0.5, 0.5]}
                                colors={colors.appGradient1}
                                useAngle={true} // Enabling Angle
                                angle={90}  // Gradient 90 degree Angle
                                angleCenter={{ x: 0.5, y: 0.5 }}    // Gradient starts at center of button
                                style={{ height: height(6), borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={styles.buttonText}>
                                    LUBE ME UP!
                                </Text>
                            </LinearGradient>
                        </Pressable>
                        {/* Spacer */}
                        <View style={{ height: height(5) }} />
                    </ScrollView>
                </KeyboardAvoidingView>
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