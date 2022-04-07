import { ThemeProvider } from 'styled-components';
import Header from './components/Header/Header';
import { StyledFlexContainer } from './components/styles/containers/FlexContainer.styled';
import { StyledMainContainer } from './components/styles/containers/MainContainer.styled';
import GlobalStyles from './components/styles/general/Global.styled';
import Viewer from './components/Viewer/Viewer';
import { theme } from './themes/standard';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <StyledMainContainer>
          <Header />
          <StyledFlexContainer
            maxWidth="100%"
            background={theme.colors.primary.normal}
            color={theme.colors.secondary.normal}
            flexDirection="column"> 
              <Viewer />
          </StyledFlexContainer>
        </StyledMainContainer>
      </>
    </ThemeProvider>
  );
}

export default App;
