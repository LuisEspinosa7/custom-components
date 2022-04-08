import styled from 'styled-components';

export const StyledTableContainer = styled.table`
    border-collapse: collapse;
    margin: ${props => props.verticalMargin ? props.verticalMargin : ''} ${props => props.horizontalMargin ? props.horizontalMargin : ''};
    font-size: 0.9em;
    min-width: ${props => props.tableMinWidth ? props.tableMinWidth : '300px'};
    border-radius: 5px 5px 0 0;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
`
StyledTableContainer.displayName = 'table';

export const StyledTableHeader = styled.thead`
    background-color: ${props => props.headerColor};
    color: #ffffff;
    text-align: left;
    font-weight: bold;
`
StyledTableHeader.displayName = 'thead';


export const StyledTableHeaderColumn = styled.th`
    padding: 12px 15px;
`
StyledTableHeader.displayName = 'th';

export const StyledTableBodyRow = styled.tr`
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
StyledTableHeader.displayName = 'tr';


export const StyledTableBodyColum = styled.td`
    padding: 12px 15px;
`
StyledTableHeader.displayName = 'td';