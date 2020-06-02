/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import NavBar from '../../components/NavBar/NavBar';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import './SignUp.css';

function SignUp(props) {
  const { history } = props;
  return (
    <>
      <NavBar />
      <header className="sign-up-page">
        <h1>Create your Contestphyte account</h1>
      </header>
      <main>
        <RegistrationForm history={history} />
      </main>
    </>
  );
}

export default SignUp;

SignUp.propTypes = {
  history: PropTypes.object.isRequired,
};
