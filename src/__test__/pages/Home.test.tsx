// eslint-disable-next-line jest/no-mocks-import
import { RouterMock } from '../../__mocks__/RouterMock';
import { render, screen } from '@testing-library/react';
import { Home } from '../../pages/Home';

function TestComponent() {
  return (
    <RouterMock>
      <Home />
    </RouterMock>
  );
}

describe('<Home />', () => {
  it('Should show the NavBar Title when the component is mounted', () => {
    render(<TestComponent />);
    screen.getByText(/marvel/i);
  });

  it('Should show the log out button when the component is mounted', () => {
    render(<TestComponent />);
    screen.getByText(/LOG OUT/i);
  });
});
