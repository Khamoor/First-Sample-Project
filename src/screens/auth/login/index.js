import React from 'react'
import { View, Text, StyleSheet, ImageBackground, Image, TextInput, Pressable, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import { appImages, colors, fontSizes, fonts } from '../../../services/utilities'
import { height, width, totalSize } from 'react-native-dimension'
import LinearGradient from 'react-native-linear-gradient'
import { Buttons, Common, Scrollviews, Spacer, Textinputs, Texts, Wrapper } from '../../../components'

export default function Index({ navigation }) {
    const { navigate } = navigation // Navigate Method provide by Navigation prop
    return (
        // Wrapper
        <Wrapper isMain>
            <Common.BgImageWrapper>
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
                    <Texts isMedium font1Medium style={[{ color: colors.appColor1, textAlign: 'center' }]}>Enter your phone number to log in!</Texts>
                    {/* Spacer */}
                    <Spacer isBasic />
                    {/* Text Input */}
                    <Textinputs.Colored
                        title={'Phone'}
                        value={'0973-4444-52899'}
                        onChangeText={() => { }}
                        containerStyle={{ marginHorizontal: width(8) }}    // Changing size of Input Container
                    />
                    {/* Spacer */}
                    <Spacer isBasic />
                    {/* Bottom Text */}
                    <View style={{ marginHorizontal: width(10) }}>
                        <Texts
                            onPress={() => navigate('createAccount')}
                            isSmall textColor5 font2Light style={[{ textAlign: 'right' }]}>
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
                        onPress={() => { navigate('setUpProfile') }}   // When Button is Pressed it triggers navigation to the 'setUpProfile' screen
                        containerStyle={{ marginHorizontal: width(20) }}
                    />
                    {/* Spacer */}
                    <Spacer isLarge />
                </Scrollviews.KeyboardAvoiding>
            </Common.BgImageWrapper>
        </Wrapper>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: width(70),
        height: width(60),
    },
})