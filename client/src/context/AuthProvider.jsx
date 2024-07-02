import React, { createContext, useContext, useState } from 'react';
import { customFetch } from '../Fetch/fetch';
const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);
  const [token, setToken] = useState(localStorage.getItem('token'));

  const login = async (identifier, password) => {
    try {
      const apiUrl = 'http://localhost:5000/api/user/login';
      const data = { identifier, password };
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      };

      const response = await customFetch(apiUrl, options);

      if (response.success) {
        localStorage.setItem('user', JSON.stringify(response.data));
        localStorage.setItem('token', response.data.token);
        setUser(response.data);
        setToken(response.data.token);
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error('Error logging in:', error.message);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
    setToken(null);
  };

  const value = {
    user,
    token,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
