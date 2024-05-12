import React from 'react'
import { View } from 'react-native'
import { appStyles } from '../../services/utilities'

export default function Wrapper({
    children,
    flex,
    isMain,
    center,
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
                alignItemsCenter && { alignItems: 'center' },
                style
            ]}
        >
            {children}
        </View>
    )
}