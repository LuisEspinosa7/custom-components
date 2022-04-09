import React from "react";
import {
  StyledTypingLoaderContainer,
  StyledTypingLoaderText,
} from "./TypingLoader.styled";

const TypingLoader = ({ blickWidth, blickColor, textColor, animationSeconds }) => {
  
  return (
    <StyledTypingLoaderContainer blinkWidth={blickWidth} blinkColor={blickColor}>
      <StyledTypingLoaderText
        textColor={textColor}
        animationSeconds={animationSeconds}
        role="heading"
      >
        Loading...
      </StyledTypingLoaderText>
    </StyledTypingLoaderContainer>
  );
};

export default TypingLoader;
