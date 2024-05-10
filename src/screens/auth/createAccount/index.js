import React, { useState } from 'react'
import { Buttons, Common, Headers, Spacer, Textinputs, Texts, Wrapper } from '../../../components'
import { Icon } from '@rneui/base'
import { height, width, totalSize } from 'react-native-dimension'
import { colors } from '../../../services/utilities'
import { Pressable } from 'react-native'

export default function Index({ navigation }) {
    const { goBack } = navigation
    const [passwordHidden, setPasswordHidden] = useState(true)
    const [isChecked, setChecked] = useState(false)
    return (
        <Wrapper isMain>
            <Headers.Primary
                title={'Create Account'}
                onPressBack={goBack}
            />
            <Wrapper flex={1}>
                <Common.BgImageWrapper>
                    <Spacer isBasic />
                    <Spacer isSmall />
                    <Textinputs.Colored
                        title={'Email'}
                        value={'micktason@email.com'}
                    />
                    <Spacer isBasic />
                    <Textinputs.Colored
                        title={'Password'}
                        value={'123456789'}
                        secureTextEntry={passwordHidden}
                        inputStyle={{ letterSpacing: totalSize(0.5) }}
                        right={
                            <Wrapper style={{ justifyContent: 'center' }}>
                                <Icon
                                    name={passwordHidden ? 'eye-outline' : 'eye-off-outline'}
                                    type='ionicon'
                                    size={totalSize(2.5)}
                                    onPress={() => setPasswordHidden(prev => !prev)}
                                />
                            </Wrapper>
                        }
                    />
                    <Spacer isBasic />
                    <Pressable
                        onPress={() => setChecked(prev => !prev)}
                    >
                        <Wrapper style={{ flexDirection: 'row', marginHorizontal: width(5), alignItems: 'center' }}>
                            <Icon
                                name={isChecked ? 'checkmark-circle-sharp' : 'checkmark-circle-outline'}
                                type='ionicon'
                                color={isChecked ? colors.appColor1 : colors.appBackgrounColor1}
                            />
                            <Spacer width={width(2.5)} />
                            <Texts isSmall isWhite>
                                I accept the
                                {' '}
                                <Texts isSmall font1bold colorPrimary>Terms of Service</Texts>
                                {' '}
                                and
                                {' '}
                                <Texts isSmall font1bold colorPrimary>Privacy Policy</Texts>
                            </Texts>
                        </Wrapper>
                    </Pressable>
                    <Spacer height={height(10)} />
                    <Buttons.ColoredGradient
                        title={"Let's go!"}
                        containerStyle={{ marginHorizontal: width(10) }}
                    />
                    <Spacer isLarge />
                </Common.BgImageWrapper>
            </Wrapper>
        </Wrapper>
    )
}