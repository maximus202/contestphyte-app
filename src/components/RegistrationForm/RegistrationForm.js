import React from 'react';
import './RegistrationForm.css';

function RegistrationForm() {
  return (
    <section className="full-screen two-column-section">
      <section className="individual-column">
        <form>
          <label name="first-name">First name</label>
          <input type="text" name="first-name" required />
          <label name="last-name">Last name</label>
          <input type="text" name="last-name" required />
          <label name="company-name">Company name</label>
          <input type="text" name="company-name" required />
          <label name="email-address">Email address</label>
          <input type="email" name="email-address" required />
          <label name="password">Password</label>
          <input type="password" name="email-address" required />
          <label name="password-retype">Re-type password</label>
          <input type="password" name="password-retype" required />
          <input type="submit" value="Create account" />
          <p><a href="/">Already have an account? Login &gt;</a></p>
        </form>
      </section>
    </section>
  );
}

export default RegistrationForm;
