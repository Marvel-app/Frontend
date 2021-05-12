import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { Comic } from '../components/Comic';
import { NavBar } from '../components/NavBar';
import { url } from '../globals';
import { Info, IComic } from './Home';
import { getToken } from '../utils/getToken';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { LoadingCircle } from '../components/LoadingCircle';

interface SearchForm {
  comicName: string;
}

export const SearchBar = () => {
  const history = useHistory();
  const [isLoading, setIsloading] = useState(false);
  const [comicsFound, setComicsFound] = useState<Info>({ comicsArray: [] });
  const [numberOfComics, setNumberOfComics] = useState(10);
  const [form, setForm] = useState<SearchForm>({
    comicName: '',
  });

  const handleInput = (e: any) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validateToken = (): string => {
    const token = getToken();
    if (token === '') {
      history.push('/signin');
    }
    return token;
  };

  const searchComics = async () => {
    setIsloading(true);
    const token = validateToken();
    await fetch(
      `${url}/api/comics?heroname=${form.comicName}&numberComics=${numberOfComics}`,
      {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      }
    )
      .then(async (r) => {
        switch (r.status) {
          case 409:
            await Swal.fire({
              title: 'Name not found',
              text: 'The hero name does not match or does not exists',
              icon: 'error',
              confirmButtonText: 'Ok',
            });
            break;
          case 200:
            return r.json().then((response) => {
              // console.log('aqui estan los comic buscados', response);
              setIsloading(false);
              if (response !== undefined) {
                setComicsFound(response);
              }
            });
          default:
            await Swal.fire({
              title: 'Error searching the hero',
              text: 'Please report the problem',
              icon: 'error',
              confirmButtonText: 'Ok',
            });
            break;
        }
      })
      .catch(async () => {
        await Swal.fire({
          title: 'There was an unexpected error!',
          text: 'Please report the problem',
          icon: 'error',
          confirmButtonText: 'Close',
        });
      });
  };

  useEffect(() => {
    if (numberOfComics !== 10) {
      searchComics(); // console.log('useEffect activado');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numberOfComics]);

  return (
    <div className='search-bar'>
      <div className='search-bar__container'>
        <NavBar isHome={true} />
        <div className='search-bar__input-container'>
          <input
            type='text'
            name='comicName'
            placeholder='Write your favorite Hero'
            onChange={handleInput}
          />

          {isLoading ? (
            <LoadingCircle />
          ) : (
            <button type='button' onClick={() => searchComics()}>
              Search
            </button>
          )}
        </div>
        {comicsFound.comicsArray.length !== 0 ? (
          <>
            <h2 className='search-bar__title'>Comics Found</h2>
            <div className='search-bar__comics-container'>
              {comicsFound.comicsArray.map((comic: IComic) => (
                <div className='search-bar__comics-container-item'>
                  <Link to={{ pathname: '/comic-description', state: comic }}>
                    <Comic
                      key={comic.title}
                      title={comic.title}
                      thumbnail={comic.image}
                    />
                  </Link>
                </div>
              ))}
            </div>
            <div className='search-bar__load-more'>
              {isLoading ? (
                <LoadingCircle />
              ) : (
                <button
                  type='button'
                  onClick={() => setNumberOfComics(numberOfComics + 10)}
                >
                  Load more
                </button>
              )}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};
