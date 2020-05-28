import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import './CreateContest.css';
import CreateContestForm from '../../components/CreateContestForm/CreateContestForm';

function CreateContest(props) {
  const { history } = props;
  return (
    <>
      <NavBar />
      <header className="with-margins">
        <h1>Create a contest</h1>
      </header>
      <CreateContestForm history={history} />
    </>
  );
}

export default CreateContest;
