import React from 'react';
import NavBar from '../../components/NavBar/NavBar';

function AccountSettings() {
  return (
    <>
      <NavBar />
      <header className="sign-up-page">
        <h1>Account Settings</h1>
      </header>
      <main>
        <form className="sign-up-page">
          <label htmlFor="first-name">First name</label>
          <input type="text" name="first-name" placeholder="Bob" />
          <label htmlFor="last-name">Last name</label>
          <input type="text" name="last-name" placeholder="Smith" />
          <label htmlFor="company-name">Company name</label>
          <input type="text" name="company-name" placeholder="ABC company" />
          <label htmlFor="email">Email address</label>
          <input type="text" name="email" placeholder="bsmith@company.com" />
          <input type="submit" value="Save" />
          <p><a href="/change-password">Change password &gt;</a></p>
        </form>
      </main>
    </>
  );
}

export default AccountSettings;
