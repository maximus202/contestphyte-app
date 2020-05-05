import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
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
