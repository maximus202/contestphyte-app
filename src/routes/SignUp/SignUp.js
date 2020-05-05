import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

function SignUp() {
  return (
    <>
      <NavBar />
      <main>
        <RegistrationForm />
      </main>
    </>
  );
}

export default SignUp;
