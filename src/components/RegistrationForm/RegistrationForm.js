import React, { Component } from 'react';
import './RegistrationForm.css';
import ApiService from '../../services/api-service';

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      handleFirstNameInputChange: this.handleFirstNameInputChange,
      handleLastNameInputChange: this.handleLastNameInputChange,
      handleEmailInputChange: this.handleEmailInputChange,
      handlePasswordInputChange: this.handlePasswordInputChange,
      handleSubmitNewUser: this.handleSubmitNewUser,
    };
  }

  handleFirstNameInputChange = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  }

  handleLastNameInputChange = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  }

  handleEmailInputChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  }

  handlePasswordInputChange = (event) => {
    this.setState({
      password: event.target.value,
    });
  }

  handleSubmitNewUser = (e) => {
    e.preventDefault();
    const { history } = this.props;
    const {
      firstName,
      lastName,
      email,
      password,
    } = this.state;
    const inputData = {
      first_name: firstName,
      last_name: lastName,
      email_address: email,
      password,
    };
    ApiService.submitNewUser(inputData, history)
      .then(() => history.push('/login'))
  }

  render() {
    const { handleFirstNameInputChange } = this.state;
    const { handleLastNameInputChange } = this.state;
    const { handleEmailInputChange } = this.state;
    const { handlePasswordInputChange } = this.state;
    const { handleSubmitNewUser } = this.state;
    return (
      <form className="sign-up-page" onSubmit={(e) => handleSubmitNewUser(e)}>
        <label name="first-name">First name</label>
        <input type="text" name="first-name" onChange={handleFirstNameInputChange} required />
        <label name="last-name">Last name</label>
        <input type="text" name="last-name" onChange={handleLastNameInputChange} required />
        <label name="email-address">Email address</label>
        <input type="email" name="email-address" onChange={handleEmailInputChange} required />
        <label name="password">Password</label>
        <input type="password" name="password" onChange={handlePasswordInputChange} required />
        <button type="submit">Create account</button>
        <p><a href="/login">Already have an account? Login &gt;</a></p>
      </form>
    );
  }
}

export default RegistrationForm;
