import React from 'react';
import { Route } from 'react-router-dom';
import { Provider } from './Context/Context';
import LandingPage from './routes/LandingPage/LandingPage';
import SignUp from './routes/SignUp/SignUp';
import Login from './routes/Login/Login';
import Contests from './routes/Contests/Contests';
import ContestProfile from './routes/ContestProfile/ContestProfile';
import CreateContest from './routes/CreateContest/CreateContest';
import ContestLandingPage from './routes/ContestLandingPage/ContestLandingPage';
import PostSignUp from './routes/PostSignUp/PostSignUp';
import PrivateRoute from './Utils/PrivateRoute';

function App() {
  return (
    <>
      <Provider>
        <Route
          exact
          path="/home"
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
        <PrivateRoute
          exact
          component={Contests}
          path="/"
        />
        <PrivateRoute
          component={ContestProfile}
          exact
          path="/contest-profile/:contestId"
        />
        <PrivateRoute
          component={CreateContest}
          path="/create-contest"
        />
        <Route
          component={ContestLandingPage}
          exact
          path="/contest/:contestId"
        />
        <Route
          component={ContestLandingPage}
          exact
          path="/contest/:contestId/referrer/:referrerId"
        />
        <Route
          component={PostSignUp}
          exact
          path="/post-sign-up/:contestId/:participantId"
        />
      </Provider>
    </>
  );
}

export default App;
