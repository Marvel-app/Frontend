// eslint-disable-next-line jest/no-mocks-import
import { RouterMock } from '../../__mocks__/RouterMock';
import { render } from '@testing-library/react';
import { LoadingCircle } from '../../components/LoadingCircle';

describe('<LoadingCircle />', () => {
  test('Testing the render of the component', async () => {
    const { container } = render(
      <RouterMock>
        <LoadingCircle />
      </RouterMock>
    );

    expect(container.firstChild).toHaveClass('lds-ring');
  });
});
