import React, { useState } from 'react'
import { StyledDropdownButton, StyledDropdownContent, StyledDropdownItem, StyledDropdownOuterContainer } from './Dropdown.styled';
import { AiFillCaretDown } from "react-icons/ai";

const Dropdown = ({ options, setSelected, defaultOption, width, color, fontSize, contentPadding, hoverColor, backgroundColor, verticalMargin, horizontalMargin, disabled }) => {
  const [isActive, setIsActive] = useState(false);
  const [optionSelected, setOptionSelected] = useState(defaultOption);


  return (
    <StyledDropdownOuterContainer 
      width={width}
      fontSize={fontSize}
      verticalMargin={verticalMargin}
      horizontalMargin={horizontalMargin} >
      <StyledDropdownButton 
        color={color}
        backgroundColor={backgroundColor}
        verticalPadding="15px"
        horizontalPadding="20px"
        onClick={(e) => setIsActive(!isActive)}
        className={`${disabled ? "disabled" : ""}`}>
        {optionSelected}
        <AiFillCaretDown />
      </StyledDropdownButton>
      {isActive && (
        <StyledDropdownContent 
          padding={contentPadding}
          backgroundColor={backgroundColor}
          color={color}>
          {options.map((option) => (
            <StyledDropdownItem
              key={option.key}
              hoverColor={hoverColor}
              padding={contentPadding}
              onClick={(e) => {
                setSelected(option)
                setIsActive(false)
                setOptionSelected(option.value)
              }}>
              {option.value}
            </StyledDropdownItem>
          ))}
        </StyledDropdownContent>
      )}
    </StyledDropdownOuterContainer>
  )
}

export default Dropdown