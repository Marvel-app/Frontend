import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router';
import { NavBar } from '../components/NavBar';
import { Carrousel } from '../components/Carrousel';
import { url } from '../globals';
import { getToken } from '../utils/getToken';

export interface IComic {
  title: string;
  description: string;
  image: string;
  publish: string;
  coverArtist: string;
  penciler: string;
  writer: string;
}

export interface IHero {
  heroName: string;
  heroDescription: string;
  heroImage: string;
}

export interface Info {
  heroInfo?: IHero;
  comicsArray: IComic[];
}

export const Home = ({ location }: any) => {
  const history = useHistory();
  const [favorites, setFavorites] = useState<Info>({ comicsArray: [] });
  const [newComics, setNewComics] = useState<Info>({ comicsArray: [] });
  const [comicsByHero, setComicsByHero] = useState<Info>({ comicsArray: [] });

  const getJwtFromGoogle = () => {
    if (location.search) {
      const trimJwt = location.search.slice(5);
      document.cookie = `jwt=${trimJwt};max-age=900;secure`;
    }
  };

  const getFavorites = async (token: string) => {
    await fetch(`${url}/api/user/favorites`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    })
      .then((r) => r.json())
      .then((response) => {
        // console.log('aqui estan los favoritos', response);
        setFavorites({ comicsArray: response.favorites });
      })
      .catch(() =>
        Swal.fire({
          title: 'There was an unexpected error!',
          text: 'Please report the problem',
          icon: 'error',
          confirmButtonText: 'Close',
        })
      );
  };

  const getNewComics = async (token: string) => {
    await fetch(`${url}/api/comics/randoms?numberComics=10`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    })
      .then((r) => r.json())
      .then((response) => {
        // console.log('aqui estan los comics nuevos', response);
        setNewComics({ comicsArray: response.comicsArray });
      })
      .catch(() =>
        Swal.fire({
          title: 'There was an unexpected error!',
          text: 'Please report the problem',
          icon: 'error',
          confirmButtonText: 'Close',
        })
      );
  };

  const getComicsByHero = async (token: string) => {
    await fetch(`${url}/api/comics?heroname=spider-man&numberComics=20`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    })
      .then((r) => r.json())
      .then((response) => {
        // console.log('aqui estan los comics por heroe', response);
        setComicsByHero(response);
      })
      .catch(() =>
        Swal.fire({
          title: 'There was an unexpected error!',
          text: 'Please report the problem',
          icon: 'error',
          confirmButtonText: 'Close',
        })
      );
  };

  // const getMockData = async () => {
  //   await fetch('ironman.json', {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Accept: 'application/json',
  //     },
  //   })
  //     .then((r) => r.json())
  //     .then((response) => {
  //       setFavorites(response);
  //       setNewComics(response);
  //       setComicsByHero(response);
  //     });
  // };

  const fetchComics = async () => {
    const token = getToken();
    if (getToken() === '') {
      history.push('/signin');
    } else {
      getFavorites(token);
      getNewComics(token);
      getComicsByHero(token);
    }
  };

  useEffect(() => {
    // getMockData();
    getJwtFromGoogle();
    fetchComics();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className='home__background'>
      <NavBar isHome={true} />
      <Carrousel title='Favorite Comics' data={favorites} type='favorites' />
      <Carrousel title='Find New Comics' data={newComics} />
      <Carrousel title='Comics by Hero' data={comicsByHero} />
    </div>
  );
};
