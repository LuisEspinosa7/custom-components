import styled from 'styled-components';

/* Useful for simple h1 titles */
export const StyledH1Title = styled.h1`
    text-align: ${props => props.textAlign};
    margin: ${props => props.verticalMargin ? props.verticalMargin : ''} ${props => props.horizontalMargin ? props.horizontalMargin : ''};
    padding: ${props => props.verticalPadding ? props.verticalPadding : ''} ${props => props.horizontalPadding ? props.horizontalPadding : ''};
    font-family: ${props => props.fontFamily ? props.fontFamily : ''};
    font-size: ${props => props.fontSize ? props.fontSize : ''};
    font-weight: ${props => props.fontWeight ? props.fontWeight : ''};
    text-shadow: ${props => props.textShadow ? props.textShadow : ''};
    color: ${props => props.color ? props.color : ''};

    /* // Mobile
    @media screen and (max-width: 767px) {
        padding: ${props => props.smallPadding ? props.smallPadding : ''};
        margin: ${props => props.smallMargin ? props.smallMargin : ''};
    }

    // Tablets
    @media screen and (min-width: 768px) and (max-width: 1023px) {
        padding: ${props => props.mediumPadding ? props.mediumPadding : ''};
        margin: ${props => props.mediumMargin ? props.mediumMargin : ''};
    } */

    // Desktop
    @media screen and (min-width: 1024px) {
        font-size: ${props => props.bigFontSize ? props.bigFontSize : ''};
    }
`

StyledH1Title.displayName = 'h1';