import React from 'react'
import { View } from 'react-native'
import { appStyles } from '../../services/utilities'

export default function Wrapper({
    children,
    flex,
    isMain,
    center,
}) {
    return (
        <View
            style={[
                {
                    flex: flex
                },
                isMain && appStyles.mainContainer,
                center && appStyles.center
            ]}
        >
            {children}
        </View>
    )
}