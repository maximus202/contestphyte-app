import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './routes/LandingPage/LandingPage';
import SignUp from './routes/SignUp/SignUp';
import Login from './routes/Login/Login';
import Contests from './routes/Contests/Contests';
import ContestProfile from './routes/ContestProfile/ContestProfile';
import CreateContest from './routes/CreateContest/CreateContest';
import ContestLandingPage from './routes/ContestLandingPage/ContestLandingPage';
import PostSignUp from './routes/PostSignUp/PostSignUp';

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
      <Route
        component={Contests}
        path="/contests"
      />
      <Route
        component={ContestProfile}
        exact
        path="/contest-profile/:contestId"
      />
      <Route
        component={CreateContest}
        path="/create-contest"
      />
      <Route
        component={ContestLandingPage}
        path="/contest/:contestId"
      />
      <Route
        component={PostSignUp}
        path="/post-sign-up/:contestId/:participantId"
      />
    </>
  );
}

export default App;
