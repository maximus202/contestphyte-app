import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

function SignUp() {
  return (
    <>
      <NavBar />
      <header>
        <section className="individual-column">
          <h1>Create your Contestphyte account</h1>
        </section>
      </header>
      <main>
        <RegistrationForm />
      </main>
    </>
  );
}

export default SignUp;
