import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault;
  };

  const navigate = useNavigate();

  return (
    <section className='bg-white p-6 rounded-md shadow-md w-[340px] '>
      <h1 className='text-2xl text-center font-semibold text-gray-700'>
        LogIn
      </h1>
      <form className=' mx-auto' onSubmit={handleSubmit}>
        <div className='mb-5'>
          <label
            for='email'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Email/User name
          </label>
          <input
            type='email'
            id='email'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='email@gmial.com/username'
            required
          />
        </div>
        <div className='mb-5'>
          <label
            for='password'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Password
          </label>
          <input
            type='password'
            id='password'
            name='password'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            required
          />
        </div>
        <div className=' flex justify-between items-center w-full'>
          <button
            type='submit'
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Login
          </button>
          <p className='text-sm'>
            create an account{' '}
            <span
              onClick={() => navigate('/signin')}
              className='cursor-pointer underline'
            >
              Sign in
            </span>
          </p>
        </div>
      </form>
    </section>
  );
};

export default Login;
