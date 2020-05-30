import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import { Context } from '../../Context/Context';
import Loading from '../../components/Loading/Loading';
import LoginFailed from '../../components/LoginFailed/LoginFailed';

class Login extends Component {
  static contextType = Context

  renderLoginPage() {
    const {
      handleSubmitJwtAuth,
      handleSubmitLoginEmail,
      handleSubmitLoginPassword,
    } = this.context;
    const { history } = this.props;

    return (
      <>
        <NavBar />
        <header className="sign-up-page">
          <h1>Login</h1>
        </header>
        <main>
          <form className="sign-up-page" onSubmit={(e) => handleSubmitJwtAuth(e, history)}>
            <label htmlFor="email-address">Email address</label>
            <input type="email" name="email-address" onChange={handleSubmitLoginEmail} required/>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" onChange={handleSubmitLoginPassword} required/>
            <input type="submit" value="Login" />
            <p><a href="/signup">Create an account &gt;</a></p>
          </form>
        </main>
      </>
    )
  }

  render() {
    const { error, loading } = this.context;
    let content;
    if (error) {
      content = (error.message === `incorrect username or password`)
        ? <LoginFailed />
        : <p>There was an error.</p>
    }
    else if (loading === true) {
      content = <Loading />;
    } else {
      content = this.renderLoginPage();
    }

    return (
      <>
        {content}
      </>
    );
  }
}

export default Login;
