import { NavBar } from '../components/NavBar';

export const ComicDescription = () => {
  return (
    <div className='comic-description'>
      <div className='comic-description__container'>
        <NavBar isHome={true} />
        <div className='comic-description__description-box'>
          <img
            className='comic-description__description-box-thumbnail'
            src='http://i.annihil.us/u/prod/marvel/i/mg/5/d0/6066104ab59ac.jpg'
            alt='comicThumnail'
          />
          <div className='comic-description__description-box-info'>
            <h3>New Mutans (2019) #17</h3>
            <div className='comic-description__description-box-details-container'>
              <div className='comic-description__description-box-details'>
                <p className='comic-description__description-box-details-title'>
                  Published
                </p>
                <p className='comic-description__description-box-details-body'>
                  April 28, 2021
                </p>
                <p className='comic-description__description-box-details-title'>
                  Writer
                </p>
                <p className='comic-description__description-box-details-body'>
                  Vita Ayala
                </p>
                <p className='comic-description__description-box-details-title'>
                  Cover Artist
                </p>
                <p className='comic-description__description-box-details-body'>
                  Christian Ward
                </p>
                <p className='comic-description__description-box-details-title'>
                  Penciler
                </p>
                <p className='comic-description__description-box-details-body'>
                  Rod Reis
                </p>
              </div>
              <div className='comic-description__description-box-description'>
                <p className='comic-description__description-box-details-title'>
                  Description
                </p>
                <p className='comic-description__description-box-details-body'>
                  WHAT'S LEFT OVER WHEN YOU GO HOME? With a mutant child lost in
                  Otherworld, it's up to the NEW MUTANTS to find and extract
                  him…without losing themselves in the process. Meanwhile, on
                  Krakoa: Warlock makes a friend. Wolfsbane makes a friend.
                  Magik makes some enemies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
