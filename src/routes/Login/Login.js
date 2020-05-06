import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import LoginForm from '../../components/LoginForm/LoginForm';

function Login() {
  return (
    <>
      <NavBar />
      <header>
        <section className="individual-column">
          <h1>Login</h1>
        </section>
      </header>
      <main>
        <LoginForm />
      </main>
    </>
  );
}

export default Login;
