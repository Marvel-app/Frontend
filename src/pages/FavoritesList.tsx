import React, { useEffect, useState } from 'react';
import { Comic } from '../components/Comic';
import mockData from '../ironman.json';
import { NavBar } from '../components/NavBar';

export const FavoritesList = () => {
  const [data, setData] = useState({ heroInfo: {}, comicsArray: [] });
  const fetchComics = async () => {
    // console.log(mockData);
    setData(mockData as any);
  };

  useEffect(() => {
    fetchComics();
  }, []);
  return (
    <div className='favorites-list'>
      <div className='favorites-list__container'>
        <NavBar isHome={true} />
        <h2 className='favorites-list__title'>Favorites Comics</h2>
        <div className='favorites-list__comics-container'>
          {data.comicsArray.map((comic: any) => (
            <div className='favorites-list__comics-container-item'>
              <Comic
                key={comic.title}
                title={comic.title}
                thumbnail={comic.image}
              />
            </div>
          ))}
        </div>
        <div className='favorites-list__lucky'>
          <button type='button'>Feeling lucky?</button>
        </div>
      </div>
    </div>
  );
};
