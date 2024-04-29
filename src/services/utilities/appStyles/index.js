import { StyleSheet } from "react-native";
import { colors } from "../colors";
import { fontSizes } from "../sizes";
import { fonts } from "../fonts";

export const appStyles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    // Headings
    h1: {
        color: colors.appTextColor1,
        fontSize: fontSizes.h1,
        fontFamily: fonts.appFont1Bold,
    },
    h2: {
        color: colors.appTextColor1,
        fontSize: fontSizes.h2,
        fontFamily: fonts.appFont1Bold,
    },
    h3: {
        color: colors.appTextColor1,
        fontSize: fontSizes.h3,
        fontFamily: fonts.appFont1Bold,
    },
    h4: {
        color: colors.appTextColor1,
        fontSize: fontSizes.h4,
        fontFamily: fonts.appFont1Bold,
    },
    h5: {
        color: colors.appTextColor1,
        fontSize: fontSizes.h5,
        fontFamily: fonts.appFont1Bold,
    },
    h6: {
        color: colors.appTextColor1,
        fontSize: fontSizes.h6,
        fontFamily: fonts.appFont1Bold,
    },
    // Body
    textLarge: {
        color: colors.appTextColor1,
        fontSize: fontSizes.large,
        fontFamily: fonts.appFont1Regular,
    },
    textMedium: {
        color: colors.appTextColor1,
        fontSize: fontSizes.medium,
        fontFamily: fonts.appFont1Regular,
    },
    textRegular: {
        color: colors.appTextColor1,
        fontSize: fontSizes.regular,
        fontFamily: fonts.appFont1Regular,
    },
    textSmall: {
        color: colors.appTextColor1,
        fontSize: fontSizes.small,
        fontFamily: fonts.appFont1Regular,
    },
    textTiny: {
        color: colors.appTextColor1,
        fontSize: fontSizes.tiny,
        fontFamily: fonts.appFont1Regular,
    },
    textXTiny: {
        color: colors.appTextColor1,
        fontSize: fontSizes.xTiny,
        fontFamily: fonts.appFont1Regular,
    },
    // Text Fonts 1
    textFont1Regular: {
        fontFamily: fonts.appFont1Regular
    },
    textFont1Light: {
        fontFamily: fonts.appFont1Light
    },
    textFont1Medium: {
        fontFamily: fonts.appFont1Medium
    },
    textFont1Bold: {
        fontFamily: fonts.appFont1Bold
    },
    // Text Fonts 2
    textFont2Regular: {
        fontFamily: fonts.appFont2Regular
    },
    textFont2Light: {
        fontFamily: fonts.appFont2Light
    },
    textFont2Medium: {
        fontFamily: fonts.appFont2Medium
    },
    textFont2Bold: {
        fontFamily: fonts.appFont2Bold
    },
    textFont2ExtraBold: {
        fontFamily: fonts.appFont2ExtraBold
    },
    // Text Colors
    textPrimaryColor: {
        color: colors.appColor1
    },
    textSecondaryColor: {
        color: colors.appColor2
    },
    textColor1: {
        color: colors.appTextColor1
    },
    textColor2: {
        color: colors.appTextColor2
    },
    textColor3: {
        color: colors.appTextColor3
    },
    textColor4: {
        color: colors.appTextColor4
    },
    textColor5: {
        color: colors.appTextColor5
    },
})