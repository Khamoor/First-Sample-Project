import React from 'react'
import { View } from 'react-native'
import { appStyles } from '../../services/utilities'

export default function Wrapper({
    children,
    flex,
    isMain,
    center,
    flexDirectionRow,
    alignItemsCenter,
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
                flexDirectionRow && { flexDirection: 'row' },
                alignItemsCenter && { alignItems: 'center' },
                style
            ]}
        >
            {children}
        </View>
    )
}