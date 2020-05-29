import React from 'react';
import { Link } from 'react-router-dom';

function LoggedIn() {
  return (
    <ul>
      <li><Link to="/signup">Get started</Link></li>
      <li><Link to="/login">Login</Link></li>
    </ul>
  );
}

export default LoggedIn;
