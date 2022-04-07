import React from "react";
import {
  StyledPaginationContainer,
  StyledPaginationLink,
  StyledPaginationList,
  StyledPaginationListItem,
} from "./Pagination.styled";

const Pagination = ({
  itemsPerPage,
  totalItems,
  paginate,
  verticalPadding,
  horizontalPadding,
  fontSize,
  scaleNumber,
  backgroundColor,
  activeColor,
  color,
  selected,
  disabled
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <StyledPaginationContainer 
      className={`${disabled ? "disabled" : ""}`}
      backgroundColor={backgroundColor}>
      <StyledPaginationList>
        {pageNumbers.length > 0 &&
          pageNumbers.map((number) => (
            <StyledPaginationListItem
              key={number}
              verticalPadding={verticalPadding}
              horizontalPadding={horizontalPadding}
              fontSize={fontSize}
              scaleNumber={scaleNumber}
              activeColor={activeColor}
              className={`${selected === number ? "active" : ""}`}
              onClick={() => {
                paginate(number);
              }}
            >
              <StyledPaginationLink
                color={color}>{number}</StyledPaginationLink>
            </StyledPaginationListItem>
          ))}
      </StyledPaginationList>
    </StyledPaginationContainer>
  );
};

export default Pagination;
