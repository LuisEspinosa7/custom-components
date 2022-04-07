import React from "react";
import { FaSadCry } from "react-icons/fa";
import { StyledFlexContainer } from "../styles/containers/FlexContainer.styled";
import { StyledIconContainer } from "../styles/containers/IconContainer.styled";

import { StyledParagraph } from "../styles/typography/Paragraph.styled";

const TableMessage = ({ iconWidth, iconHeight, fontSize, text, color }) => {
  return (
    <StyledFlexContainer 
        gap="0.5rem">
      <StyledIconContainer width={iconWidth} height={iconHeight} color={color}>
        <FaSadCry 
          role="img"
          style={{ width: "100%", height: "100%" }} />
      </StyledIconContainer>
      <StyledParagraph
        fontSize={fontSize}
        color={color}
        role="contentinfo">{text}</StyledParagraph>
    </StyledFlexContainer>
  );
};

export default TableMessage;