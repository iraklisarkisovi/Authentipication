import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateSite = () => {
  const valid = { token: true };

  return valid.token ? (
    <div className='App'>
      <h1>Welcome to the Private Section</h1>
      <Outlet />
    </div>
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateSite;
