import styled from 'styled-components';

export const StyledDataTableContainer = styled.table`
    border-collapse: collapse;
    margin: ${props => props.margin ? props.margin : '0px'} 0;
    font-size: 0.9em;
    min-width: ${props => props.minWidth ? props.minWidth : '400px'};
    border-radius: 5px 5px 0 0;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
`
StyledDataTableContainer.displayName = 'table';
