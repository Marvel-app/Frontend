import { useState } from 'react';
import Swal from 'sweetalert2';
import { Comic } from '../components/Comic';
import { NavBar } from '../components/NavBar';
import { url } from '../globals';
import { Info, IComic } from './Home';
import { getToken } from '../utils/getToken';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

interface SearchForm {
  comicName: string;
}

export const SearchBar = () => {
  const history = useHistory();
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

  const incrementNumberOfComics = () => {
    setNumberOfComics(numberOfComics + 10);
    searchComics();
  };

  const validateToken = (): string => {
    const token = getToken();
    if (token === '') {
      history.push('/signin');
    }
    return token;
  };

  const searchComics = async () => {
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
      .then((r) => r.json())
      .then((response) => {
        console.log('aqui estan los comic buscados', response);
        setComicsFound(response);
      })
      .catch(() =>
        Swal.fire({
          title: 'Ocurrio un error!',
          icon: 'error',
          confirmButtonText: 'Cerrar',
        }).then((result) => {
          if (result.value) {
            window.location.reload();
          }
        })
      );
  };

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
          <button type='button' onClick={() => searchComics()}>
            Search
          </button>
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
              <button type='button' onClick={() => incrementNumberOfComics()}>
                Load more
              </button>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};
