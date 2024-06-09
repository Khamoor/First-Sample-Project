import React, { useState } from 'react'
import { Common, Headers, Icons, Spacer, Texts, Wrapper } from '../../../components'
import { appImages, appStyles, colors } from '../../../services/utilities'
import { height, width, totalSize } from 'react-native-dimension'
import { Pressable } from 'react-native'
import AddPaymentDetails from './addPaymentDetails'
import { routes } from '../../../services'

export default function Index({ navigation }) {
    const { goBack, navigate } = navigation

    const paymentMethods = [
        {
            logo: appImages.stripe_logo,
            value: 'stripe',
        },
        {
            logo: appImages.android_pay_logo,
            value: 'android_pay',
        },
        {
            logo: appImages.apple_pay_logo,
            value: 'apple_pay',
        },
        {
            logo: appImages.bitPay_logo,
            value: 'bitPay',
        },
        {
            logo: appImages.affirm_logo,
            value: 'affirm',
        },
        {
            logo: appImages.klarna_Logo,
            value: 'klarna',
        },
    ]

    const topCardBorderRadius = 30

    const [isAddPaymentDetailsPopupVisible, setAddPaymentDetailsPopupVisibility] = useState(false)
    const toggleAddPaymentDetailsPopup = () => setAddPaymentDetailsPopupVisibility(pv => !pv)

    const [isConfirmationPopupVisible, setConfirmationPopupVisibility] = useState(false)
    const toggleConfirmationPopup = () => setConfirmationPopupVisibility(pv => !pv)

    return (
        <Wrapper isMain>
            <Headers.Primary
                title={'Select Price & Payment Method'}
                onPressBack={goBack}
            />
            <Wrapper flex={1}>
                <Common.BgImageWrapper>
                    <Spacer isBasic />
                    <Wrapper
                        isColored
                        paddingHorizontalZero
                        paddingVerticalZero
                        marginHorizontalLarge
                        style={[{
                            borderRadius: topCardBorderRadius
                        },
                        appStyles.shadowDark,
                        { shadowColor: colors.appColor1 }
                        ]}
                    >
                        <Wrapper style={{ backgroundColor: colors.appColor1, height: height(6), borderTopRightRadius: topCardBorderRadius, borderTopLeftRadius: topCardBorderRadius }} />
                        <Wrapper paddingHorizontalMedium paddingVerticalBase>
                            <Texts isTiny alignCenter>YOUR OYL AND FYLTER CHANGE WILL BE</Texts>
                            <Spacer isSmall />
                            <Wrapper alignItemsCenter>
                                <Wrapper alignItemsCenter>
                                    <Texts isH1 style={{ fontSize: totalSize(10) }}>87</Texts>
                                    {/* Adjusting position of Text */}
                                    <Wrapper style={{ position: 'absolute', left: -width(6) }}>
                                        <Texts isH1 >$</Texts>
                                    </Wrapper>
                                </Wrapper>
                            </Wrapper>
                            <Spacer isSmall />
                            <Texts isTiny alignCenter>THIS WILL HAVE YOU ROLLIN FOR 10,000 MILES - SHOOT WE'LL EVEN TOP OFF YOUR WASHER FLUID AND AIR UP YOUR TIRES</Texts>

                        </Wrapper>
                        <Wrapper style={{ backgroundColor: colors.appColor1, height: height(6), borderBottomRightRadius: topCardBorderRadius, borderBottomLeftRadius: topCardBorderRadius }} />
                    </Wrapper>
                    <Spacer isBasic />
                    <Texts isMedium font1Medium colorPrimary alignCenter>Payment Methods</Texts>
                    <Spacer isBasic />
                    <PaymentMethods
                        data={paymentMethods}
                        onPressItem={(item, index) => {
                            // console.log('item: ', item)
                            toggleAddPaymentDetailsPopup()
                        }}
                    />
                </Common.BgImageWrapper>
            </Wrapper>
            <AddPaymentDetails
                isVisible={isAddPaymentDetailsPopupVisible}
                toggle={toggleAddPaymentDetailsPopup}
                onPressSave={() => {
                    toggleAddPaymentDetailsPopup()
                    setTimeout(() => {
                        toggleConfirmationPopup()
                    }, 500)
                }}
            />
            <Common.PopupPrimary
                isVisible={isConfirmationPopupVisible}
                toggle={toggleConfirmationPopup}
                title="Congratulations!"
                titleStyle={[appStyles.h3, appStyles.textWhite]}
                info
                info1={'We will see you on\n'}
                info2={'[DATE SCHEDULED]'}
                onPressButton={() => {
                    toggleConfirmationPopup()
                    navigate(routes.shareFeedback)
                }}
                buttonText="CONTINUE"
            />
        </Wrapper>
    )
}

const PaymentMethods = ({ data, onPressItem }) => {
    return (
        <Wrapper marginHorizontalMedium flexDirectionRow alignItemsCenter flexWrapWrap justifyContentSpaceBetween>
            {
                data?.map((item, index) => {
                    const itemSize = width(25)
                    return (
                        <React.Fragment key={index} >
                            <Pressable
                                onPress={() => onPressItem(item, index)}
                            >
                                <Wrapper
                                    isColored
                                    marginHorizontalZero
                                    paddingHorizontalZero
                                    paddingVerticalZero
                                    marginVerticalBase
                                    center
                                    style={[{ height: itemSize, width: itemSize }, appStyles.shadowDark, { shadowColor: colors.appBackgrounColor1 }]}
                                >
                                    <Icons.Custom
                                        source={item.logo}
                                        size={itemSize - width(5)}
                                    />
                                </Wrapper>
                            </Pressable>
                        </React.Fragment>
                    )
                })
            }
        </Wrapper>
    )
}