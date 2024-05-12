import React from 'react'
import { Buttons, Common, Headers, Scrollviews, Spacer, Textinputs, Texts, Wrapper } from '../../../components'
import { Image } from '@rneui/base'
import { appIcons, appStyles, colors, fontSizes } from '../../../services/utilities'
import { height, width, totalSize } from 'react-native-dimension'
import { routes } from '../../../services'

export default function Index({ navigation }) {
    const { goBack, navigate } = navigation
    return (
        <Wrapper isMain>
            {/* Displaying the Title  */}
            <Headers.Primary
                title={"Set Up Your Profile"}
            // onPressBack={goBack}
            />
            {/* Main content of the screen is wrapped inside another 'Wrapper' component with 'flex' set to '1',
            allowing it to expand and fill the available space */}
            <Wrapper flex={1}>
                {/* Providing Background Image for the Screen */}
                <Common.BgImageWrapper>
                    {/* Component to handle keyboard avoidance */}
                    <Scrollviews.KeyboardAvoiding>
                        <Spacer isBasic />
                        <Spacer isSmall />
                        <Textinputs.Colored
                            title={'First Name'}
                            value={'Mick'}
                        />
                        <Spacer isSmall />
                        <Textinputs.Colored
                            title={'Last Name'}
                            value={'Tason'}
                        />
                        <Spacer isSmall />
                        <Textinputs.Colored
                            title={'Birthday'}
                            value={'09 / 08 / 1996'}
                            right={
                                <Wrapper style={{ justifyContent: 'center' }}>
                                    <Image
                                        source={appIcons.calendar}
                                        style={{ height: totalSize(2), width: totalSize(2) }}
                                        resizeMode='contain'
                                    />
                                </Wrapper>
                            }
                        />
                        <Spacer isSmall />
                        <Textinput1
                            title={'Vehicle Make'}
                            placeholder={'Enter the make of your Vehicle'}
                        />
                        <Spacer isSmall />
                        <Textinput1
                            title={'Vehicle Model'}
                            placeholder={'Enter model of your Vehicle'}
                        />
                        <Spacer isSmall />
                        <Textinput1
                            title={'Vehicle Year'}
                            placeholder={'Enter year of your Vehicle'}
                        />
                        <Spacer isSmall />
                        <Textinput1
                            title={'Vehicle Color'}
                            placeholder={'Enter Color of your Vehicle'}
                        />
                        <Spacer isSmall />
                        <Textinput1
                            title={'Vehicle Mileage'}
                            placeholder={'If unknown enter approximate'}
                        />
                        <Spacer isLarge />
                        <Buttons.ColoredGradient
                            title={'DONE'}
                            shadowWhite
                            containerStyle={{ marginHorizontal: width(15) }}
                            onPress={() => navigate(routes.app)}    // Adding 'routes.app' on press button
                        />
                        <Spacer isLarge />
                    </Scrollviews.KeyboardAvoiding>
                </Common.BgImageWrapper>
            </Wrapper>
        </Wrapper>
    )
}

// It is a custom wrapper around 'Textinputs.Colored' with some additional styling
const Textinput1 = ({ ...props }) => {
    return (
        <Textinputs.Colored
            // title={'Vehicle Make'}
            // placeholder={'Enter the make of your Vehicle'}
            placeholderTextColor={colors.appTextColor6}
            inputStyle={[appStyles.textSmall, appStyles.textFont1Bold]}
            {...props}
        />
    )
}