import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from '../../themes/testSettings';
import TableRow from './TableRow';

  const handleItemSelect = (element) => {
    console.log("Search term....");
    console.log(element.name);
  };

  const element = {
      "id": 1,
      "name": "Luis"
  }

  const dataFields = ["id", "name"];

test('should render TableRow by default checkbox disabled', () => {
    renderWithTheme(
        <table>
            <tbody>
                <TableRow
                key="h71s9a"
                element={element}
                handleItemSelected={handleItemSelect}
                checked={false}
                checkboxDisabled={true}
                rowColumns={dataFields}
            />
            </tbody>
        </table>
    );

    expect(screen.getAllByRole('row').length).toBe(1);
    expect(screen.getAllByRole('cell').length).toBe(3);
    expect(screen.getAllByRole('checkbox').length).toBe(1);
    expect(screen.getAllByRole('checkbox')[0]).toBeDisabled();
})