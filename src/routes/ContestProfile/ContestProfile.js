import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import { Context } from '../../Context/Context';
import Loading from '../../components/Loading/Loading';
import ApiService from '../../services/api-service';
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

  renderParticipants() {
    const { participantsList } = this.context;
    if (participantsList.length === 0) {
      return <p>No participants found.</p>
    } else {
      return participantsList.map((participant) => (
          <section key={participant.id} className="participant-item">
            <section className="participant-info">
              <p>
                <span className="participant-name">
                  {participant.first_name}
                  {' '}
                  {participant.last_name}
                  {' '}
                </span>
              </p>
              <p>
                Entries:
                  {' '}
                {participant.number_of_entries}, Referrals:
                    {' '}
                {participant.number_of_referrals}
              </p>
              <p>{participant.email_address}</p>
            </section>
          </section>
        ))
    }
  }

  renderContest() {
    const {
      contest,
    } = this.context;

    return (
      <>
        <header className="with-margins">
          <h1>Contest Profile</h1>
        </header>
        <main className="with-margins">
          <section className="contest-header-box">
            <h2>{contest[0].contest_name}</h2>
            <section className="contest-profile-buttons">
              <button onClick={this.handleDeleteContest}>Delete contest &gt;</button>
              <a href={`/contest/${contest[0].id}`}>View landing page &gt;</a>
            </section>
          </section>
          <h2>Details</h2>
          <section>
            <p>Main image:</p>
            <img className="contest-profile-image" src={contest[0].image_url} alt="contest main banner" />
          </section>
          <section>
            <p>Hosted by: 
              {' '}
              {contest[0].company_name}
            </p>
            <p>Contest description:
              {' '}
              {contest[0].contest_description}
            </p>
            <p>Prize value:
              {' '}
              ${contest[0].prize_value}
            </p>
            <p>
              Ends:
            {' '}
              {contest[0].end_datetime}
            </p>
            <p>
              <a href={contest[0].official_rules_url}>Official rules</a>
            </p>
          </section>
          <h2>Participants</h2>
          <section>
            {this.renderParticipants()}
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
