import React from 'react'
import { Buttons, Common, Icons, Spacer, Texts, Wrapper } from '../../../components'
import { appIcons, appStyles, colors, fonts } from '../../../services/utilities'
import { height, width, totalSize } from 'react-native-dimension'
import { routes } from '../../../services'

export default function Index({ navigation }) {
    const { navigate } = navigation
    return (
        <Wrapper isMain>
            <Wrapper flex={1} center style={{ backgroundColor: colors.appColor1 }}>
                <Icons.Button
                    customIcon={appIcons.thumbs_up}
                    buttonColor={colors.appBackgrounColor1}
                    containerStyle={[appStyles.shadow]}
                    buttonSize={width(50)}
                    iconSize={width(35)}
                    buttonStyle={{ borderRadius: 100 }}
                />
            </Wrapper>
            <Wrapper flex={1}>
                <Common.BgImageWrapper>
                    <Wrapper flex={1} paddingVerticalLarge justifyContentSpaceEvenly>
                        {/* <Spacer isLarge /> */}
                        <Texts isH1 isWhite alignCenter>Thank You!</Texts>
                        <Wrapper marginHorizontalBase>
                            {/* <Spacer isBasic /> */}
                            <Texts isH6 isWhite alignCenter style={{ fontFamily: fonts.appFont1Regular }}>Thanks for using our app, We hope you like it and use it again.</Texts>
                        </Wrapper>
                        {/* <Spacer isLarge /> */}
                        <Wrapper flexDirectionRow alignItemsCenter justifyContentCenter>
                            <Icons.Custom
                                source={appIcons.facebook}
                                size={totalSize(6)}
                            />
                            <Spacer isBasic isHorizontal />
                            <Icons.Custom
                                source={appIcons.instagram}
                                size={totalSize(5)}
                            />
                        </Wrapper>
                        <Wrapper style={{ marginHorizontal: width(20) }}>
                            <Buttons.ColoredGradient
                                title={'Go Home'}
                                titleStyle={appStyles.h6}   // Increaseing Title Text Size
                                onPress={() => {
                                    navigate(routes.homeTab, { screen: routes.home })
                                }}
                            />
                        </Wrapper>
                    </Wrapper>
                </Common.BgImageWrapper>
            </Wrapper>
        </Wrapper>
    )
}