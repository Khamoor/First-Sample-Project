import React, { useState } from 'react'
import { Buttons, Common, Headers, Icons, Scrollviews, Spacer, Textinputs, Texts, Wrapper } from '../../../components'
import { appImages, appStyles, colors } from '../../../services/utilities'
import { height, width, totalSize } from 'react-native-dimension'
import Modal from 'react-native-modal'
import { Image, StyleSheet } from 'react-native'
import { Icon } from '@rneui/base'
import { routes } from '../../../services'

export default function Index({ navigation }) {
    const { navigate } = navigation

    const [isChecked, setChecked] = useState(false)

    const [isConfirmationPopupVisible, setConfirmationPopupVisibility] = useState(false)

    const toggleConfirmationPopup = () => setConfirmationPopupVisibility(pv => !pv)

    return (
        <Wrapper isMain>
            <Headers.Secondary
                title={'Vehicle Info'}
            />
            <Scrollviews.KeyboardAvoiding>
                <Spacer isBasic />
                <Spacer isSmall />
                <Texts isH6 alignCenter>Please Enter Details</Texts>
                <Spacer isBasic />
                <Textinput1
                    title={'Vehicle Year'}
                    placeholder='Enter the year of your Vehicle'
                />
                <Spacer isSmall />
                <Textinput1
                    title={'Vehicle Make'}
                    placeholder='Enter make of your Vehicle'
                />
                <Spacer isSmall />
                <Textinput1
                    title={'Vehicle Model'}
                    placeholder='Enter model of your Vehicle'
                />
                <Spacer isSmall />
                <Textinput1
                    title={'Vehicle Color'}
                    placeholder='Enter color of your Vehicle'
                />
                <Spacer isSmall />
                <Textinput1
                    title={'Vehicle Mileage'}
                    placeholder='If unknown enter approximate'
                />
                <Spacer isBasic />
                <Wrapper marginHorizontalBase>
                    <Wrapper flexDirectionRow alignItemsCenter>
                        <Icons.Button
                            buttonSize={totalSize(2.5)}
                            iconSize={totalSize(2)}
                            gradientColors={[colors.appBackgrounColor1, colors.appBackgrounColor1]}
                            containerStyle={[{ backgroundColor: colors.appBackgrounColor1 }, appStyles.shadow]}
                            buttonStyle={{ borderRadius: 0, borderWidth: 1, borderColor: colors.appTextColor1 }}
                            iconName={isChecked ? 'check' : ''}
                            iconType={''}
                            onPress={() => setChecked(prev => !prev)}
                        />
                        <Spacer isSmall isHorizontal />
                        <Wrapper flex={1}>
                            <Texts isSmall font1Medium>Pull info from profile here</Texts>
                        </Wrapper>
                    </Wrapper>
                </Wrapper>
                <Spacer isBasic />
                <Wrapper marginHorizontalMedium>
                    <Buttons.ColoredGradient
                        title={'ADD'}
                        gradientColors={colors.appGradient3}
                        titleStyle={[appStyles.textWhite]}
                        onPress={toggleConfirmationPopup}
                    />
                </Wrapper>
                <Spacer isBasic />
            </Scrollviews.KeyboardAvoiding>
            <Common.PopupPrimary
                isVisible={isConfirmationPopupVisible}
                toggle={toggleConfirmationPopup}
                title="Vehicle has been added successfully! One step left!"
                onPressButton={() => {
                    toggleConfirmationPopup()
                    navigate(routes.selectPriceAndPaymentMethod)
                }}
                buttonText="CONTINUE"
            />
        </Wrapper>
    )
}

// It is a custom wrapper around 'Textinputs.Colored' with some additional styling
const Textinput1 = ({ ...props }) => {
    return (
        <Textinputs.Colored
            // title={'Vehicle Make'}
            // placeholder={'Enter the make of your Vehicle'}
            containerStyle={[{ backgroundColor: colors.appBackgrounColor2 }, appStyles.shadowLight]}
            placeholderTextColor={colors.appTextColor11}
            inputStyle={[appStyles.textSmall, appStyles.textFont1Bold]}
            {...props}
        />
    )
}