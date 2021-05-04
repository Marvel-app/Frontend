import { NavBar } from '../components/NavBar';
import googleIcon from '../assets/images/google-icon.png';

export const SignUpPage = () => {
  return (
    <div className='sign-up-page'>
      <div className='sign-up-page__overlay'>
        <NavBar noBg={true} />
        <h3 className='sign-up-page__title'>
          <span>Start your</span>
          <span>comics</span>
          <span>collection</span>
          <span>today!</span>
        </h3>
        <div className='sign-up-page__card'>
          <p className='sign-up-page__card--title'>Sign up</p>
          <form>
            <label>Username</label>
            <input name='username' placeholder='Username' type='text' />
            <label>Email</label>
            <input name='email' placeholder='Email' type='email' />
            <label>Password</label>
            <input name='password' placeholder='Password' type='password' />
            <label>Confirm password</label>
            <input
              name='confirmPassword'
              placeholder='Confirm password'
              type='password'
            />
            <button className='sign-up-page__card--getstarted' type='button'>
              Get Started
            </button>
          </form>
          <p className='sign-up-page__card--or'>Or</p>
          <button className='sign-up-page__card--google' type='button'>
            <img src={googleIcon} alt='google icon' />
            Sign up with Google
          </button>
        </div>
      </div>
    </div>
  );
};
