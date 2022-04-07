import styled from 'styled-components';

/* Useful for simple h2 titles */
export const StyledH2Title = styled.h2`
    text-align: ${props => props.textAlign};
    margin: ${props => props.verticalMargin ? props.verticalMargin : ''} ${props => props.horizontalMargin ? props.horizontalMargin : ''};
    padding: ${props => props.verticalPadding ? props.verticalPadding : ''} ${props => props.horizontalPadding ? props.horizontalPadding : ''};
    font-family: ${props => props.fontFamily ? props.fontFamily : ''};
    font-size: ${props => props.fontSize ? props.fontSize : ''};
    font-weight: ${props => props.fontWeight ? props.fontWeight : ''};
    text-shadow: ${props => props.textShadow ? props.textShadow : ''};
    color: ${props => props.color ? props.color : ''};
`

StyledH2Title.displayName = 'h2';