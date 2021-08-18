import React, { useState, useEffect } from 'react';
import useAuth from 'customHooks/useAuth';
import { Link, useHistory } from 'react-router-dom';
const HomePage = () => {
  const auth = useAuth();
  const history = useHistory();
  const onLogout = () => {
    auth.logout(() => {
      history.push('/login');
    });
  };
  const { firstName, lastName, email } = auth.user;
  return (
    <div>
      <h1>This is the home page!</h1>
      <h2>{firstName}</h2>
      <h2>{lastName}</h2>
      <h2>{email}</h2>
      <button onClick={onLogout}>Logout.</button>
      <ul>
        <li>
          <Link to="/p1">Private Component 1</Link>
        </li>
        <li>
          <Link to="/p2">Private Component 2</Link>
        </li>
        <li>
          <Link to="/p3">Private Component 3</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
