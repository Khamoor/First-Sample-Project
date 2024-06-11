import React from 'react'
import { Common, Headers, Scrollviews, Spacer, Texts, Wrapper } from '../../../components'
import { goBack } from '../../../navigation/rootNavigation'

export default function Index() {
    const text = 'Integer at faucibus urna. Nullam condimentum leo id elit sagittis auctor. Curabitur elementum nunc a leo imperdiet, nec elementum diam elementum. Etiam elementum euismod commodo. Proin eleifend eget quam ut efficitur. Mauris a accumsan mauris.\n\nPhasellus egestas et risus sit amet hendrerit. Nulla facilisi. Cras urna sem, vulputate sed condimentum a, posuere vel enim.\n\nInteger at faucibus urna. Nullam condimentum leo id elit sagittis auctor. Curabitur elementum nunc a leo imperdiet, nec elementum diam elementum. Etiam elementum euismod commodo.\n\nProin eleifend eget quam ut efficitur. Mauris a accumsan mauris. Phasellus egestas et risus sit amet hendrerit. Nulla facilisi. Cras urna sem, vulputate sed condimentum a, posuere vel enim.\n\nInteger at faucibus urna. Nullam condimentum leo id elit sagittis auctor. Curabitur elementum nunc a leo imperdiet, nec elementum diam elementum. Etiam elementum euismod commodo. Proin eleifend eget quam ut efficitur. Mauris a accumsan mauris.\n\nPhasellus egestas et risus sit amet hendrerit. Nulla facilisi. Cras urna sem, vulputate sed condimentum a, posuere vel enim.'
    return (
        <Wrapper isMain>
            <Headers.Primary
                title={'Terms of Service'}
                onPressBack={goBack}
            />
            <Common.BgImageWrapper>
                <Scrollviews.KeyboardAvoiding>
                    <Spacer isLarge />
                    <Wrapper marginHorizontalBase>
                        <Texts isMedium colorPrimary>{text}</Texts>
                    </Wrapper>
                    <Spacer isLarge />
                </Scrollviews.KeyboardAvoiding>
            </Common.BgImageWrapper>
        </Wrapper>
    )
}