import { Comic } from './Comic';
import { Info } from '../pages/Home';
import { Link } from 'react-router-dom';
import { LoadingCircle } from './LoadingCircle';

interface Props {
  title: string;
  data: Info;
  type?: 'favorites';
}

export const Carrousel = ({ title, data, type }: Props) => {
  if (type === 'favorites') {
    return (
      <div className='carrousel'>
        <div className='carrousel__headers'>
          <h2>{title}</h2>
          <Link to={{ pathname: '/favorites-list', state: data.comicsArray }}>
            <p>Manage your favorites</p>
          </Link>
        </div>
        <div className='carrousel__comic-container'>
          {data.comicsArray.length === 0 ? (
            <p>You don't have favorite comics. Add one!</p>
          ) : (
            data.comicsArray.map((comic: any) => (
              <div
                className='carrousel__comic-container-item'
                key={comic.title}
              >
                <Link to={{ pathname: '/comic-description', state: comic }}>
                  <Comic title={comic.title} thumbnail={comic.image} />
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    );
  } else {
    return (
      <div className='carrousel'>
        <div className='carrousel__headers'>
          <h2>{title}</h2>
          <Link to='/search'>
            <p>Find more</p>
          </Link>
        </div>
        <div className='carrousel__comic-container'>
          {data.comicsArray.length === 0 ? (
            <LoadingCircle />
          ) : (
            data.comicsArray.map((comic: any) => (
              <div
                className='carrousel__comic-container-item'
                key={comic.title}
              >
                <Link to={{ pathname: '/comic-description', state: comic }}>
                  <Comic title={comic.title} thumbnail={comic.image} />
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    );
  }
};
