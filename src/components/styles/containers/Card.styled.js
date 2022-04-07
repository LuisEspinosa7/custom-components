import styled from 'styled-components';

export const StyledCard = styled.div`
    background-color: ${props => props.backgroundColor};
    width: ${props => props.width};
    height: ${props => props.height};
    border-radius: ${props => props.borderRadius ? props.borderRadius : '5px'};
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    margin: ${props => props.verticalMargin ? props.verticalMargin : ''} ${props => props.horizontalMargin ? props.horizontalMargin : ''};
    padding: ${props => props.verticalPadding ? props.verticalPadding : ''} ${props => props.horizontalPadding ? props.horizontalPadding : ''};
    margin: ${props => props.margin};
`

StyledCard.displayName = 'div';