import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import { Context } from '../../Context/Context';
import Loading from '../../components/Loading/Loading';
import ApiService from '../../services/api-service';
import { Link } from 'react-router-dom';
import './ContestProfile.css';

class ContestProfile extends Component {
  static contextType = Context

  componentDidMount() {
    const {
      match
    } = this.props;
    const {
      setContest,
      setError,
      clearError,
      setParticipantsList,
    } = this.context;

    clearError();
    
    ApiService.getContestById(match.params.contestId)
      .then(setContest)
      .catch(setError);
    ApiService.getParticipantsByContest(match.params.contestId)
      .then(setParticipantsList)
      .catch(setError);
  }

  handleDeleteContest = () => {
    const { contest } = this.context;
    const contestId = contest[0].id;
    ApiService.deleteContest(contestId)
      .then(() => this.props.history.push('/'));
  }

  renderContest() {
    const {
      contest,
      participantsList,
    } = this.context;

    return (
      <>
        <header className="with-margins">
          <h1>Contest Profile</h1>
        </header>
        <main className="with-margins">
        <h2>{contest[0].contest_name}</h2>
          <section className="contest-profile-buttons">
            <Link onClick={this.handleDeleteContest}>Delete contest &gt;</Link>
            <a href={`/contest/${contest[0].id}`}>View landing page &gt;</a>
        </section>
        <h2>Details</h2>
        <section>
          <p>
            Ends:
            {' '}
            {contest[0].end_datetime}
          </p>
          </section>
          <h2>Participants</h2>
          <section>
            {participantsList.map((participant) => (
              <section key={participant.id} className="participant-item">
                <section className="confirmed-icon">
                  &#10003;
              </section>
                <section className="participant-info">
                  <p>
                    {participant.first_name}
                    {' '}
                    {participant.last_name}
                    {' '}
                    (Entries:
                  {' '}
                  {participant.number_of_entries}
                    )
                </p>
                  <p>{participant.email_address}</p>
                </section>
                <section className="referrals">
                  <p>{participant.number_of_referrals}</p>
                  <p>Referrals</p>
                </section>
              </section>
            ))}
          </section>
      </main>
     </>   
    )
  }

  render() {
    const { error, contest } = this.context;
    let content;
    if (error) {
      content = (error.error === 'contest does not exist')
        ? <p>Contest not found</p>
        : <p>There was an error</p>;
    } else if (!contest[0]) {
      content = <Loading />;
    } else {
      content = this.renderContest();
    }
    return (
      <>
        <NavBar />
        {content}
      </>
    );
  }
}

export default ContestProfile;
