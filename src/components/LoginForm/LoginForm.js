import React from 'react';

function LoginForm() {
  return (
    <section className="full-screen two-column-section">
      <section className="individual-column">
        <form>
          <label htmlFor="email-address">Email address</label>
          <input type="email" name="email-address" />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
          <input type="submit" value="Login" />
          <p><a href="/signup">Create an account &gt;</a></p>
        </form>
      </section>
    </section>
  );
}

export default LoginForm;
