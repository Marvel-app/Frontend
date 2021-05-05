import React, { useEffect, useState } from 'react';
import { NavBar } from '../components/NavBar';
import { Carrousel } from '../components/Carrousel';
import mockData from '../ironman.json';

export const Home = () => {
  const [data, setData] = useState({ heroInfo: {}, comicsArray: [] });
  const fetchComics = async () => {
    // console.log(mockData);
    setData(mockData as any);
  };

  useEffect(() => {
    fetchComics();
  }, []);
  return (
    <div className='home__background'>
      <NavBar isHome={true} />
      <Carrousel title='Favorite Comics' data={data as any} />
      <Carrousel title='Find New Comics' data={data as any} />
      <Carrousel title='Comics by Hero' data={data as any} />
    </div>
  );
};
