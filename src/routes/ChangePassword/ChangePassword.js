import React from 'react';
import NavBar from '../../components/NavBar/NavBar';

function ChangePassword() {
  return (
    <>
      <NavBar />
      <header>
        <h1>Change password</h1>
      </header>
      <section>
        <form>
          <label htmlFor="old-password">Old password</label>
          <input type="password" name="old-password" />
          <label htmlFor="new-password">New password</label>
          <input type="password" name="new-password" />
          <label htmlFor="confirm-new-password">Confirm new password</label>
          <input type="password" name="confirm-new-password" />
          <input type="submit" value="Change password" />
        </form>
      </section>
    </>
  );
}

export default ChangePassword;
