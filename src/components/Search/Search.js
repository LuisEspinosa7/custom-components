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
  textColor,
  placeholderColor
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
          role="textbox"
          type="text"
          placeholder={placeholder}
          name="q"
          onChange={(e) => handleSearch(e.target.value)}
          disabled={disabled}
          fontSize={fontSize}
          verticalPadding={verticalPadding}
          horizontalPadding={horizontalPadding}
          textColor={textColor}
          placeholderColor={placeholderColor}
        />
      </>
    );
  };

  const renderSearchWithIcon = () => {
    return (
      <>
        <StyledSearchInput
          role="textbox"
          type="text"
          ref={searchInput}
          name="q"
          placeholder={placeholder}
          disabled={disabled}
          fontSize={fontSize}
          verticalPadding={verticalPadding}
          horizontalPadding={horizontalPadding}
          textColor={textColor}
          placeholderColor={placeholderColor}
        />
        <StyledSearchButton
        role="button"
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
      role="form"
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
