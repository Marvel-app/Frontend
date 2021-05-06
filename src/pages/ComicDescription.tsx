import { NavBar } from '../components/NavBar';
import { IComic } from './Home';

export const ComicDescription = (props: any) => {
  const {
    title,
    description,
    image,
    publish,
    coverArtist,
    penciler,
    writer,
  }: IComic = props.location.state;

  console.log(props.location.state);

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
          </div>
        </div>
      </div>
    </div>
  );
};
