import { render } from '@testing-library/react';
// eslint-disable-next-line jest/no-mocks-import
import { RouterMock } from '../../__mocks__/RouterMock';
import { Carrousel } from '../../components/Carrousel';

const mockCarrousel = {
  title: 'MockTitle',
  data: {
    heroInfo: {
      heroName: 'Iron Man',
      heroDescription:
        'Wounded, captured and forced to build a weapon by his enemies, billionaire industrialist Tony Stark instead created an advanced suit of armor to save his life and escape captivity. Now with a new outlook on life, Tony uses his money and intelligence to make the world a safer, better place as Iron Man.',
      heroImage:
        'http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55.jpg',
    },
    comicsArray: [
      {
        title: 'Wolverine Saga (2009) #7',
        description: 'null',
        image: '',
        publish: '2029-12-31T00:00:00-0500',
        coverArtist: '',
        penciler: '',
        writer: '',
      },
    ],
  },
};

describe('<Carrousel />', () => {
  test('Testing the render of Carrousel', async () => {
    const carrousel = render(
      <RouterMock>
        <Carrousel title={mockCarrousel.title} data={mockCarrousel.data} />
      </RouterMock>
    );

    expect(await carrousel.findByText(mockCarrousel.title)).toBeInTheDocument();
  });
});
