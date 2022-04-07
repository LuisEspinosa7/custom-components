import styled from 'styled-components';

export const StyledThreeElementsContainer = styled.div`
    display: grid;
    grid-template-rows: ${props => props.firstFraction ? props.firstFraction : '0.7fr'} ${props => props.secondFraction ? props.secondFraction : '4fr'} ${props => props.thirdFraction ? props.thirdFraction : '0.8fr'};
    grid-gap: ${props => props.gap ? props.gap : '1rem'};
`

StyledThreeElementsContainer.displayName = 'div';