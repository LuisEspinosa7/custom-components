import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from '../../themes/testSettings';
import Table from './Table';




test('should render Table by default', () => {
    renderWithTheme(
        <Table 
            headers={headers} 
            data={data} 
            headerColor="red" 
                    colorBottomTable="green"
                    hoverColor="gray"
                    colorNormalRow="black"
                    colorEvenRow="yellow" />
    );

    expect(screen.getAllByRole('table').length).toBe(1);
    expect(screen.getAllByRole('rowheader').length).toBe(1);
    expect(screen.getAllByRole('columnheader').length).toBe(4);
    expect(screen.getAllByRole('row').length).toBe(4);
    expect(screen.getAllByRole('cell').length).toBe(12);
})


/* Table */
const headers = ["Id", "Name", "Points", "Team"];
const data = [
  {
    "id": 1,
    "name": "Luis",
    "points": 88.1,
    "team": "Softca"
  },
  {
    "id": 2,
    "name": "Pedro",
    "points": 18.1,
    "team": "Sura"
  },
  {
    "id": 3,
    "name": "Juan",
    "points": 90.1,
    "team": "Gana"
  },
]