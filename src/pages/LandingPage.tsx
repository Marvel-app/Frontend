import { NavBar } from '../components/NavBar';

export const LandingPage = () => {
  return (
    <div className='landing-page'>
      <div className='landing-page__overlay'>
        <NavBar noBg={true} />
        <div className='landing-page__title'>
          <span>
            FIND YOUR <br />
            FAVORITES MARVEL <br />
            SUPERHEROES AND <br />
            ITS COMICS
          </span>
          <div className='landing-page__cta'>
            <button type='button'>Start now</button>
          </div>
        </div>
      </div>
    </div>
  );
};
