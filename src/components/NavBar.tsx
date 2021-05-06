import { Link } from 'react-router-dom';

interface Props {
  noBg?: boolean;
  landingPage?: boolean;
  isHome?: boolean;
}

export const NavBar = ({ noBg, landingPage, isHome }: Props) => {
  return (
    <div
      className='nav-bar'
      style={noBg ? { backgroundColor: 'transparent' } : undefined}
    >
      <nav className='nav-bar__container'>
        <Link to='/home'>
          <h2 className='nav-bar__title'>MARVEL</h2>
        </Link>
        <div className='nav-bar__options'>
          {landingPage ? (
            <>
              <Link to='/signin'>
                <p>SIGN IN</p>
              </Link>
              <Link to='/signin'>
                <p>SIGN UP</p>
              </Link>
            </>
          ) : null}
          {isHome ? (
            <>
              <Link to='/favorites-list'>
                <p>FAVORITES</p>
              </Link>
              <Link to='/signin'>
                <p>LOG OUT</p>
              </Link>
            </>
          ) : null}
        </div>
      </nav>
    </div>
  );
};
