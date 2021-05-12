import { NavBar } from '../../components/NavBar';
import { render } from '@testing-library/react';
import { RouterMock } from '../../__mocks__/RouterMock';

describe('<NavBar />', () => {
  test('Testing the render of NavBar title', async () => {
    const navBar = render(
      <RouterMock>
        <NavBar />
      </RouterMock>
    );

    expect((await navBar.findAllByText('MARVEL')).length).toEqual(1);
  });
});
