import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { StyledIconContainer } from './IconContainer.styled';

test('should render StyledFlexContainer by default - no props', () => {
    const component = renderer.create(
        <StyledIconContainer>
        </StyledIconContainer>
    );
    const tree = component.toJSON();
    expect(tree).toHaveStyleRule('width', '30px');
    expect(tree).toHaveStyleRule('height', '30px');
})