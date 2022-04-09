import React from "react";
import { StyledDataTableBodyCheckBox } from "./CheckBox.styled";

const CheckBox = ({ handleOnChange, data, checked, disabled }) => {

  return (
    <>
      <StyledDataTableBodyCheckBox
        type="checkbox"
        role="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={() => handleOnChange(data)}
      />
    </>
  );
};

export default CheckBox;