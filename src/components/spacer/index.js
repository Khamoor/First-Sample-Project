import React from 'react'
import { View } from 'react-native'
import { height as h, width as w } from 'react-native-dimension'

export default function Spacer({ isBasic, isSmall, isTiny, isLarge, height, width }) {

    const defaultHeight = isLarge ? h(5) : isBasic ? h(2.5) : isSmall ? h(1.25) : isTiny ? h(0.625): height
    const defaultWidth = isLarge ? w(10) : isBasic ? w(5) : isSmall ? w(2.25) : isTiny ? w(1.25) : width

    return (
        <View
            style={{
                height: defaultHeight,
                width: defaultWidth,
            }}
        />
    )
}