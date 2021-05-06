import './assets/styles/App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { SignInPage } from './pages/SignInPage';
import { Home } from './pages/Home';
import { SearchBar } from './pages/SearchBar';
import { FavoritesList } from './pages/FavoritesList';
import { ComicDescription } from './pages/ComicDescription';
import { LandingPage } from './pages/LandingPage';
import { SignUpPage } from './pages/SignUpPage';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/signup' component={SignUpPage} />
          <Route exact path='/signin' component={SignInPage} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/search' component={SearchBar} />
          <Route exact path='/favorites-list' component={FavoritesList} />
          <Route exact path='/comic-description' component={ComicDescription} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
