import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from '../../themes/testSettings';
import Pagination from './Pagination';

 /* Pagination */
 const itemsPerPage = 5;
 const totalItems = 20;
 const handlePaginate = () => {
   console.log("Paginate....");
 };

test('should render Pagination by default disabled', () => {
    renderWithTheme(
        <Pagination
                itemsPerPage={itemsPerPage}
                totalItems={totalItems}
                paginate={handlePaginate}
                backgroundColor="violet"
                activeColor="white"
                color="black"
                selected={1}
                disabled={true}
                colorDisabled="red"
              />
    );
    expect(screen.getAllByRole('navigation').length).toBe(1);
    expect(screen.getAllByRole('list').length).toBe(1);
    expect(screen.getAllByRole('listitem').length).toBe(4);
    expect(screen.getAllByRole('link').length).toBe(4);
    
    //const firstListItem = screen.getAllByRole('listitem')[0]; //If you need to check for a disabled element.
    //expect(firstListItem).toBeDisabled();
})

test('should render Pagination enabled and active class on first element', () => {
    renderWithTheme(
        <Pagination
                itemsPerPage={itemsPerPage}
                totalItems={totalItems}
                paginate={handlePaginate}
                backgroundColor="violet"
                activeColor="white"
                color="black"
                selected={1}
                disabled={false}
              />
    );
    
    expect(screen.getAllByRole('listitem').length).toBe(4);
    expect(screen.getAllByRole('link').length).toBe(4);
    //console.log(screen.getAllByRole('listitem')[0]);
    //.getElementsByClassName(“Extra”)[0] // Another way of getting the element
    expect(screen.getAllByRole('listitem')[0]['classList'].contains('active')).toBeTruthy();
})

test('should render Pagination enabled and click on next element and callback called', () => {
    const onClick = jest.fn()

    renderWithTheme(
        <Pagination
                itemsPerPage={itemsPerPage}
                totalItems={totalItems}
                paginate={onClick}
                backgroundColor="violet"
                activeColor="white"
                color="black"
                selected={1}
                disabled={false}
              />
    );
    const element1 = screen.getAllByRole('listitem')[0];
    const element2 = screen.getAllByRole('listitem')[1];

    expect(element1['classList'].contains('active')).toBeTruthy(); // Before click
    userEvent.click(element2); // Click on element 2
    expect(onClick).toHaveBeenCalled(); // Callback function has been called at least once.
})

/*
test('should render Pagination enabled and click on next elements', () => {
    renderWithTheme(
        <Pagination
                itemsPerPage={itemsPerPage}
                totalItems={totalItems}
                paginate={handlePaginate}
                backgroundColor="violet"
                activeColor="white"
                color="black"
                selected={1}
                disabled={false}
              />
    );
    const element1 = screen.getAllByRole('listitem')[0];
    const element2 = screen.getAllByRole('listitem')[1];

    expect(element1['classList'].contains('active')).toBeTruthy(); // Before click
    userEvent.click(element2); // Click on element 2
    expect(screen.getAllByRole('listitem')[1]['classList'].contains('active')).toBeTruthy(); // Active class on second element
    //const element3 = screen.getAllByRole('listitem')[2];
    //const element4 = screen.getAllByRole('listitem')[3];
})
*/
