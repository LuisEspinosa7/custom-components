import styled, { keyframes } from 'styled-components';

const spinInfinite = keyframes`
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
`

export const StyledSpinner = styled.div`
    border: ${props => props.borderThickness ? props.borderThickness : '4px'} solid rgba(0, 0, 0, .1);
    width: ${props => props.width ? props.width : '36px'};
    height: ${props => props.height ? props.height : '36px'};
    border-radius: 50%;
    border-left-color: ${props => props.color ? props.color : '#09f'};
    animation-name: ${spinInfinite};
    animation: ${spinInfinite} 1s ease infinite;
`
StyledSpinner.displayName = 'div';