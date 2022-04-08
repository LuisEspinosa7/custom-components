import React from 'react'
import { useTheme } from 'styled-components'
import { StyledFlexContainer } from '../styles/containers/FlexContainer.styled'
import { StyledH1Title } from '../styles/typography/H1Title.styled'
import { StyledH2Title } from '../styles/typography/H2Title.styled'

const Header = () => {
  const theme = useTheme();

  return (
    <StyledFlexContainer
      gap="0.3rem"
      background={theme.colors.primary.normal}
      color={theme.colors.secondary.normal}
      flexDirection="column"
      smallMargin="1rem 0">
      <StyledH1Title
        fontWeight="500"
        bigFontSize="3rem">Custom Components</StyledH1Title>
      <StyledH2Title
        fontWeight="300"
        fontFamily="Beau Rivage"
        color={theme.colors.secondary.lighter}
        bigFontSize="2rem"> (by Luis Espinosa)</StyledH2Title>
    </StyledFlexContainer>
  )
}

export default Header