import { Comic } from '../components/Comic';
import { NavBar } from '../components/NavBar';
import { url } from '../globals';
import { IComic } from './Home';
import { getToken } from '../utils/getToken';
import { useHistory } from 'react-router';
import Swal from 'sweetalert2';

export const FavoritesList = (props: any) => {
  const history = useHistory();
  const favorites: IComic[] = props.location.state;

  const validateToken = (): string => {
    const token = getToken();
    if (token === '') {
      history.push('/signin');
    }
    return token;
  };

  const addComicsToFavorite = async (comics: IComic[], token: string) => {
    // console.log('elemento del for', element);
    const datos = { fav: comics };
    console.log(datos);
    await fetch(`${url}/api/user/favorites`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify(datos),
    })
      .then((r) => r.json())
      .then((response) => {
        console.log(response);
        // Swal.fire({
        //   title: 'You have 3 new comics in your favorites list',
        //   icon: 'success',
        //   confirmButtonText: 'Cool',
        // }).then((result) => {
        //   if (result.value) {
        //     window.location.reload();
        //   }
        // });
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

  const getRandomComics = async () => {
    const token = validateToken();
    await fetch(`${url}/api/comics/randoms?numberComics=3`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    })
      .then((r) => r.json())
      .then((response) => {
        console.log('aqui estan los comics randoms', response.comicsArray);
        addComicsToFavorite(response.comicsArray, token);
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
    <div className='favorites-list'>
      <div className='favorites-list__container'>
        <NavBar isHome={true} />
        <h2 className='favorites-list__title'>Favorites Comics</h2>
        {favorites.length === 0 ? (
          <p className='favorites-list__no-favorites'>
            You don't have any favorites
          </p>
        ) : (
          <div className='favorites-list__comics-container'>
            {favorites.map((comic: IComic) => (
              <div className='favorites-list__comics-container-item'>
                <Comic
                  key={comic.title}
                  title={comic.title}
                  thumbnail={comic.image}
                />
              </div>
            ))}
          </div>
        )}
        <div className='favorites-list__lucky'>
          <button type='button' onClick={() => getRandomComics()}>
            Add 3 random comics
          </button>
        </div>
      </div>
    </div>
  );
};
