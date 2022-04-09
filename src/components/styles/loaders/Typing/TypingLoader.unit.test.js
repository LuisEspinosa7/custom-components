import { screen } from "@testing-library/react";
import { renderWithTheme } from "../../../../themes/testSettings";
import TypingLoader from "./TypingLoader";


test('should render TypingLoader by default - no props', () => {
    renderWithTheme(<TypingLoader />);
    expect(screen.getAllByRole('heading').length).toBe(1);
    expect(screen.getByRole('heading', {name: /Loading.../i})).toBeInTheDocument();
})