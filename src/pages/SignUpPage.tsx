import { useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { url } from '../globals';
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
        title: 'Contraseñas diferentes',
        text: 'Las contraseñas no coinciden por favor intenta de nuevo',
        icon: 'error',
        confirmButtonText: 'Cerrar',
      }).then((result) => {
        if (result.value) {
          window.location.reload();
        }
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
        if (r.status === 201) {
          Swal.fire({
            title: 'Cuenta creada ¡Bienvenido!',
            icon: 'success',
            confirmButtonText: 'Cerrar',
          }).then((result) => {
            if (result.value) {
              window.location.reload();
            }
          });
          history.push('/signin');
        } else {
          Swal.fire({
            title: 'Ocurrio un error!',
            icon: 'error',
            confirmButtonText: 'Cerrar',
          }).then((result) => {
            if (result.value) {
              window.location.reload();
            }
          });
        }
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
              href='https://marvelappplatzimaster.herokuapp.com/api/oauth/google'
              // target='_blank'
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
