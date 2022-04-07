import React from "react";
import { AiOutlineSelect } from "react-icons/ai";
import { StyledDataTableHeader, StyledDataTableHeaderColumn } from "./TableHeader.styled";

const TableHeader = ({ headers, theme }) => {
  return (
    <StyledDataTableHeader
      headerColor={theme.colors.secondary.lighter}>
      <tr>
        <StyledDataTableHeaderColumn key={1}>
          <AiOutlineSelect />
        </StyledDataTableHeaderColumn>
        {headers &&
          headers.map((element) => (
            <StyledDataTableHeaderColumn key={element}>
              {element}
            </StyledDataTableHeaderColumn>
          ))}
      </tr>
    </StyledDataTableHeader>
  );
};

export default TableHeader;
