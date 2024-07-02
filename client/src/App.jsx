import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import SignIn from './components/SignIn';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <SignIn />,
    },
    {
      path: '/signin',
      element: <SignIn />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/home',
      element: <Home />,
    },
  ]);

  return (
    <main className=' bg-zinc-100 h-auto w-full'>
      <header className='flex w-full px-20 py-5 bg-white'>
        <h1 className='text-3xl text-blue-500 font-semibold'>Octopi.health</h1>
      </header>
      <RouterProvider router={router} />
    </main>
  );
};

export default App;
