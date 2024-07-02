import React, { useEffect, useState } from 'react';
import Card from './Card';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';
import { customFetch } from '../Fetch/fetch';

const Home = () => {
  const { user, logout } = useAuth();
  const [exercises, setExersices] = useState([]);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Call the logout function from AuthContext
    navigate('/login'); // Redirect to login page after logout
  };

  const token = localStorage.getItem('token');

  useEffect(() => {
    getExersices();
  }, []);

  const getExersices = async () => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    const apiUrl = 'http://localhost:5000/api/exersices/getExersices';

    const response = await customFetch(apiUrl, options);
    setExersices(response?.data)
  };

  return (
    <section className="px-5 md:px-20 ">
      <div className="flex justify-between items-center ">
        <h1 className=" my-5 text-xl md:text-3xl font-semibold text-blue-400">
          Patient Name : {user?.username}
        </h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 h-[50px] rounded focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          Logout
        </button>
      </div>
      <div className="w-full flex flex-wrap gap-3 md:gap-4 items-center justify-center">
        {exercises.map((e) => {
          console.log(e)
          return (
            <React.Fragment key={e._id}>
              <Card id={e._id} name={e.name} positions={e.positions} />
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};

export default Home;
