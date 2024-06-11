import React from 'react'
import { Buttons, Common, Headers, Scrollviews, Spacer, Textinputs, Wrapper } from '../../../components'
import { appIcons, appStyles, colors } from '../../../services/utilities'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { height, width, totalSize } from 'react-native-dimension'
import { Image } from 'react-native'
import { routes } from '../../../services'

export default function Index({ navigation }) {
    const { navigate, goBack } = navigation
    const Insets = useSafeAreaInsets()
    return (
        <Wrapper isMain>
            <Spacer height={Insets.top} />
            <Common.BgImageWrapper>
                <Headers.Primary
                    title={'Edit Profile'}
                    // onPressBack={navigation?.goBack} // Another way to navigate to goBack 
                    onPressBack={goBack}
                    containerStyle={{ paddingTop: height(2), backgroundColor: colors.transparent }}
                    backIconColor={colors.appColor1}
                    titleStyle={[appStyles.textPrimaryColor]}
                />
                {/* Component to handle keyboard avoidance */}
                <Scrollviews.KeyboardAvoiding>
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
                    <Spacer isSmall />
                    <Buttons.ColoredGradient
                        title={'SAVE CHANGES'}
                        shadowWhite
                        containerStyle={{ marginHorizontal: width(15) }}
                        onPress={() => navigate(routes.home)}    // Adding 'routes.app' on press button
                    />
                    <Spacer height={height(10)} />
                </Scrollviews.KeyboardAvoiding>
            </Common.BgImageWrapper>
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