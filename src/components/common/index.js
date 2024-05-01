import React from 'react'
import { ImageBackground } from 'react-native'
import { appImages } from '../../services/utilities'

export function BgImageWrapper({ children }) {
    return (
        <ImageBackground
            source={appImages.background_1}
            style={{ flex: 1, height: null, width: null }}
        >
            {children}
        </ImageBackground>
    )
}