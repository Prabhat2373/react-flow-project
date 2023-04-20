import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoutes = ({ children }: any) => {
  const nav = useNavigate();
  const isLoggedIn = true;
  if (!isLoggedIn) {
    return nav('/login');
  }
  return children;
};

export default ProtectedRoutes;
