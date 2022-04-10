import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom/extend-expect';
import { renderWithTheme } from "../../themes/testSettings";
import Viewer from "./Viewer";


test('should render Viewer by default - search something and 4 elements on pagination', async () => {
    
    renderWithTheme(
        <Viewer />
    );

    const firstSearchBox = screen.getAllByRole('textbox')[0];
    userEvent.type(firstSearchBox, 'something');
    const firstSearchButton = screen.getAllByRole('button')[0];
    userEvent.click(firstSearchButton);
    
    expect(firstSearchBox).toBeEnabled();
    // 4 elements on pagination
    const secondPaginteElement = screen.getAllByRole('listitem')[1];
    userEvent.click(secondPaginteElement);
    expect(screen.getAllByRole('listitem').length).toBe(4);
})