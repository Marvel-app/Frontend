import { NavBar } from '../components/NavBar';

export const LandingPage = () => {
  return (
    <div className='landing-page'>
      <div className='landing-page__overlay'>
        <NavBar noBg={true} />
        <div className='landing-page__info'>
          <p>
            FIND YOUR <br />
            FAVORITES MARVEL <br />
            SUPERHEROES AND <br />
            ITS COMICS
          </p>
          <button type='button'>Start now</button>
        </div>
      </div>
    </div>
  );
};
