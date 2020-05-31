import React, { Component } from 'react';
import ApiService from '../../services/api-service';

class ContestEntryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      emailAddress: '',
      handleFirstName: this.handleFirstName,
      handleLastName: this.handleLastName,
      handleEmailAddress: this.handleEmailAddress,
      handleSubmitEntry: this.handleSubmitEntry,
    };
  }
    
    handleFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleEmailAddress = (event) => {
        this.setState({
            emailAddress: event.target.value
        })
    }

    handleSubmitEntry = (e) => {
        e.preventDefault();
        
        const { history } = this.props;
        const contestId = this.props.contestId;
        const referrerId = this.props.referrerId;
        
        const {
            handleError,
            firstName,
            lastName,
            emailAddress,
        } = this.state;
        
        const inputData = {
            referrer_id: referrerId,
            first_name: firstName,
            last_name: lastName,
            email_address: emailAddress,
        };
        
        ApiService.submitParticipant(inputData, contestId, history)
        .then((res) => history.push(`/post-sign-up/${contestId}/${res.id}`))
            //.catch((error) => handleError(error));
    }

    render() {
        const contest = this.props.contest;

        const {
            handleFirstName,
            handleLastName,
            handleEmailAddress,
            handleSubmitEntry,
        } = this.state;
        
        return (
            <form className="contest-entry-form" onSubmit={(e) => handleSubmitEntry(e)}>
                <h2>Enter your details below!</h2>
                <label htmlFor="first-name">First Name</label>
                <input type="name" name="first-name" onChange={handleFirstName} required />
                <label htmlFor="last-name">Last Name</label>
                <input type="name" name="last-name" onChange={handleLastName} required />
                <label htmlFor="email">Email Address</label>
                <input type="email" name="email" onChange={handleEmailAddress} required />
                <p>Please note by entering this contest, you give {contest[0].company_name} permission to
                send you emails regarding the contest as well as any other marketing-related emails. To
              be removed from their email list, contact <a href={`${contest[0].company_email}`}>{contest[0].company_email}</a>.</p>
                <input type="submit" value="Create" />
            </form>
        )
    }
}

export default ContestEntryForm;
