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
})