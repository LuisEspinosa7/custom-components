import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { StyledGridContainer } from './GridContainer.styled';

test('should render StyledFlexContainer by default - no props', () => {
    const component = renderer.create(
        <StyledGridContainer
            gridArea="content"
            height="1rem"
            maxHeight="10rem"
            verticalMargin="1rem"
            horizontalMargin="1rem"
            background="red"
            color="blue"
            boxShadow="2px 2px 2px rgba(0,0,0,0.1)"
            borderRadius="10px"
            >

        </StyledGridContainer>
    );
    const tree = component.toJSON();
    expect(tree).toHaveStyleRule('grid-area', 'content');
    expect(tree).toHaveStyleRule('height', '1rem');
    expect(tree).toHaveStyleRule('max-height', '10rem');
    expect(tree).toHaveStyleRule('margin', '1rem 1rem');
    expect(tree).toHaveStyleRule('background', 'red');
    expect(tree).toHaveStyleRule('color', 'blue');
    expect(tree).toHaveStyleRule('box-shadow', '2px 2px 2px rgba(0,0,0,0.1)');
    expect(tree).toHaveStyleRule('border-radius', '10px');
})