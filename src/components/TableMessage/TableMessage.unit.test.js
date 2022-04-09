import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../themes/testSettings';
import TableMessage from './TableMessage';

test('should render TableMessage by default', () => {
    renderWithTheme(
        <TableMessage
              iconWidth="30px"
              iconHeight="30px"
              fontSize="1.3rem"
              text="No results!"
              color="black"
            />
    );

    expect(screen.getAllByRole('img').length).toBe(1);
    expect(screen.getAllByRole('contentinfo').length).toBe(1);
})