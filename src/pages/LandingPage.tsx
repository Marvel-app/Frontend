import { useHistory } from 'react-router';
import { NavBar } from '../components/NavBar';

export const LandingPage = () => {
  const history = useHistory();

  return (
    <div className='landing-page'>
      <div className='landing-page__overlay'>
        <NavBar noBg={true} landingPage={true} />
        <div className='landing-page__info'>
          <p>
            FIND YOUR <br />
            FAVORITES MARVEL <br />
            SUPERHEROES AND <br />
            ITS COMICS
          </p>
          <button
            type='button'
            onClick={() => {
              history.push('/signin');
            }}
          >
            Start now
          </button>
        </div>
      </div>
    </div>
  );
};
