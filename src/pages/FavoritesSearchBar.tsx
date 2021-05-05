import { useEffect, useState } from 'react';
import { Comic } from '../components/Comic';
import { NavBar } from '../components/NavBar';
import mockData from '../ironman.json';

export const FavoritesSearchBar = () => {
  const [data, setData] = useState({ heroInfo: {}, comicsArray: [] });
  const fetchComics = async () => {
    // console.log(mockData);
    setData(mockData as any);
  };

  useEffect(() => {
    fetchComics();
  }, []);
  return (
    <div className='favorites-search-bar'>
      <div className='favorites-search-bar__container'>
        <NavBar isHome={true} />
        <div className='favorites-search-bar__input-container'>
          <input type='text' placeholder='Favorite Comic' />
        </div>
        <h2 className='favorites-search-bar__title'>Comics Found</h2>
        <div className='favorites-search-bar__comics-container'>
          {data.comicsArray.map((comic: any) => (
            <div className='favorites-search-bar__comics-container-item'>
              <Comic
                key={comic.title}
                title={comic.title}
                thumbnail={comic.image}
              />
            </div>
          ))}
        </div>
        <div className='favorites-search-bar__load-more'>
          <button type='button'>Load more</button>
        </div>
      </div>
    </div>
  );
};
