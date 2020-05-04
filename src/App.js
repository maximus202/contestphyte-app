import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './routes/LandingPage/LandingPage';

function App() {
  return (
    <>
      <Route
        path="/"
        component={LandingPage}
      />
    </>
  );
}

export default App;
