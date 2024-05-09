import React from 'react'
import { View } from 'react-native'
import { height, width, totalSize } from 'react-native-dimension'
import { colors } from '../../services/utilities'
import { Icon } from '@rneui/base'
import Texts from '../texts'

export function Primary({
    title,          // Represents title text to be displayed in the header
    onPressBack,    // Represents function to be executed when the back button is pressed. If provided, the back button will be rendered; otherwise, it will not be rendered
}) {
    return (
        <View
            style={{
                paddingTop: height(5),
                paddingBottom: height(2),
                backgroundColor: colors.appBackgrounColor1,
            }}
        >
            {/* It consists of a row layout wiht three child views */}
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {/* It is reserved for the back button which is conditionally rendered based on the 'onPressBack' prop */}
                <View style={{ flex: 0.2 }}>
                    {
                        onPressBack ?
                            <Icon
                                name='chevron-left'
                                type='octicons'
                                size={totalSize(3)}
                                onPress={onPressBack}
                            />
                            :
                            null
                    }
                </View>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Texts isLarge font1bold>{title}</Texts>
                </View>
                <View style={{ flex: 0.2 }}>

                </View>
            </View>
        </View>
    )
}