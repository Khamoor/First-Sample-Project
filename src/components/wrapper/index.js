import React from 'react';
import { StyleSheet, View } from 'react-native';
import { appStyles, colors } from '../../services/utilities';
import { width, height } from 'react-native-dimension';

export default function Wrapper({
    children,
    flex,
    isMain,
    center,
    backgroundColor1,
    backgroundColor2,
    isColored,
    isBordered,

    // Margin Horizontal
    marginHorizontalXLarge,
    marginHorizontalLarge,
    marginHorizontalMedium,
    marginHorizontalBase,
    marginHorizontalSmall,
    marginHorizontalTiny,
    marginHorizontalZero,

    // Padding Horizontal
    paddingHorizontalLarge,
    paddingHorizontalMedium,
    paddingHorizontalBase,
    paddingHorizontalSmall,
    paddingHorizontalTiny,
    paddingHorizontalZero,

    // Margin Vertical
    marginVerticalLarge,
    marginVerticalMedium,
    marginVerticalBase,
    marginVerticalSmall,
    marginVerticalTiny,
    marginVerticalZero,

    // Padding Vertical
    paddingVerticalLarge,
    paddingVerticalMedium,
    paddingVerticalBase,
    paddingVerticalSmall,
    paddingVerticalTiny,
    paddingVerticalZero,

    flexDirectionRow,
    // Align Items
    alignItemsCenter,
    // Justify Contents
    justifyContentCenter,
    justifyContentSpaceBetween,

    style,
}) {
    return (
        <View
            style={[
                {
                    flex: flex
                },
                isMain && appStyles.mainContainer,
                center && appStyles.center,
                isColored && styles.colored,
                isBordered && styles.bordered,
                backgroundColor1 && { backgroundColor: colors.appBackgrounColor1 },
                backgroundColor2 && { backgroundColor: colors.appBackgrounColor2 },

                // Margin Horizontal
                marginHorizontalXLarge && { marginHorizontal: width(12) },
                marginHorizontalLarge && { marginHorizontal: width(10) },
                marginHorizontalMedium && { marginHorizontal: width(7.5) },
                marginHorizontalBase && { marginHorizontal: width(5) },
                marginHorizontalSmall && { marginHorizontal: width(2.5) },
                marginHorizontalTiny && { marginHorizontal: width(1.25) },
                marginHorizontalZero && { marginHorizontal: 0 },

                // Padding Horizontal
                paddingHorizontalLarge && { paddingHorizontal: width(10) },
                paddingHorizontalMedium && { paddingHorizontal: width(7.5) },
                paddingHorizontalBase && { paddingHorizontal: width(5) },
                paddingHorizontalSmall && { paddingHorizontal: width(2.5) },
                paddingHorizontalTiny && { paddingHorizontal: width(1.25) },
                paddingHorizontalZero && { paddingHorizontal: 0 },

                // Margin Vertical
                marginVerticalLarge && { marginVertical: width(5) },
                marginVerticalMedium && { marginVertical: width(3.75) },
                marginVerticalBase && { marginVertical: width(2.5) },
                marginVerticalSmall && { marginVertical: width(1.25) },
                marginVerticalTiny && { marginVertical: width(0.625) },
                marginVerticalZero && { marginVertical: 0 },

                // Padding Vertical
                paddingVerticalLarge && { paddingVertical: width(5) },
                paddingVerticalMedium && { paddingVertical: width(3.75) },
                paddingVerticalBase && { paddingVertical: width(2.5) },
                paddingVerticalSmall && { paddingVertical: width(1.25) },
                paddingVerticalTiny && { paddingVertical: width(0.625) },
                paddingVerticalZero && { paddingVertical: 0 },

                flexDirectionRow && { flexDirection: 'row' },
                alignItemsCenter && { alignItems: 'center' },
                justifyContentCenter && { justifyContent: 'center' },
                justifyContentSpaceBetween && { justifyContent: 'space-between' },

                style
            ]}
        >
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    colored: {
        marginHorizontal: width(5),
        borderRadius: 10,
        backgroundColor: colors.appBackgrounColor2,
        paddingVertical: height(2.5),
        paddingHorizontal: width(5),
    },
    bordered: {
        marginHorizontal: width(5),
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.appBackgrounColor3,
        paddingVertical: height(2.5),
        paddingHorizontal: width(5),
    }
})