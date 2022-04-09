import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { StyledH1Title } from './H1Title.styled';

test('should render StyledH1Title with props', () => {
    const component = renderer.create(
        <StyledH1Title
            verticalMargin="1rem"
            horizontalMargin="1rem"
            verticalPadding="1rem"
            horizontalPadding="1rem"
            fontSize="2rem"
            textShadow="rgba(0,0,0,0.1)"
            color='red'
            fontFamily="sans-serif">Example</StyledH1Title>
    );
    const tree = component.toJSON();
    expect(tree).toHaveStyleRule('margin', '1rem 1rem');
    expect(tree).toHaveStyleRule('padding', '1rem 1rem');
    expect(tree).toHaveStyleRule('font-size', '2rem');
    expect(tree).toHaveStyleRule('text-shadow', 'rgba(0,0,0,0.1)');
    expect(tree).toHaveStyleRule('color', 'red');
    expect(tree).toHaveStyleRule('font-family', 'sans-serif');
})