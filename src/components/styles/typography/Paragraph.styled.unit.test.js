import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { StyledParagraph } from './Paragraph.styled'; 

test('should render StyledParagraph with props', () => {
    const component = renderer.create(
        <StyledParagraph
            verticalPadding="1rem"
            horizontalPadding="1rem"
            fontSize="2rem"
            fontWeight="300">Example</StyledParagraph>
    );
    const tree = component.toJSON();
    expect(tree).toHaveStyleRule('padding', '1rem 1rem');
    expect(tree).toHaveStyleRule('font-size', '2rem');
    expect(tree).toHaveStyleRule('font-weight', '300');
    expect(tree).not.toHaveStyleRule('color');
})