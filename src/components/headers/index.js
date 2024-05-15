import React from 'react'
import { Image, ImageBackground, StyleSheet, View } from 'react-native'
import { height, width, totalSize } from 'react-native-dimension'
import { appImages, colors } from '../../services/utilities'
import { Icon } from '@rneui/base'
import Texts from '../texts'
import Wrapper from '../wrapper'

export function Primary({
    title,          // Represents title text to be displayed in the header
    onPressBack,    // Represents function to be executed when the back button is pressed. If provided, the back button will be rendered; otherwise, it will not be rendered
}) {
    return (
        <View
            style={{
                paddingTop: height(5),
                paddingBottom: height(2),
                backgroundColor: colors.appBackgrounColor1,
            }}
        >
            {/* It consists of a row layout wiht three child views */}
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {/* It is reserved for the back button which is conditionally rendered based on the 'onPressBack' prop */}
                <View style={{ flex: 0.2 }}>
                    {
                        onPressBack ?
                            <Icon
                                name='chevron-left'
                                type='octicons'
                                size={totalSize(3)}
                                onPress={onPressBack}
                            />
                            :
                            null
                    }
                </View>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Texts isLarge font1bold>{title}</Texts>
                </View>
                <View style={{ flex: 0.2 }}>

                </View>
            </View>
        </View>
    )
}

export function Secondary({ title }) {
    return (
        <Wrapper style={{ height: height(20) }}>
            <Wrapper style={StyleSheet.absoluteFill}>
                <Image
                    source={appImages.background_1}
                    style={{ flex: 1, height: null, width: null, borderBottomRightRadius: 50, borderBottomLeftRadius: 50 }}
                />
            </Wrapper>
            {/* <ImageBackground
                source={appImages.background_1}
                style={{ flex: 1, height: null, width: null, borderBottomRightRadius: 50, borderBottomLeftRadius: 50 }}
            > */}
            <Wrapper flex={1} center>
                <Texts isH5 font1Medium isWhite>{title}</Texts>
            </Wrapper>
            {/* </ImageBackground> */}
        </Wrapper>
    )
}