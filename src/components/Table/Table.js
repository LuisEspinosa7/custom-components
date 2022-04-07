import React from 'react'
import { StyledTableBodyColum, StyledTableBodyRow, StyledTableContainer, StyledTableHeader, StyledTableHeaderColumn } from './Table.styled'

const Table = ({ headers, data, headerColor, colorBottomTable, hoverColor, colorNormalRow, colorEvenRow }) => {
  
  return (
    <>
        <StyledTableContainer>
            <StyledTableHeader 
                headerColor={headerColor}>
                <tr>
                    {headers && headers.map((element) => (
                        <StyledTableHeaderColumn key={element}>{element}</StyledTableHeaderColumn>
                    ))}
                </tr>
            </StyledTableHeader>

            <tbody>
                { data && data.map((element) => (
                    <StyledTableBodyRow 
                        key={element.id}
                        colorBottomTable={colorBottomTable}
                        hoverColor={hoverColor}
                        colorNormalRow={colorNormalRow}
                        colorEvenRow={colorEvenRow}>
                        <StyledTableBodyColum>{element.id}</StyledTableBodyColum>
                        <StyledTableBodyColum>{element.name}</StyledTableBodyColum>
                        <StyledTableBodyColum>{element.points}</StyledTableBodyColum>
                        <StyledTableBodyColum>{element.team}</StyledTableBodyColum>
                    </StyledTableBodyRow>
                ))}
                
            </tbody>

        </StyledTableContainer> 
    </>
  )
}

export default Table