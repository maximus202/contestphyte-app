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
import ParticipantsList from './routes/ParticipantsList/ParticipantsList';
import AccountSettings from './routes/AccountSettings/AccountSettings';
import ChangePassword from './routes/ChangePassword/ChangePassword';
import EditContest from './routes/EditContest/EditContest';

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
        component={EditContest}
        exact
        path="/edit-contest/:contestId"
      />
      <Route
        component={ContestLandingPage}
        exact
        path="/contest/:contestId"
      />
      <Route
        component={ContestLandingPage}
        exact
        path="/contest/:contestId/:referrerId"
      />
      <Route
        component={PostSignUp}
        exact
        path="/post-sign-up/:contestId/:participantId"
      />
      <Route
        component={ParticipantsList}
        exact
        path="/participants-list/:contestId"
      />
      <Route
        component={AccountSettings}
        path="/account-settings"
      />
      <Route
        component={ChangePassword}
        path="/change-password"
      />
    </>
  );
}

export default App;
