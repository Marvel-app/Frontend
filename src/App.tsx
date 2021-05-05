import './assets/styles/App.scss';
import { SignInPage } from './pages/SignInPage';
import { Home } from './pages/Home';
import { FavoritesSearchBar } from './pages/FavoritesSearchBar';
import { FavoritesList } from './pages/FavoritesList';
import { ComicDescription } from './pages/ComicDescription';

function App() {
  return (
    <div className='App'>
      {/* <LandingPage /> */}
      {/* <SignUpPage /> */}
      {/* <SignInPage /> */}
      {/* <Home /> */}
      {/* <FavoritesSearchBar /> */}
      {/* <FavoritesList /> */}
      <ComicDescription />
    </div>
  );
}

export default App;
