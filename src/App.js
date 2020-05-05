import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './routes/LandingPage/LandingPage';
import SignUp from './routes/SignUp/SignUp';
import Login from './routes/Login/Login';

function App() {
  return (
    <>
      <Route
        exact
        path="/"
        component={LandingPage}
      />
      <Route
        component={SignUp}
        path="/signup"
      />
      <Route
        component={Login}
        path="/login"
      />
    </>
  );
}

export default App;
