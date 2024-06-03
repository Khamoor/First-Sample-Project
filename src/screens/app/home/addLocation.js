import React from 'react';
import Modal from "react-native-modal";
import { Buttons, Icons, Spacer, Textinputs, Texts, Wrapper } from '../../../components';
import { appIcons, appStyles, colors, fontSizes, fonts } from '../../../services/utilities';
import { height, width } from 'react-native-dimension'

export default function AddLocation({ isVisible, toggle }) {
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
                        customIcon={appIcons.location_2}
                        buttonSize={width(25)}
                        iconSize={width(12.5)}
                    />
                </Wrapper>
                <Spacer isSmall />
                <Texts isMedium font2Medium alignCenter>Add Location</Texts>
                <Spacer isSmall />
                <Textinputs.ColoredSecondary
                    placeholder='Search here'
                />
                <Spacer isBasic />
                <Wrapper alignItemsCenter>
                    <Buttons.ColoredGradient
                        title={'Submit'}
                        gradientColors={colors.appGradient3}
                        titleStyle={[appStyles.textRegular, appStyles.textFont2Regular, appStyles.textWhite]}
                        gradientStyle={{ height: height(5), paddingHorizontal: width(10) }}
                        onPress={toggle}
                    />
                </Wrapper>
            </Wrapper>
        </Modal>
    )
}