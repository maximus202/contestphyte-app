import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import LoginForm from '../../components/LoginForm/LoginForm';

function Login() {
  return (
    <>
      <NavBar />
      <main>
        <LoginForm />
      </main>
    </>
  );
}

export default Login;
