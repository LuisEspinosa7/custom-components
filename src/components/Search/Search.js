import React, { useRef } from "react";
import {
  StyledSearchButton,
  StyledSearchContainer,
  StyledSearchIcon,
  StyledSearchIconContainer,
  StyledSearchInput,
} from "./Search.styled";

const Search = ({
  placeholder,
  hasSearchButton,
  maxWidth,
  imageColor,
  handleSearch,
  disabled,
  colorDisabled,
  fontSize,
  verticalPadding,
  horizontalPadding,
  iconWidth,
  iconHeight,
  buttonVerticalMargin,
  buttonHorizontalMargin,
  verticalContainerPadding,
  horizontalContainerPadding,
  textColor
}) => {
  const searchInput = useRef();

  const handleClickSearch = (e) => {
    e.preventDefault();
    handleSearch(searchInput.current.value);
  };

  const renderSearchWithChange = () => {
    return (
      <>
        <StyledSearchInput
          type="text"
          placeholder={placeholder}
          name="q"
          onChange={(e) => handleSearch(e.target.value)}
          disabled={disabled}
          fontSize={fontSize}
          verticalPadding={verticalPadding}
          horizontalPadding={horizontalPadding}
          textColor={textColor}
        />
      </>
    );
  };

  const renderSearchWithIcon = () => {
    return (
      <>
        <StyledSearchInput
          type="text"
          ref={searchInput}
          placeholder={placeholder}
          disabled={disabled}
          fontSize={fontSize}
          verticalPadding={verticalPadding}
          horizontalPadding={horizontalPadding}
          textColor={textColor}
        />
        <StyledSearchButton
          iconWidth={iconWidth}
          iconHeight={iconHeight}
          onClick={handleClickSearch}
          verticalMargin={buttonVerticalMargin}
          horizontalMargin={buttonHorizontalMargin}
        >
          <StyledSearchIconContainer iconColor={imageColor}>
            <StyledSearchIcon />
          </StyledSearchIconContainer>
        </StyledSearchButton>
      </>
    );
  };

  return (
    <StyledSearchContainer
      maxWidth={maxWidth}
      colorDisabled={colorDisabled}
      verticalContainerPadding={verticalContainerPadding}
      horizontalContainerPadding={horizontalContainerPadding}
      className={`${disabled ? "disabled" : ""}`}
    >
      {hasSearchButton === "false"
        ? renderSearchWithChange()
        : renderSearchWithIcon()}
    </StyledSearchContainer>
  );
};

export default Search;
