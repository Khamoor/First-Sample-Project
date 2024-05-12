// Importing necessary dependencies from React and React Native
import React from 'react'
import { Text } from 'react-native'
import { appStyles, colors } from '../../services/utilities'    // Importing appStyles

// Defining Functional Component 'Texts'
export default function Texts({
    // Headings
    isH1,
    isH2,
    isH3,
    isH4,
    isH5,
    isH6,
    // Body
    isLarge,
    isMedium,
    isRegular,
    isSmall,
    isTiny,
    isXTiny,
    children,

    // Others
    colorPrimary,
    colorSecondary,
    textColor1,
    textColor2,
    textColor3,
    textColor5,
    textColor6,

    font1Regular,
    font1Light,
    font1Medium,
    font1bold,

    font2Regular,
    font2Light,
    font2Medium,
    font2Bold,
    font2ExtraBold,

    isWhite,
    alignCenter,

    style,

    ...props
}) {
    return (
        <Text
            style={[
                // Headings
                isH1 && appStyles.h1,
                isH2 && appStyles.h2,
                isH3 && appStyles.h3,
                isH4 && appStyles.h4,
                isH5 && appStyles.h5,
                isH6 && appStyles.h6,
                // Body
                isLarge && appStyles.textLarge,
                isMedium && appStyles.textMedium,
                isRegular && appStyles.textRegular,
                isSmall && appStyles.textSmall,
                isTiny && appStyles.textTiny,
                isXTiny && appStyles.textXTiny,
                // Others
                colorPrimary && appStyles.textPrimaryColor,
                colorSecondary && appStyles.textSecondaryColor,

                textColor1 && appStyles.textColor1,
                textColor2 && appStyles.textColor2,
                textColor3 && appStyles.textColor3,
                textColor5 && appStyles.textColor5,
                textColor6 && appStyles.textColor6,

                font1Regular && appStyles.textFont1Regular,
                font1Light && appStyles.textFont1Light,
                font1Medium && appStyles.textFont1Medium,
                font1bold && appStyles.textFont1Bold,

                font2Regular && appStyles.textFont2Regular,
                font2Light && appStyles.textFont2Light,
                font2Medium && appStyles.textFont2Medium,
                font2Bold && appStyles.textFont2Bold,
                font2ExtraBold && appStyles.textFont2ExtraBold,

                isWhite && appStyles.textWhite,
                alignCenter && {textAlign: 'center'},

                style
            ]}
            {...props}
        > {children}</Text>
    )
}