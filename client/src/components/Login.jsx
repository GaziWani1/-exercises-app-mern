import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../context/AuthProvider';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loggedIn = await login(identifier, password);

    if (loggedIn) {
      navigate('/home');
    } else {
     console.log('error at login');    
    }
  };

  return (
    <section className='flex justify-center items-center min-h-[80vh] w-full'>
      <section className='bg-white p-6 rounded-md shadow-md w-[340px]'>
        <h1 className='text-2xl text-center font-semibold text-gray-700'>
          Log In
        </h1>
        <form className='mx-auto' onSubmit={handleSubmit}>
          <div className='mb-5'>
            <label
              htmlFor='identifier'
              className='block mb-2 text-sm font-medium text-gray-900'
            >
              Email/Username
            </label>
            <input
              type='text'
              id='identifier'
              name='identifier'
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
              placeholder='email@gmail.com/username'
              required
            />
          </div>

          {/* Password input */}
          <div className='mb-5'>
            <label
              htmlFor='password'
              className='block mb-2 text-sm font-medium text-gray-900'
            >
              Password
            </label>
            <input
              type='password'
              id='password'
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
              required
            />
          </div>
          <div className='flex justify-between items-center w-full'>
            <button
              type='submit'
              className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'
            >
              Login
            </button>
            <p className='text-sm'>
              Create an account{' '}
              <span
                onClick={() => navigate('/signin')}
                className='cursor-pointer underline'
              >
                Sign up
              </span>
            </p>
          </div>
        </form>
      </section>
    </section>
  );
};

export default Login;
