import styled from 'styled-components';

export const StyledIconContainer = styled.div`
    width: ${props => props.width ? props.width : '30px'};
    height: ${props => props.height ? props.height : '30px'};
    color: ${props => props.color};
`
StyledIconContainer.displayName = 'div';