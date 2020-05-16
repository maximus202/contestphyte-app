import React from 'react';

function LoginForm() {
  return (
    <form className="sign-up-page">
      <label htmlFor="email-address">Email address</label>
      <input type="email" name="email-address" />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" />
      <input type="submit" value="Login" />
      <p><a href="/contests">Login to test account</a></p>
      <p><a href="/signup">Create an account &gt;</a></p>
    </form>
  );
}

export default LoginForm;
