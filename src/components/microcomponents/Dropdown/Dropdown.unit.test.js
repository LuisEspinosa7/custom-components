import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from '../../../themes/testSettings';
import Dropdown from './Dropdown';

 /* Dropdown */

  const options = [
    {
      key: 1,
      value: "React",
    },
    {
      key: 2,
      value: "Angular",
    },
    {
      key: 3,
      value: "Vue",
    },
  ];

  const handleSelect = (selected) => {
    console.log("Select....");
    console.log(selected);
  };

test('should render Dropdown by default disabled', () => {
    renderWithTheme(
        <Dropdown
                options={options}
                setSelected={handleSelect}
                defaultOption="Choose one"
                width="170px"
                color="black"
                fontSize="1rem"
                contentPadding="10px"
                hoverColor="gray"
                backgroundColor="#fff"
                verticalMargin="0"
                horizontalMargin="0"
                disabled={true}
              />
    );

    expect(screen.getAllByRole('menu').length).toBe(1);
    expect(screen.getAllByRole('img').length).toBe(1);
    expect(screen.getAllByRole('menu')[0]['classList'].contains('disabled')).toBeTruthy();
})

test('should render Dropdown enabled and click on menu and select the first, callback called', () => {
    const onClick = jest.fn();
    
    renderWithTheme(
        <Dropdown
                options={options}
                setSelected={onClick}
                defaultOption="Choose one"
                width="170px"
                color="black"
                fontSize="1rem"
                contentPadding="10px"
                hoverColor="gray"
                backgroundColor="#fff"
                verticalMargin="0"
                horizontalMargin="0"
                disabled={false}
              />
    );

    expect(screen.getAllByRole('menu').length).toBe(1);
    const chooseMenu = screen.getAllByRole('menu')[0];
    userEvent.click(chooseMenu); // Click on menu
    expect(screen.getAllByRole('menuitem').length).toBe(3);
    const firstMenuItem = screen.getAllByRole('menuitem')[0];
    userEvent.click(firstMenuItem); // Click on the first element
    expect(onClick).toHaveBeenCalled(); // Callback is called.
})