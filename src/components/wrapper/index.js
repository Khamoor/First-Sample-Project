import React from 'react'
import { View } from 'react-native'
import { appStyles } from '../../services/utilities'

export default function Wrapper({
    children,
    isMain,
    center,
}) {
    return (
        <View
            style={[
                isMain && appStyles.mainContainer,
                center && appStyles.center
            ]}
        >
            {children}
        </View>
    )
}