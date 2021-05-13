// eslint-disable-next-line jest/no-mocks-import
import { RouterMock } from '../../__mocks__/RouterMock';
import { LandingPage } from '../../pages/LandingPage';
import { render, screen } from '@testing-library/react';

describe('<LandingPage />', () => {
  test('Testing the render of the component', async () => {
    render(
      <RouterMock>
        <LandingPage />
      </RouterMock>
    );
    // screen.debug();

    expect(screen.getByText(/start now/i)).toHaveTextContent('Start now');
  });
});
