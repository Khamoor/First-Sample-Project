import React from 'react';
import { StyleSheet, View } from 'react-native';
import { appStyles, colors } from '../../services/utilities';
import { width, height } from 'react-native-dimension';

export default function Wrapper({
    children,
    flex,
    isMain,
    center,
    isColored,
    isBordered,

    // Margin Horizontal
    marginHorizontalLarge,
    marginHorizontalMedium,
    marginHorizontalBase,
    marginHorizontalSmall,
    marginHorizontalTiny,

    // Padding Horizontal
    paddingHorizontalLarge,
    paddingHorizontalMedium,
    paddingHorizontalBase,
    paddingHorizontalSmall,
    paddingHorizontalTiny,

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

                // Margin Horizontal
                marginHorizontalLarge && { marginHorizontal: width(10) },
                marginHorizontalMedium && { marginHorizontal: width(7.5) },
                marginHorizontalBase && { marginHorizontal: width(5) },
                marginHorizontalSmall && { marginHorizontal: width(2.5) },
                marginHorizontalTiny && { marginHorizontal: width(1.25) },

                // Padding Horizontal
                paddingHorizontalLarge && { paddingHorizontal: width(10) },
                paddingHorizontalMedium && { paddingHorizontal: width(7.5) },
                paddingHorizontalBase && { paddingHorizontal: width(5) },
                paddingHorizontalSmall && { paddingHorizontal: width(2.5) },
                paddingHorizontalTiny && { paddingHorizontal: width(1.25) },

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