import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { StyledCard } from './Card.styled';

test('should render StyledCard by default - no props', () => {
    const component = renderer.create(
        <StyledCard
            borderRadius="5px"
            verticalMargin="1rem"
            horizontalMargin="1rem"
            verticalPadding="1rem"
            horizontalPadding="1rem">

        </StyledCard>
    );
    const tree = component.toJSON();
    expect(tree).toHaveStyleRule('border-radius', '5px');
    expect(tree).toHaveStyleRule('margin', '1rem 1rem');
    expect(tree).toHaveStyleRule('padding', '1rem 1rem');
})