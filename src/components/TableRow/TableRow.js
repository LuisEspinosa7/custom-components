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
      colorBottomTable={colorBottomTable}
      hoverColor={hoverColor}
      colorNormalRow={colorNormalRow}
      colorEvenRow={colorEvenRow}
    >
      <StyledDataTableBodyColum>
        <CheckBox
          data={element}
          handleOnChange={handleItemSelected}
          checked={checked}
          disabled={checkboxDisabled}
        />
      </StyledDataTableBodyColum>

    {rowColumns && rowColumns.map(rowColumn => {
      return (
        <StyledDataTableBodyColum key={`${element['id']+rowColumn} `}>
          {element[`${rowColumn}`]}
        </StyledDataTableBodyColum>
      )
    })
    }
    </StyledDataTableBodyRow>
  );
};

export default TableRow;
