import React from 'react'
import { Texts, Wrapper } from '../../../components'
import { appStyles, colors } from '../../../services/utilities'
import { routes } from '../../../services'
import { Pressable, StyleSheet } from 'react-native'
import { height, width, totalSize } from 'react-native-dimension'
import { Icon } from '@rneui/base'

export default function Index({ navigation }) {
    const { goBack, navigate, replace } = navigation
    const options = [
        { label: 'Edit Profile', value: 'editProfile', route: routes.editProfile },
        { label: 'Share Your Feedback', value: 'shareFeedback', route: routes.shareFeedback },
        { label: 'Terms of Service', value: 'termsOfService', route: routes.editProfile },
        { label: 'Privacy Policy', value: 'privacyPolicy', route: routes.editProfile },
        { label: 'About Us', value: 'aboutUs', route: routes.shareFeedback },
        { label: 'Logout', value: 'logout', route: null },
    ]

    const handleOptionPress = (item, index) => {
        const { label, value, route } = item
        const isLogout = value === 'logout'
        if (isLogout) {
            // Logout Logic
        }
        if (value === 'editProfile') {
            navigate(route)
        }
        else {
            replace(route)
        }
    }
    return (
        <Wrapper flex={1} style={{ justifyContent: 'flex-end' }}>
            <Wrapper style={StyleSheet.absoluteFill}>
                <Pressable style={{ flex: 1 }} onPress={goBack} />
            </Wrapper>
            <Wrapper
                backgroundColor1
                paddingVerticalLarge
                style={[{ borderTopRightRadius: 40, borderTopLeftRadius: 40 }, appStyles.shadowExtraDark]}
            >
                <Wrapper
                    isBordered
                    paddingHorizontalZero
                    paddingVerticalZero
                    style={{ borderRadius: 20, borderColor: colors.appBackgrounColor6 }}
                >
                    {
                        options.map((item, index) => {
                            const { label, value } = item
                            const isLogout = value === 'logout'
                            return (
                                <React.Fragment key={index}>
                                    <Pressable
                                        onPress={() => handleOptionPress(item, index)}
                                    >
                                        <Wrapper flexDirectionRow paddingVerticalSmall marginHorizontalBase style={{ paddingVertical: height(1.75) }}>
                                            <Wrapper flex={1}>
                                                <Texts isMedium font1bold={isLogout} style={{ color: !isLogout ? colors.appTextColor12 : colors.appTextColor1 }}>{label}</Texts>
                                            </Wrapper>
                                            <Icon
                                                name='chevron-right'
                                                type='octicon'
                                                size={totalSize(2)}
                                                color={colors.appTextColor13}
                                            />
                                        </Wrapper>
                                        <Wrapper style={{ borderBottomWidth: 1, borderBottomColor: colors.appBackgrounColor6 }} />
                                    </Pressable>
                                </React.Fragment>
                            )
                        })
                    }
                </Wrapper>
            </Wrapper>
        </Wrapper>
    )
}