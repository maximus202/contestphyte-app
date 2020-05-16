import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import LoginForm from '../../components/LoginForm/LoginForm';

function Login() {
  return (
    <>
      <NavBar />
      <header className="sign-up-page">
        <h1>Login</h1>
      </header>
      <main>
        <LoginForm />
      </main>
    </>
  );
}

export default Login;
