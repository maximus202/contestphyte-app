import React from 'react';
import './LoginFailed.css';

function LoginFailed() {
  return (
    <section className="login-failed">
      <p>
        Your username/password combination was not found. Please
        {' '}
        <a href="/login">try again</a>
        .
      </p>
    </section>
  );
}

export default LoginFailed;
