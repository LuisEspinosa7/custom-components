import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { StyledFlexContainer } from './FlexContainer.styled';

test('should render StyledFlexContainer by default - no props', () => {
    const component = renderer.create(
        <StyledFlexContainer
            gridArea="content"
            verticalMargin="1rem"
            horizontalMargin="1rem"
            verticalPadding="1rem"
            horizontalPadding="1rem"
            width="1rem"
            height="1rem"
            boxShadow="2px 2px 2px rgba(0,0,0,0.1)"
            zIndex="10"
            >

        </StyledFlexContainer>
    );
    const tree = component.toJSON();
    expect(tree).toHaveStyleRule('grid-area', 'content');
    expect(tree).toHaveStyleRule('margin', '1rem 1rem');
    expect(tree).toHaveStyleRule('padding', '1rem 1rem');
    expect(tree).toHaveStyleRule('width', '1rem');
    expect(tree).toHaveStyleRule('height', '1rem');
    expect(tree).toHaveStyleRule('box-shadow', '2px 2px 2px rgba(0,0,0,0.1)');
    expect(tree).toHaveStyleRule('z-index', '10');
})