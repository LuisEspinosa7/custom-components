import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { StyledMainContainer } from './MainContainer.styled';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../themes/standard';

test('should render StyledMainContainer by default - no props', () => {
    const component = renderer.create(
        <ThemeProvider theme={theme}>
            <StyledMainContainer>
            </StyledMainContainer>
        </ThemeProvider>
    );
    const tree = component.toJSON();
    expect(tree).toHaveStyleRule('grid-template-columns', '1fr');
    expect(tree).toHaveStyleRule('grid-template-rows', '1fr');
    
})

test('should render StyledMainContainer with props', () => {
    const component = renderer.create(
        <ThemeProvider theme={theme}>
            <StyledMainContainer 
                smallGridTemplateColumns="1fr"
                smallGridTemplateRows="1fr"
                mediumGridTemplateColumns="1fr"
                mediumGridTemplateRows="1fr">
            </StyledMainContainer>  
        </ThemeProvider>
    );
    const tree = component.toJSON();
    expect(tree).toHaveStyleRule('grid-template-columns', '1fr');
    expect(tree).toHaveStyleRule('grid-template-rows', '1fr');
    
})