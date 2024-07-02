import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { customFetch } from '../Fetch/fetch';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const apiUrl = 'http://localhost:5000/api/user/signin';
      const data = {
        username,
        email,
        password,
      };

      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      };

      const response = await customFetch(apiUrl, options);
      console.log('Sign in successful:', response);

      navigate('/login');
    } catch (error) {
      console.error('Error signing in:', error.message);
    
    }
  };

  return (
    <section className='flex justify-center items-center min-h-[80vh] w-full'>
      <section className='bg-white p-6 rounded-md shadow-md w-[340px]'>
        <h1 className='text-2xl text-center font-semibold text-gray-700'>
          Sign In
        </h1>
        <form className='mx-auto' onSubmit={handleSubmit}>
         
          <div className='mb-5'>
            <label
              htmlFor='username'
              className='block mb-2 text-sm font-medium text-gray-900'
            >
              User Name
            </label>
            <input
              type='text'
              id='username'
              name='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
              placeholder='username'
              required
            />
          </div>

          <div className='mb-5'>
            <label
              htmlFor='email'
              className='block mb-2 text-sm font-medium text-gray-900'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
              placeholder='name@gmail.com'
              required
            />
          </div>

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
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
              required
            />
          </div>

          <div className='flex justify-between items-center w-full'>
            <button
              type='submit'
              className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              Sign in
            </button>
            <p className='text-sm'>
              Already have an account{' '}
              <span
                onClick={() => navigate('/login')}
                className='cursor-pointer underline'
              >
                Login
              </span>{' '}
            </p>
          </div>
        </form>
      </section>
    </section>
  );
};

export default SignIn;
