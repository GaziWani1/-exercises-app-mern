import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import SignIn from './components/SignIn';
import { AuthProvider } from './context/AuthProvider';
import Header from './components/Header';
import ProtectedRoutes from './context/ProtectedRoutes';

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
      element: <ProtectedRoutes>
        <Home />
      </ProtectedRoutes>
      
    },
  ]);

  return (
    <AuthProvider>
    <main className=' bg-zinc-100 min-h-[100vh] w-full pb-5'>
     <Header />
      <RouterProvider router={router}
      ></RouterProvider>
    </main>
    </AuthProvider>
  );
};

export default App;
