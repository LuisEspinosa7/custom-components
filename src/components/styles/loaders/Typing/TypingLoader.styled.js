import styled, { keyframes } from 'styled-components';

const blinkCursorAnimation = keyframes`
    0%, 75% {
        opacity: 1;
    }

    76%, 100% {
        opacity: 0;
    }
`

export const StyledTypingLoaderContainer = styled.div`
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: ${props => props.blinkWidth ? props.blinkWidth : '2px'};
        height: 100%;
        background: ${props => props.blinkColor ? props.blinkColor : '#000'};
        animation: ${blinkCursorAnimation} 0.8s steps(3) infinite;
    }
`
StyledTypingLoaderContainer.displayName = 'div';

const typingAnimation = () => keyframes`
    0% {
        width: 0;
    }

    30%{
        width: 180.8px;
    }
`
export const StyledTypingLoaderText = styled.h2`
    position: relative;
    color: ${props => props.textColor ? props.textColor : '#000'};
    letter-spacing: 5px;
    font-size: 1.4rem;
    text-transform: uppercase;
    animation: ${typingAnimation} ${props => props.animationSeconds ? props.animationSeconds : '6s'} steps(10) infinite;
    overflow: hidden;
`
StyledTypingLoaderText.displayName = 'h2';
