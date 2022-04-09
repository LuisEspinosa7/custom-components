import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom/extend-expect';
import { renderWithTheme } from "../../themes/testSettings";
import DatatableWrapper from "./DataTableWrapper";
import { mswServer } from "../../api-mocks/msw-server";
import { usersHandlerException } from "../../api-mocks/handlers";


test('should render Datatable with data successfull', async () => {
    // Interceptor with 6 users with a pagination with 3 users by default
    // So there should be 3 users per page.
    renderWithTheme(
        <DatatableWrapper />
    );
    const firstRow = await screen.findAllByText('Luis');
    expect(firstRow).toHaveLength(1);
    // Sorrounding elements
    expect(screen.getAllByRole('row').length).toBe(4); // Select, table header and body and paginator rows
    expect(screen.getAllByRole('menu').length).toBe(1); // Select wrapper
    expect(screen.getAllByRole('form').length).toBe(1); // Search form

    // Table elements
    expect(screen.getAllByRole('rowgroup').length).toBe(2);
    expect(screen.getAllByRole('columnheader').length).toBe(3);
    expect(screen.getAllByRole('cell').length).toBe(9); // 9 cells (columns) inside the 3 users on the first pagination
    
    // Pagination
    expect(screen.getAllByRole('navigation').length).toBe(1);
    expect(screen.getAllByRole('list').length).toBe(1);
    expect(screen.getAllByRole('listitem').length).toBe(2);
    expect(screen.getAllByRole('link').length).toBe(2);
})


test('should render Datatable - API Error', async () => {
    // Interceptor with an 400 error.
    mswServer.use(usersHandlerException);

    renderWithTheme(
        <DatatableWrapper />
    );

    const errorMessageElement = await screen.findAllByText('Error loading the data!');
    expect(errorMessageElement).toHaveLength(1);

    expect(screen.getAllByRole('contentinfo').length).toBe(1);
})


test('should render Datatable successfully - change to 4 rows per page', async () => {
    // Interceptor with 6 users with a pagination with 3 users by default
    // So there should be 3 users per page.
    renderWithTheme(
        <DatatableWrapper />
    );
    const firstRow = await screen.findAllByText('Luis');
    expect(firstRow).toHaveLength(1);
    expect(screen.getAllByRole('row').length).toBe(4);
    expect(screen.getAllByRole('cell').length).toBe(9); // 9 cells (columns) inside the 3 users on the first pagination

    const rowsPerPageMenu = screen.getAllByRole('menu')[0];
    userEvent.click(rowsPerPageMenu);

    expect(screen.getAllByRole('menuitem').length).toBe(3);

    const firstRowsMenuItem = screen.getAllByRole('menuitem')[1];
    userEvent.click(firstRowsMenuItem);

    expect(screen.getAllByRole('row').length).toBe(5); // Incremented 1 row (1 user)
    expect(screen.getAllByRole('cell').length).toBe(12); // 3 cells more for that user
})

test('should render Datatable successfully - second paginator page', async () => {
    // Interceptor with 6 users with a pagination with 3 users by default
    // So there should be 3 users per page.
    renderWithTheme(
        <DatatableWrapper />
    );
    const firstRow = await screen.findAllByText('Luis');
    expect(firstRow).toHaveLength(1);

    const secondPaginationButton = screen.getAllByRole('listitem')[1];
    userEvent.click(secondPaginationButton);

    const firstRowSecondPage = await screen.findAllByText('Pedro');
    expect(firstRowSecondPage).toHaveLength(1);
})


test('should render Datatable successfully - search for a user', async () => {
    // Interceptor with 6 users with a pagination with 3 users by default
    // So there should be 3 users per page.
    renderWithTheme(
        <DatatableWrapper />
    );
    const firstRow = await screen.findAllByText('Luis');
    expect(firstRow).toHaveLength(1);

    const searchBox = screen.getAllByRole('textbox')[0];
    userEvent.type(searchBox, 'Pedro');

    const searchResult = await screen.findAllByText('Pedro');
    expect(searchResult).toHaveLength(1);
})


test('should render Datatable - single mode selection - check one user', async () => {
    // Interceptor with 6 users with a pagination with 3 users by default
    // So there should be 3 users per page.
    renderWithTheme(
        <DatatableWrapper />
    );
    const firstRow = await screen.findAllByText('Luis');
    expect(firstRow).toHaveLength(1);

    const userCheckbox = screen.getAllByRole('checkbox')[0];
    userEvent.click(userCheckbox);

    expect(screen.getAllByRole('checkbox')[1]).toBeDisabled();
    expect(screen.getAllByRole('checkbox')[2]).toBeDisabled();
})
