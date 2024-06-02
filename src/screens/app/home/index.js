import React, { useState } from 'react'
import { Buttons, Headers, Icons, Scrollviews, Spacer, Texts, Wrapper } from '../../../components'
import { FlatList, Pressable, TextInput } from 'react-native'
import { colors, appStyles, fontSizes, appIcons } from '../../../services/utilities'
import { height, width, totalSize } from 'react-native-dimension'
import { Icon } from '@rneui/base'
import AddLocation from './addLocation'
import OilType from './oilType'

export default function Index() {
    const days = [
        {
            label: 'Today',
            day: '11',
            month: 'April'
        },
        {
            label: 'Tomorrow',
            day: '12',
            month: 'April'
        },
        {
            label: 'Wed',
            day: '13',
            month: 'April'
        },
        {
            label: 'Thu',
            day: '14',
            month: 'April'
        },
    ]
    const [selectedDayIndex, setDayIndex] = useState(0)
    const [hour, setHour] = useState('05')
    const [minute, setMinute] = useState('00')
    const [am, setAm] = useState('am')

    const [isAddLocationPropupVisible, setAddLocationPropupVisibility] = useState(false)
    const toggleAddLocationPopup = () => setAddLocationPropupVisibility(prev => !prev)

    const [isOilTypePropupVisible, setOilTypePropupVisibility] = useState(false)
    const toggleOilTypePopup = () => setOilTypePropupVisibility(prev => !prev)
    return (
        <Wrapper isMain>
            <Headers.Secondary
                title={'Schedule a Time'}
            />
            <Scrollviews.KeyboardAvoiding>
                <Spacer isBasic />
                {/* <Spacer isSmall /> */}
                <Texts isH6 alignCenter>Please Enter Details</Texts>
                <Spacer isSmall />
                {/* Days */}
                <Days
                    data={days}
                    selectedIndex={selectedDayIndex}
                    onPressItem={(item, index) => { setDayIndex(index) }}
                />
                <Spacer isTiny />
                {/* <Spacer isSmall /> */}
                {/* Time */}
                <Wrapper marginHorizontalBase>
                    <Texts isSmall font1bold textColor2>Enter Time</Texts>
                </Wrapper>
                <Spacer isSmall />
                <Time
                    hour={hour}
                    onChangeHour={h => setHour(h)}
                    minute={minute}
                    onChangeMinute={m => setMinute(m)}
                    am={am}
                    onPressAm={v => setAm(v)}
                />
                <Spacer isBasic />
                <Pressable
                    onPress={toggleAddLocationPopup}
                >
                    <Wrapper
                        isColored
                        style={[{ paddingHorizontal: width(4), paddingVertical: height(1.5) }, appStyles.shadow]}
                    >
                        <Wrapper flexDirectionRow alignItemsCenter>
                            <Wrapper flex={1} >
                                <Texts isSmall font1bold textColor2>Enter Location</Texts>
                                <Spacer isSmall />
                                <Texts isSmall font1bold textColor7>Please enter your address</Texts>
                            </Wrapper>
                            <Icons.Custom
                                source={appIcons.location}
                                size={totalSize(3)}
                            />
                        </Wrapper>
                    </Wrapper>
                </Pressable>
                <Spacer isBasic />
                <Pressable
                    onPress={toggleOilTypePopup}
                >
                    <Wrapper
                        isColored
                        style={[{ paddingHorizontal: width(4), paddingVertical: height(1) }, appStyles.shadow]}
                    >
                        <Wrapper flexDirectionRow alignItemsCenter>
                            <Wrapper flex={1} >
                                <Texts isSmall font1bold textColor2>Oil type</Texts>
                                <Spacer isTiny />
                                <Texts isSmall font1bold textColor8>Please select Oil type from here </Texts>
                                <Texts isSmall font1Regular textColor8>(All Oil High Quality Synthetic)</Texts>
                            </Wrapper>
                            <Icon
                                name='arrow-down'
                                type='simple-line-icon'
                                color={colors.appTextColor1}
                                size={totalSize(3)}
                            />
                        </Wrapper>
                    </Wrapper>
                </Pressable>
                <Spacer isBasic />
                <Wrapper marginHorizontalMedium>
                    <Buttons.ColoredGradient
                        title={'Lock it in!'}
                        notGradient
                        containerStyle={[appStyles.shadow]}
                    />
                </Wrapper>
                <Spacer isBasic />
            </Scrollviews.KeyboardAvoiding>
            <AddLocation
                isVisible={isAddLocationPropupVisible}
                toggle={toggleAddLocationPopup}
            />
            <OilType
                isVisible={isOilTypePropupVisible}
                toggle={toggleOilTypePopup}
            />
        </Wrapper>
    )
}

const Days = ({ data, onPressItem, selectedIndex }) => {
    return (
        <Wrapper>
            <FlatList
                data={data}
                horizontal
                showsHorizontalScrollIndicator={false}
                ListHeaderComponent={() => <Spacer width={width(4)} />}
                ListFooterComponent={() => <Spacer width={width(5)} />}
                ItemSeparatorComponent={() => <Spacer width={width(4)} />}
                renderItem={({ item, index }) => {
                    const { label, day, month } = item
                    const itemSize = width(24)
                    const isSelected = selectedIndex === index
                    return (
                        <Pressable
                            onPress={() => onPressItem(item, index)}
                            style={[
                                {
                                    height: itemSize,
                                    width: itemSize,
                                    backgroundColor: colors.appBackgrounColor1,
                                    borderRadius: 10,
                                    justifyContent: 'center',
                                    marginVertical: height(1),
                                    ...appStyles.shadow
                                },
                                isSelected && { backgroundColor: colors.appColor2, }
                            ]}
                        >
                            <Wrapper alignItemsCenter>
                                <Texts isSmall font1bold textColor2>{label}</Texts>
                                <Spacer isSmall />
                                <Texts isSmall font1bold textColor2>{day}</Texts>
                                <Spacer isTiny />
                                <Texts isSmall font1bold textColor2>{month}</Texts>
                            </Wrapper>
                        </Pressable>
                    )
                }}
            />
        </Wrapper>
    )
}

const Time = ({ hour, onChangeHour, minute, onChangeMinute, am, onPressAm }) => {
    const itemSize = height(12.5)

    const isAm = am === 'am'
    const isPm = am === 'pm'

    const InputBox = ({ containerStyle, ...props }) => {
        return (
            <Wrapper
                center
                style={[{
                    height: itemSize,
                    width: itemSize,
                    backgroundColor: colors.appBackgrounColor1,
                    borderRadius: 10,
                    ...appStyles.shadow
                },
                    containerStyle
                ]}
            >
                <TextInput
                    // value={hour}
                    // onChangeText={onChangeHour}
                    style={{ textAlign: 'center', fontSize: fontSizes.h1, color: colors.appTextColor2 }}
                    {...props}
                />
            </Wrapper>
        )
    }

    const OptionButton = ({ onPress, label, isActive, containerStyle }) => {
        return (
            <Pressable
                onPress={onPress}
                style={[{
                    flex: 1,
                    justifyContent: 'center',
                    backgroundColor: !isActive ? colors.appBackgrounColor1 : colors.appColor2,
                    paddingHorizontal: width(2.5),

                },
                    containerStyle
                ]}>
                <Texts isH6 font1Regular>{label}</Texts>
            </Pressable>
        )
    }

    return (
        <Wrapper marginHorizontalBase>
            <Wrapper flexDirectionRow>
                <Wrapper flex={1} flexDirectionRow justifyContentSpaceBetween>
                    <InputBox
                        value={hour}
                        onChangeText={onChangeHour}
                    />
                    <Wrapper justifyContentCenter>
                        <Texts font1bold style={{ includeFontPadding: false, fontSize: totalSize(5), color: colors.appTextColor3 }}>:</Texts>
                    </Wrapper>
                    <InputBox
                        value={minute}
                        onChangeText={onChangeMinute}
                        containerStyle={{ backgroundColor: colors.appColor2 }}
                    />
                </Wrapper>
                <Spacer width={width(5)} />
                <Wrapper marginHorizontalBase style={{ borderWidth: 1, borderColor: colors.appTextColor1, borderRadius: 10 }}>
                    <OptionButton
                        label={'AM'}
                        isActive={isAm}
                        containerStyle={{
                            borderTopRightRadius: 10,
                            borderTopLeftRadius: 10,
                        }}
                        onPress={() => onPressAm('am')}
                    />
                    <Wrapper style={{ borderBottomWidth: 0.7, borderColor: colors.appTextColor1 }} />
                    <OptionButton
                        label={'PM'}
                        isActive={isPm}
                        containerStyle={{
                            borderBottomRightRadius: 10,
                            borderBottomLeftRadius: 10,
                        }}
                        onPress={() => onPressAm('pm')}
                    />
                </Wrapper>
            </Wrapper>
        </Wrapper>
    )
}