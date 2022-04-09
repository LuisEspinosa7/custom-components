import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { StyledThreeElementsContainer } from './ThreeElementsContainer.styled';

test('should render StyledFlexContainer by default - no props', () => {
    const component = renderer.create(
        <StyledThreeElementsContainer>
        </StyledThreeElementsContainer>
    );
    const tree = component.toJSON();
    expect(tree).toHaveStyleRule('grid-template-rows', '0.7fr 4fr 0.8fr');
    expect(tree).toHaveStyleRule('grid-gap', '1rem');
})