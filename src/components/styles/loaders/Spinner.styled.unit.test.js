import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { StyledSpinner } from './Spinner.styled';

test('should render StyledSpinner by default - no props', () => {
    const component = renderer.create(
        <StyledSpinner />
    );
    const tree = component.toJSON();
    expect(tree).toHaveStyleRule('border', '4px solid rgba(0,0,0,.1)');
    expect(tree).toHaveStyleRule('width', '36px');
    expect(tree).toHaveStyleRule('height', '36px');
    expect(tree).toHaveStyleRule('border-left-color', '#09f');
})