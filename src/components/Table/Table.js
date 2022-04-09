import React from 'react'
import { StyledTableBodyColum, StyledTableBodyRow, StyledTableContainer, StyledTableHeader, StyledTableHeaderColumn } from './Table.styled'

const Table = ({ headers, data, headerColor, colorBottomTable, hoverColor, colorNormalRow, colorEvenRow, verticalMargin, horizontalMargin, tableMinWidth }) => {
  
  return (
    <>
        <StyledTableContainer 
            role="table"
            verticalMargin={verticalMargin} 
            horizontalMargin={horizontalMargin} 
            tableMinWidth={tableMinWidth}>
            <StyledTableHeader 
                role="rowheader"
                headerColor={headerColor}>
                <tr role="row">
                    {headers && headers.map((element) => (
                        <StyledTableHeaderColumn
                            role="columnheader"
                            key={element}>{element}</StyledTableHeaderColumn>
                    ))}
                </tr>
            </StyledTableHeader>

            <tbody>
                { data && data.map((element) => (
                    <StyledTableBodyRow
                        role="row" 
                        key={element.id}
                        colorBottomTable={colorBottomTable}
                        hoverColor={hoverColor}
                        colorNormalRow={colorNormalRow}
                        colorEvenRow={colorEvenRow}>
                        <StyledTableBodyColum role="cell">{element.id}</StyledTableBodyColum>
                        <StyledTableBodyColum role="cell">{element.name}</StyledTableBodyColum>
                        <StyledTableBodyColum role="cell">{element.points}</StyledTableBodyColum>
                        <StyledTableBodyColum role="cell">{element.team}</StyledTableBodyColum>
                    </StyledTableBodyRow>
                ))}
                
            </tbody>

        </StyledTableContainer> 
    </>
  )
}

export default Table