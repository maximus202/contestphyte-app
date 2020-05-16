import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import './SignUp.css';

function SignUp() {
  return (
    <>
      <NavBar />
      <header className="sign-up-page">
        <h1>Create your Contestphyte account</h1>
      </header>
      <main>
        <RegistrationForm />
      </main>
    </>
  );
}

export default SignUp;
