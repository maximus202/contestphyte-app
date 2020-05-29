import React, { Component } from 'react';
import ApiService from '../../services/api-service';
import { Context } from '../../Context/Context';
import Loading from '../../components/Loading/Loading';
import './PostSignUp.css';

class PostSignUp extends Component {
  static contextType = Context

  componentDidMount() {
    const { match } = this.props;

    const {
      setParticipant,
      setError,
      clearError,
    } = this.context;
    clearError();
    ApiService.getParticipant(match.params.participantId)
      .then(setParticipant)
      .catch(setError);
  }

  renderParticipantInfo() {
    const { participant } = this.context;
  
    return (
      <section className="contest-landing-page-content">
        <main>
          <section className="thank-you-box">
            
              <header>
                <h2>Thanks for entering our contest!</h2>
              </header>
              <p>
                Your number of entries:
                {' '}
                {participant[0].number_of_entries}
                </p>
                <p>
                Share with your friends and earn 10 additional
                entires for every friend that joins! 
              </p>
              <section>
              <p>
                <a href={`https://contestphyte-app.now.sh/${participant[0].contest_id}/referrer/${participant[0].id}`}>Copy and share this personal link</a> to invite others.
                </p>
              </section>
          </section>
        </main>
      </section>
    )
  }

  render() {
    const { error, participant } = this.context;
    console.log(participant)
    let content;
    if (error) {
      content = (error.error === 'participant does not exist')
        ? <p>participant not found</p>
        : <p>there was an error</p>;
    } else if (!participant) {
      content = <Loading />;
    } else {
      content = this.renderParticipantInfo();
    }
    return (
      <>
        {content}
      </>
    );
  }
}

export default PostSignUp;
