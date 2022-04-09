import { screen } from "@testing-library/react";
import { renderWithTheme } from "../../themes/testSettings";
import Header from "./Header";

test('should render Header component', () => {
    renderWithTheme(<Header />);
    expect(screen.getAllByRole('heading').length).toBe(2);
})