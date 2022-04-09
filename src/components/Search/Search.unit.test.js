import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from '../../themes/testSettings';
import Search from './Search';

  const handleSearch = (searchTerm) => {
    console.log("Search term....");
    console.log(searchTerm);
  };

test('should render Search by default disabled', () => {
    renderWithTheme(
        <Search
              placeholder="Search..."
              hasSearchButton="false"
              maxWidth="180px"
              imageColor="red"
              handleSearch={handleSearch}
              fontSize="12px"
              verticalPadding="8px"
              horizontalPadding="10px"
              iconWidth="18px"
              iconHeight="18px"
              buttonVerticalMargin="0px"
              buttonHorizontalMargin="5px"
              verticalContainerPadding="2px"
              horizontalContainerPadding="2px"
              textColor="red"
              placeholderColor="black"
              disabled={true}
            />
    );

    expect(screen.getAllByRole('form').length).toBe(1);
    expect(screen.getAllByRole('textbox').length).toBe(1);
    expect(screen.getAllByRole('form')[0]['classList'].contains('disabled')).toBeTruthy();
})


test('should render Search without button  enabled, type a word and callback called', () => {
    const callbackFunction = jest.fn();

    renderWithTheme(
        <Search
              placeholder="Search..."
              hasSearchButton="false"
              maxWidth="180px"
              imageColor="red"
              handleSearch={callbackFunction}
              fontSize="12px"
              verticalPadding="8px"
              horizontalPadding="10px"
              iconWidth="18px"
              iconHeight="18px"
              buttonVerticalMargin="0px"
              buttonHorizontalMargin="5px"
              verticalContainerPadding="2px"
              horizontalContainerPadding="2px"
              textColor="red"
              placeholderColor="black"
              disabled={false}
            />
    );

    expect(screen.getAllByRole('form').length).toBe(1);
    expect(screen.getAllByRole('textbox').length).toBe(1);
    const searchInput = screen.getAllByRole('textbox')[0];
    userEvent.type(searchInput, 'Luis');
    expect(callbackFunction).toHaveBeenCalled();
})


test('should render Search with button  enabled, type a word and click the button', () => {
    const callbackFunction = jest.fn();

    renderWithTheme(
        <Search
              placeholder="Search..."
              hasSearchButton="true"
              maxWidth="180px"
              imageColor="red"
              handleSearch={callbackFunction}
              fontSize="12px"
              verticalPadding="8px"
              horizontalPadding="10px"
              iconWidth="18px"
              iconHeight="18px"
              buttonVerticalMargin="0px"
              buttonHorizontalMargin="5px"
              verticalContainerPadding="2px"
              horizontalContainerPadding="2px"
              textColor="red"
              placeholderColor="black"
              disabled={false}
            />
    );

    expect(screen.getAllByRole('form').length).toBe(1);
    expect(screen.getAllByRole('textbox').length).toBe(1);
    expect(screen.getAllByRole('button').length).toBe(1);
    const searchInput = screen.getAllByRole('textbox')[0];
    userEvent.type(searchInput, 'Luis');
    const searchButton = screen.getAllByRole('button')[0];
    userEvent.click(searchButton);
    expect(callbackFunction).toHaveBeenCalled();
})