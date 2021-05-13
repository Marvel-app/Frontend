// eslint-disable-next-line jest/no-mocks-import
import { RouterMock } from '../../__mocks__/RouterMock';
import { fireEvent, render, screen } from '@testing-library/react';
import { SignInPage } from '../../pages/SignInPage';

describe('<SignInPage />', () => {
  render(
    <RouterMock>
      <SignInPage />
    </RouterMock>
  );
  const usernameInput = screen.getByPlaceholderText(/username/i);

  test('Testing the render of the username input', () => {
    //   screen.debug();

    expect(usernameInput).toHaveValue('');
  });

  test('Testing that the username input works', () => {
    fireEvent.change(usernameInput, { target: { value: 'John' } });

    expect(usernameInput).toHaveValue('John');
  });
});
