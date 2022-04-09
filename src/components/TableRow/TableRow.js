import React from "react";
import CheckBox from "../CheckBox/CheckBox";
import {
  StyledDataTableBodyColum,
  StyledDataTableBodyRow,
} from "./TableRow.styled";

const TableRow = ({
  element,
  handleItemSelected,
  checked,
  checkboxDisabled,
  rowColumns,
  colorBottomTable,
  hoverColor,
  colorNormalRow,
  colorEvenRow,
}) => {
  return (
    <StyledDataTableBodyRow
      role="row"
      colorBottomTable={colorBottomTable}
      hoverColor={hoverColor}
      colorNormalRow={colorNormalRow}
      colorEvenRow={colorEvenRow}
    >
      <StyledDataTableBodyColum
        role="cell">
        <CheckBox
          data={element}
          handleOnChange={handleItemSelected}
          checked={checked}
          disabled={checkboxDisabled}
        />
      </StyledDataTableBodyColum>

    {rowColumns && rowColumns.map(rowColumn => {
      return (
        <StyledDataTableBodyColum 
          role="cell"
          key={`${element['id']+rowColumn} `}>
          {element[`${rowColumn}`]}
        </StyledDataTableBodyColum>
      )
    })
    }
    </StyledDataTableBodyRow>
  );
};

export default TableRow;
