import React from "react";
import { AiOutlineSelect } from "react-icons/ai";
import { StyledDataTableHeader, StyledDataTableHeaderColumn } from "./TableHeader.styled";

const TableHeader = ({ headers, theme }) => {
  return (
    <StyledDataTableHeader
      role="rowheader"
      headerColor={theme.colors.secondary.lighter}>
      <tr role="row">
        <StyledDataTableHeaderColumn
          role="columnheader"
          key={1}>
          <AiOutlineSelect role="img"/>
        </StyledDataTableHeaderColumn>
        {headers &&
          headers.map((element) => (
            <StyledDataTableHeaderColumn 
              role="columnheader"
              key={element}>
              {element}
            </StyledDataTableHeaderColumn>
          ))}
      </tr>
    </StyledDataTableHeader>
  );
};

export default TableHeader;
