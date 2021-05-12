import { useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { url, googleAuthUrl } from '../globals';
import { NavBar } from '../components/NavBar';
import Swal from 'sweetalert2';
import googleIcon from '../assets/images/google-icon.png';

interface RegisterUserForm {
  username: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

export const SignUpPage = () => {
  const history = useHistory();
  const [form, setForm] = useState<RegisterUserForm>({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleInput = (e: any) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validatePassword = () => {
    if (form.password !== form.confirmPassword) {
      Swal.fire({
        title: 'The passwords do not match',
        icon: 'error',
        confirmButtonText: 'Close',
      });
    } else {
      const formattedForm = {
        username: form.username,
        email: form.email,
        password: form.password,
      };
      registerUser(formattedForm);
    }
  };

  const registerUser = async (formattedForm: RegisterUserForm) => {
    const userInfo = JSON.stringify(formattedForm);
    console.log(userInfo);
    await fetch(`${url}/api/user/register`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: userInfo,
    })
      .then((r) => {
        switch (r.status) {
          case 201:
            Swal.fire({
              title: 'Account created, Welcome!',
              icon: 'success',
              confirmButtonText: 'Close',
            }).then(() => {
              history.push('/signin');
            });
            break;
          case 400:
            Swal.fire({
              title: 'Incorrect information',
              text: 'Please verify that your username or email are correct',
              icon: 'error',
              confirmButtonText: 'Close',
            });
            break;
          case 409:
            Swal.fire({
              title: 'Email or username already in use',
              icon: 'info',
              confirmButtonText: 'Close',
            });
            break;
          default:
            Swal.fire({
              title: 'There was an unexpected error!',
              text: 'Please report the problem',
              icon: 'error',
              confirmButtonText: 'Close',
            });
            break;
        }
      })
      .catch(() =>
        Swal.fire({
          title: 'There was an unexpected error!',
          text: 'Please report the problem',
          icon: 'error',
          confirmButtonText: 'Close',
        })
      );
  };

  return (
    <div className='sign-up-page'>
      <div className='sign-up-page__overlay'>
        <NavBar noBg={true} />
        <div className='sign-up-page__main'>
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
              <input
                name='username'
                placeholder='Username'
                type='text'
                onChange={handleInput}
              />
              <label>Email</label>
              <input
                name='email'
                placeholder='Email'
                type='email'
                onChange={handleInput}
              />
              <label>Password</label>
              <input
                name='password'
                placeholder='Password'
                type='password'
                onChange={handleInput}
              />
              <label>Confirm password</label>
              <input
                name='confirmPassword'
                placeholder='Confirm password'
                type='password'
                onChange={handleInput}
              />
              <button
                className='sign-up-page__card--getstarted'
                type='button'
                onClick={() => validatePassword()}
              >
                Get Started
              </button>
            </form>
            <p className='sign-up-page__card--or'>Or</p>
            <a
              className='sign-up-page__card--google'
              href={googleAuthUrl}
              rel='noreferrer'
            >
              <img src={googleIcon} alt='google icon' />
              Sign up with Google
            </a>
            <Link to='/signin' className='sign-up-page__card-signup-redirect'>
              <p>
                Already have an account? Sign in<span> here!</span>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
