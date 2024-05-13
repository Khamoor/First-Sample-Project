import React from 'react';
import { View } from 'react-native';
import { appStyles } from '../../services/utilities';
import { width } from 'react-native-dimension';

export default function Wrapper({
    children,
    flex,
    isMain,
    center,
    // Margin Horizontal
    marginHorizontalBase,
    marginHorizontalSmall,
    marginHorizontalTiny,

    flexDirectionRow,
    // Align Items
    alignItemsCenter,
    // Justify Contents
    justifyContentCenter,

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
                // Margin Horizontal
                marginHorizontalBase && { marginHorizontal: width(5) },
                marginHorizontalSmall && { marginHorizontal: width(2.5) },
                marginHorizontalTiny && { marginHorizontal: width(1.25) },

                flexDirectionRow && { flexDirection: 'row' },
                alignItemsCenter && { alignItems: 'center' },
                justifyContentCenter && { justifyContent: 'center' },
                
                style
            ]}
        >
            {children}
        </View>
    )
}