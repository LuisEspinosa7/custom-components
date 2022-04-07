import styled from 'styled-components';

export const StyledDataTableHeader = styled.thead`
background-color: ${props => props.headerColor};
color: #ffffff;
text-align: left;
font-weight: bold;
`
StyledDataTableHeader.displayName = 'thead';


export const StyledDataTableHeaderColumn = styled.th`
padding: 12px 15px;
`
StyledDataTableHeaderColumn.displayName = 'th';