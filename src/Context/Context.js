import React from 'react';
import AuthApiService from '../services/auth-api-service';
import TokenService from '../services/token-service';

export const Context = React.createContext();

export class Provider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      loginEmail: '',
      handleSubmitLoginEmail: this.handleSubmitLoginEmail,
      loginPassword: '',
      handleSubmitLoginPassword: this.handleSubmitLoginPassword,
      contestsList: [],
      setContestsList: this.setContestsList,
      error: '',
      setError: this.setError,
      clearError: this.clearError,
      handleSubmitJwtAuth: this.handleSubmitJwtAuth,
      contest: '',
      setContest: this.setContest,
      participant: null,
      setParticipant: this.setParticipant,
      participantsList: [],
      setParticipantsList: this.setParticipantsList,
    };
  }
    
    handleSubmitLoginEmail = (event) => {
        this.setState({
            loginEmail: event.target.value,
        });
    }

    handleSubmitLoginPassword = (event) => {
        this.setState({
            loginPassword: event.target.value,
        });
    }
    
    handleSubmitJwtAuth = (e, history) => {
        e.preventDefault();
        const { loginEmail } = this.state;
        const { loginPassword } = this.state;
        this.setState({ loading: true });
        const data = {
            email_address: loginEmail,
            password: loginPassword,
        };
      AuthApiService.postLogin(data)
            .then((res) => {
                TokenService.saveAuthToken(res.authToken);
            })
            .then(() => this.setState({
                loading: false,
            }))
            .then(() => history.push('/'))
            .catch((res) => {
                this.setState({
                    error: res.error,
                });
            });
    }
  
  setContestsList = (contestsList) => {
    this.setState({
      contestsList,
    })
  }

  setError = (error) => {
    console.error(error);
    this.setState({
      error,
    });
  }

  clearError = () => {
    this.setState({
      error: '',
    });
  }

  setContest = (contest) => {
    this.setState({
      contest,
    })
  }

  setParticipant = (participant) => {
    this.setState({
      participant,
    })
  }

  setParticipantsList = (participants) => {
    this.setState({
      participantsList: participants,
    })
  }

  render() {
    const { children } = this.props;
    return (
      <Context.Provider value={this.state}>
        {children}
      </Context.Provider>
    );
  }
}
