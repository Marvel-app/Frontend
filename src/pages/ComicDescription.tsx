import { NavBar } from '../components/NavBar';
import { url } from '../globals';
import { IComic } from './Home';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router';
import { getToken } from '../utils/getToken';

export const ComicDescription = (props: any) => {
  const history = useHistory();
  const {
    title,
    description,
    image,
    publish,
    coverArtist,
    penciler,
    writer,
  }: IComic = props.location.state;

  const validateToken = (): string => {
    const token = getToken();
    if (token === '') {
      history.push('/signin');
    }
    return token;
  };
  // console.log(props.location.state);
  const addComicToFavorite = async () => {
    const token = validateToken();
    const body = {
      title,
      description,
      image,
      publish,
      coverArtist,
      penciler,
      writer,
    };
    await fetch(`${url}/api/user/favorites`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify(body),
    })
      .then((r) => r.json())
      .then((response) => {
        console.log(response);
        Swal.fire({
          title: 'Comic added succesfully to your favorites',
          icon: 'success',
          confirmButtonText: 'Cool',
        });
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
    <div className='comic-description'>
      <div className='comic-description__container'>
        <NavBar isHome={true} />
        <div className='comic-description__description-box'>
          <img
            className='comic-description__description-box-thumbnail'
            src={image}
            alt={title}
          />
          <div className='comic-description__description-box-info'>
            <h3>{title}</h3>
            <div className='comic-description__description-box-details-container'>
              <div className='comic-description__description-box-details'>
                {publish !== '' ? (
                  <>
                    <p className='comic-description__description-box-details-title'>
                      Published
                    </p>
                    <p className='comic-description__description-box-details-body'>
                      {new Date(publish).toLocaleDateString()}
                    </p>
                  </>
                ) : null}
                {writer !== '' ? (
                  <>
                    <p className='comic-description__description-box-details-title'>
                      Writer
                    </p>
                    <p className='comic-description__description-box-details-body'>
                      {writer}
                    </p>
                  </>
                ) : null}
                {coverArtist !== '' ? (
                  <>
                    <p className='comic-description__description-box-details-title'>
                      Cover Artist
                    </p>
                    <p className='comic-description__description-box-details-body'>
                      {coverArtist}
                    </p>
                  </>
                ) : null}
                {penciler !== '' ? (
                  <>
                    <p className='comic-description__description-box-details-title'>
                      Penciler
                    </p>
                    <p className='comic-description__description-box-details-body'>
                      {penciler}
                    </p>
                  </>
                ) : null}
              </div>
              <div className='comic-description__description-box-description'>
                {description !== 'null' ? (
                  <>
                    <p className='comic-description__description-box-details-title'>
                      Description
                    </p>
                    <p className='comic-description__description-box-details-body'>
                      {description}
                    </p>
                  </>
                ) : null}
              </div>
            </div>
            <div className='comic-description__add-to-favorite'>
              <button type='button' onClick={() => addComicToFavorite()}>
                Add to favorites
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
