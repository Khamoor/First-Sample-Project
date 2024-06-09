import React from 'react';
import Modal from "react-native-modal";
import { Buttons, Icons, Spacer, Textinputs, Texts, Wrapper } from '../../../components';
import { appIcons, appStyles, colors, fontSizes, fonts } from '../../../services/utilities';
import { height, width } from 'react-native-dimension'

export default function AddPaymentDetails({ isVisible, toggle, onPressSave }) {
    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={toggle}
            style={{ margin: 0 }}
        >
            <Wrapper
                backgroundColor1
                isColored
            >
                <Wrapper
                    style={{
                        marginTop: -(width(17.5))
                    }}
                    alignItemsCenter>
                    <Icons.Button
                        customIcon={appIcons.payment}
                        buttonSize={width(25)}
                        iconSize={width(12.5)}
                        containerStyle={[appStyles.shadowDark, { shadowColor: colors.appColor1 }]}
                    />
                </Wrapper>
                <Spacer isSmall />
                <Texts isMedium font2Regular alignCenter>Add New Details</Texts>
                <Spacer isSmall />
                <Texts isMedium font2Medium alignCenter>Please enter your Payment Details</Texts>
                <Spacer isSmall />
                <Wrapper
                    isColored
                    backgroundColor1
                    marginHorizontalZero
                    style={[{ borderRadius: 6 }, appStyles.shadowDark, { shadowColor: colors.appColor3, shadowOpacity: 1 }]}
                >
                    <Textinput1
                        placeholder='Card holder name'
                    />
                    <Spacer isSmall />
                    <Textinput1
                        placeholder='Number of card'
                    />
                    <Spacer isSmall />
                    <Texts isXTiny font2Regular>VALID THRU</Texts>
                    <Spacer isSmall />
                    <Wrapper flexDirectionRow>
                        <Wrapper flex={1}>
                            <Textinput1
                                placeholder='MM'
                            />
                        </Wrapper>
                        <Wrapper flex={0.4} alignItemsCenter justifyContentCenter>
                            <Texts isRegular font2Light style={{ color: colors.appTextColor3 }}>/</Texts>
                        </Wrapper>
                        <Wrapper flex={1}>
                            <Textinput1
                                placeholder='YY'
                            />
                        </Wrapper>
                        <Wrapper flex={0.4}>

                        </Wrapper>
                        <Wrapper flex={1}>
                            <Textinput1
                                placeholder='CVV'
                            />
                        </Wrapper>
                    </Wrapper>
                </Wrapper>
                <Spacer isBasic />
                <Spacer isSmall />
                <Wrapper alignItemsCenter>
                    <Buttons.ColoredGradient
                        title={'Save'}
                        gradientColors={colors.appGradient3}
                        titleStyle={[appStyles.textRegular, appStyles.textFont2Regular, appStyles.textWhite]}
                        gradientStyle={{ height: height(4), paddingHorizontal: width(7.5) }}
                        onPress={onPressSave}
                    />
                </Wrapper>
                <Spacer isBasic />
            </Wrapper>
        </Modal>
    )
}

const Textinput1 = ({ ...props }) => {
    return (
        <Textinputs.ColoredSecondary
            {...props}
            placeholderTextColor={colors.appTextColor3}
            containerStyle={{ borderRadius: 2 }}
            inputStyle={{ height: height(5), paddingHorizontal: width(3), fontFamily: fonts.appFont2Light, fontSize: fontSizes.small }}
        />
    )
}