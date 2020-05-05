import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './routes/LandingPage/LandingPage';
import SignUp from './routes/SignUp/SignUp';

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
    </>
  );
}

export default App;
