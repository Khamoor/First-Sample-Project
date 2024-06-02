import React from 'react';
import Modal from "react-native-modal";
import { Spacer, Texts, Wrapper } from '../../../components';
import { appStyles, colors } from '../../../services/utilities';
import { height, width, totalSize } from 'react-native-dimension'
import { Icon } from '@rneui/base';
import { Pressable } from 'react-native';

export default function OilType({ isVisible, toggle }) {
    const options = [
        'Manufacturers Recommendation',
        '0W-20',
        '5W-20',
        '5W-30',
        '10W-30',
        '10W-40'
    ]
    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={toggle}
            style={{ margin: 0 }}
        >
            <Wrapper
                isColored
                style={[{
                    paddingHorizontal: totalSize(1),
                    paddingVertical: totalSize(1),
                },]}
            >
                <Wrapper
                    isColored
                    marginHorizontalZero
                    style={[{ paddingHorizontal: width(4), paddingVertical: height(1) }, appStyles.shadowLight]}
                >
                    <Wrapper flexDirectionRow alignItemsCenter>
                        <Wrapper flex={1}>
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
                <Spacer isBasic />
                <Wrapper
                    isColored
                    marginHorizontalZero
                    paddingVerticalZero
                    paddingHorizontalZero
                    style={[appStyles.shadowLight]}
                >
                    {
                        options.map((item, index) => {
                            return (
                                <React.Fragment key={index} >
                                    <Pressable onPress={() => { toggle() }}>
                                        <Wrapper paddingVerticalSmall paddingHorizontalBase>
                                            <Texts isMedium textColor2>{item}</Texts>
                                        </Wrapper>
                                    </Pressable>
                                    {
                                        index != options.length - 1 ?
                                            <Wrapper style={{ borderBottomWidth: 0.5, borderColor: colors.appTextColor1 }} />
                                            :
                                            null
                                    }
                                    {
                                        index === 0 ?
                                            <>
                                                <Wrapper paddingVerticalSmall paddingHorizontalBase>
                                                    <Texts isMedium textColor2 alignCenter>------- OR -------</Texts>
                                                </Wrapper>
                                                <Wrapper style={{ borderBottomWidth: 0.5, borderColor: colors.appTextColor1 }} />
                                            </>
                                            :
                                            null
                                    }
                                </React.Fragment>
                            )
                        })
                    }
                </Wrapper>
            </Wrapper>
        </Modal>
    )
}