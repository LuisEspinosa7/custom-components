import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../themes/testSettings';
import TableHeader from './TableHeader';
import { theme } from './../../themes/standard';

test('should render TableMessage by default', () => {
    renderWithTheme(
        <table>
            <TableHeader 
            headers={headers} 
            theme={theme} />
        </table>
    );

    expect(screen.getAllByRole('rowgroup').length).toBe(1);
    expect(screen.getAllByRole('row').length).toBe(1);
    expect(screen.getAllByRole('columnheader').length).toBe(3);
    expect(screen.getAllByRole('img').length).toBe(1);
});

/* Table configurations */
const headers = ["Id", "Name"];