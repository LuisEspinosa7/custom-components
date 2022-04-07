import styled from 'styled-components';

export const StyledDataTableBodyRow = styled.tr`
//border-bottom: 1px solid #dddddd;
transition: all 0.3s;
color: ${props => props.colorNormalRow ? props.colorNormalRow : '#f3f3f3'};

&:nth-of-type(even) {
    color: ${props => props.colorEvenRow ? props.colorEvenRow : '#f3f3f3'};
    background-color: ${props => props.backgroundEvenRow ? props.backgroundEvenRow : '#f3f3f3'};
}

&:last-of-type {
    border-bottom: 2px solid ${props => props.colorBottomTable ? props.colorBottomTable : '#009879'};
}

&:hover {
    transform: scale(1.01);
    color: ${props => props.hoverColor ? props.hoverColor : '#009879'};
    cursor: pointer;
}
`
StyledDataTableBodyRow.displayName = 'tr';


export const StyledDataTableBodyColum = styled.td`
padding: 12px 15px;
`
StyledDataTableBodyColum.displayName = 'td';