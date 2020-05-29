import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import { Context } from '../../Context/Context';
import Loading from '../../components/Loading/Loading';

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
    const { loading } = this.context;
    let content;
    if (loading === true) {
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
