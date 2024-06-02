import React, { useState } from 'react'
import { Buttons, Headers, Icons, Scrollviews, Spacer, Textinputs, Texts, Wrapper } from '../../../components'
import { appStyles, colors } from '../../../services/utilities'
import { height, width, totalSize } from 'react-native-dimension'

export default function Index() {
    const [isChecked, setChecked] = useState(false)

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
                        <Spacer isSmall isHorizontal/>
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
                    />
                </Wrapper>
                <Spacer isBasic />
            </Scrollviews.KeyboardAvoiding>
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