import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from '../../themes/testSettings';
import CheckBox from './CheckBox';



  const handleCheck = (data) => {
    console.log("Check....");
    console.log(data);
  };

  const element = {
    'name': 'value'
  }

test('should render CheckBox by default disabled', () => {
    renderWithTheme(
        <CheckBox
          data={element}
          handleOnChange={handleCheck}
          checked={false}
          disabled={true}
        />
    );

    expect(screen.getAllByRole('checkbox').length).toBe(1);
    expect(screen.getAllByRole('checkbox')[0]).toBeDisabled();
})


test('should render CheckBox enabled and checked', () => {
    renderWithTheme(
        <CheckBox
          data={element}
          handleOnChange={handleCheck}
          checked={true}
          disabled={false}
        />
    );

    expect(screen.getAllByRole('checkbox').length).toBe(1);
    expect(screen.getAllByRole('checkbox')[0]).not.toBeDisabled();
    expect(screen.getAllByRole('checkbox')[0]).toBeChecked();
})

test('should render CheckBox enabled, not checked and click', () => {
    const callbackFunction = jest.fn();

    renderWithTheme(
        <CheckBox
          data={element}
          handleOnChange={callbackFunction}
          checked={false}
          disabled={false}
        />
    );

    expect(screen.getAllByRole('checkbox').length).toBe(1);
    expect(screen.getAllByRole('checkbox')[0]).not.toBeDisabled();
    expect(screen.getAllByRole('checkbox')[0]).not.toBeChecked();
    userEvent.click(screen.getAllByRole('checkbox')[0]); // Click on the checkbox
    expect(callbackFunction).toHaveBeenCalled();
})