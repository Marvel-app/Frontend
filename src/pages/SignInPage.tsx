import { NavBar } from '../components/NavBar';
import googleIcon from '../assets/images/google-icon.png';

export const SignInPage = () => {
  return (
    <div className='sign-in-page'>
      <div className='sign-in-page__overlay'>
        <NavBar noBg={true} />
        <h3 className='sign-in-page__title'>
          <span>Welcome Back!</span>
        </h3>
        <div className='sign-in-page__card'>
          <p className='sign-in-page__card--title'>Sign in</p>
          <form>
            <label>Username or email</label>
            <input
              name='username'
              placeholder='Username or email'
              type='text'
            />
            <label>Password</label>
            <input name='password' placeholder='Password' type='password' />
            <button className='sign-in-page__card--login' type='button'>
              Login
            </button>
          </form>
          <p className='sign-in-page__card--or'>Or</p>
          <button className='sign-in-page__card--google' type='button'>
            <img src={googleIcon} alt='google icon' />
            Log in with Google
          </button>
        </div>
      </div>
    </div>
  );
};
