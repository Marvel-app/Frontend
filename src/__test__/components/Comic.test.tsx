/* eslint-disable jest/no-mocks-import */
import { render } from '@testing-library/react';
import { RouterMock } from '../../__mocks__/RouterMock';
import { Comic } from '../../components/Comic';

const mockComic = {
  title: 'Wolverine Saga (2009) #7',
  image: 'http://i.annihil.us/u/prod/marvel/i/mg/5/d0/6066104ab59ac.jpg',
};

describe('<Comic />', () => {
  test('Testing the accesibility of the thumnail', async () => {
    const comic = render(
      <RouterMock>
        <Comic title={mockComic.title} thumbnail={mockComic.image} />
      </RouterMock>
    );

    expect(comic.getByAltText(mockComic.title)).toBeInTheDocument();
  });
});
