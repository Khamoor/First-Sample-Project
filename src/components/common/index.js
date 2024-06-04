import React from 'react'
import { Image, ImageBackground, StyleSheet } from 'react-native'
import { appImages, appStyles, colors } from '../../services/utilities'
import ReactNativeModal from 'react-native-modal'
import Wrapper from '../wrapper'
import { Icon } from '@rneui/base'
import { totalSize, height, width } from 'react-native-dimension'
import Spacer from '../spacer'
import Texts from '../texts'
import * as Buttons from '../buttons'

export function BgImageWrapper({ children }) {
    return (
        <ImageBackground
            source={appImages.background_1}
            style={{ flex: 1, height: null, width: null }}
        >
            {children}
        </ImageBackground>
    )
}

export const PopupPrimary = ({ isVisible, toggle, title, onPressButton, buttonText }) => {
    return (
        <ReactNativeModal
            isVisible={isVisible}
            // onBackButtonPress={toggle}
            // onBackdropPress={toggle}
            backdropOpacity={0}
            style={{ margin: 0, justifyContent: 'flex-end' }}
        >
            <Wrapper
                backgroundColor1
                paddingVerticalLarge
                style={[{ borderTopRightRadius: 50, borderTopLeftRadius: 50 }, appStyles.shadowExtraDark]}
            >
                <Wrapper style={StyleSheet.absoluteFill}>
                    <Image
                        source={appImages.background_1}
                        style={{ flex: 1, height: null, width: null, borderTopRightRadius: 50, borderTopLeftRadius: 50 }}
                    />
                </Wrapper>
                <Icon
                    name='check-circle'
                    type='feather'
                    color={colors.appColor1}
                    size={totalSize(7.5)}
                />
                <Spacer isLarge />
                <Wrapper marginHorizontalXLarge>
                    <Texts isH5 isWhite alignCenter>{title}</Texts>
                </Wrapper>
                <Spacer isLarge />
                <Wrapper marginHorizontalXLarge>
                    <Buttons.ColoredGradient
                        title={buttonText || 'Button'}
                        onPress={onPressButton}
                    />
                </Wrapper>
            </Wrapper>
        </ReactNativeModal>
    )
}