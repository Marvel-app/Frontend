interface Props {
  noBg?: boolean;
}

export const NavBar = ({ noBg }: Props) => {
  return (
    <div
      className='nav-bar'
      style={noBg ? { backgroundColor: 'transparent' } : undefined}
    >
      <nav className='nav-bar__container'>
        <h2 className='nav-bar__title'>MARVEL</h2>
        <div className='nav-bar__options'>
          <a>FAVORITES</a>
          <a>SIGN UP</a>
          <a>SIGN IN</a>
        </div>
      </nav>
    </div>
  );
};
