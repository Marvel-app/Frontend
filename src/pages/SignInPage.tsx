import { NavBar } from '../components/NavBar';
import googleIcon from '../assets/images/google-icon.png';
import { Link, useHistory } from 'react-router-dom';
import { url } from '../globals';
import { useState } from 'react';
import Swal from 'sweetalert2';

interface LoginUserForm {
  username: string;
  password: string;
}

export const SignInPage = () => {
  const history = useHistory();
  const [form, setForm] = useState<LoginUserForm>({
    username: '',
    password: '',
  });

  const handleInput = (e: any) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const loginUser = async () => {
    const userInfo = JSON.stringify(form);
    console.log(userInfo);
    await fetch(`${url}/api/user/login`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: userInfo,
    })
      .then((r) => r.json())
      .then((response) => {
        const { jwt } = response;
        console.log(jwt);
        document.cookie = `jwt=${jwt};max-age=900;secure`;
        history.push('/home');
      })
      .catch(() =>
        Swal.fire({
          title: 'Ocurrio un error!',
          icon: 'error',
          confirmButtonText: 'Cerrar',
        }).then((result) => {
          if (result.value) {
            window.location.reload();
          }
        })
      );
  };

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
            <label>Username</label>
            <input
              name='username'
              placeholder='Username'
              type='text'
              onChange={handleInput}
            />
            <label>Password</label>
            <input
              name='password'
              placeholder='Password'
              type='password'
              onChange={handleInput}
            />
            <button
              className='sign-in-page__card--login'
              type='button'
              onClick={loginUser}
            >
              Log in
            </button>
          </form>
          <p className='sign-in-page__card--or'>Or</p>
          <a
            className='sign-in-page__card--google'
            href='https://marvelappplatzimaster.herokuapp.com/api/oauth/google'
            target='_blank'
            rel='noreferrer'
          >
            <img src={googleIcon} alt='google icon' />
            Log in with Google
          </a>
          <Link to='/signup' className='sign-in-page__card-signin-redirect'>
            <p>
              Don't have an account? Sign up<span> here!</span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
