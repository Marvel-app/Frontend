import { Link } from 'react-router-dom';

interface Props {
  noBg?: boolean;
  landingPage?: boolean;
  isHome?: boolean;
}

export const NavBar = ({ noBg, landingPage, isHome }: Props) => {
  const deleteToken = () => {
    document.cookie = 'jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    console.log('borrando token');
  };
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
              <Link to='/signin'>
                <p onClick={() => deleteToken()}>LOG OUT</p>
              </Link>
            </>
          ) : null}
        </div>
      </nav>
    </div>
  );
};
