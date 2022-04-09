import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { StyledH3Title } from './H3Title.styled';

test('should render StyledH2Title with props', () => {
    const component = renderer.create(
        <StyledH3Title
            verticalMargin="1rem"
            horizontalMargin="1rem"
            verticalPadding="1rem"
            horizontalPadding="1rem"
            fontSize="2rem"
            textShadow="rgba(0,0,0,0.1)">Example</StyledH3Title>
    );
    const tree = component.toJSON();
    expect(tree).toHaveStyleRule('margin', '1rem 1rem');
    expect(tree).toHaveStyleRule('padding', '1rem 1rem');
    expect(tree).toHaveStyleRule('font-size', '2rem');
    expect(tree).toHaveStyleRule('text-shadow', 'rgba(0,0,0,0.1)');
    expect(tree).not.toHaveStyleRule('color');
    expect(tree).not.toHaveStyleRule('font-family');
})