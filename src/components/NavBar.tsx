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
        <h2 className='nav-bar__title'>MARVEL</h2>
        <div className='nav-bar__options'>
          {landingPage ? (
            <>
              <a>SIGN IN</a>
              <a>SIGN UP</a>
            </>
          ) : null}
          {isHome ? <a>FAVORITES</a> : null}
        </div>
      </nav>
    </div>
  );
};
