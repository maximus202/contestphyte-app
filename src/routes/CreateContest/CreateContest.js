/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
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

CreateContest.propTypes = {
  history: PropTypes.object.isRequired,
};
