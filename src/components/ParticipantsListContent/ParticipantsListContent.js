import React, { Component } from 'react';
import './ParticipantsListContent.css';
import CONTESTS from '/Users/maxxratto/Code_Projects/contestphyte-app/src/CONTESTS.js';

class ParticipantsListContent extends Component {
  render() {
    const { contestId } = this.props.contest;
    console.log(contestId);

    const contest = CONTESTS.find((contest) => contest.id == contestId);

    const contestParticipants = contest.participantsList;
    console.log(contestParticipants);

    return (
      <>
        <section className="participants-list-title">
          <h2>{contest.contestName}</h2>
          <button type="button">Export</button>
        </section>
        <section>
          {contestParticipants.map((participant) => (
            <section className="participant-item">
              <section className="confirmed-icon">
                &#10003;
              </section>
              <section className="participant-info">
                <p>
                  {participant.firstName}
                  {' '}
                  {participant.lastName}
                  {' '}
                  (Entries: $
                  {participant.numberOfEntries}
                  )
                </p>
                <p>{participant.email}</p>
                <p>
                  Referred by:
                  {' '}
                  {participant.referredBy}
                </p>
              </section>
              <section className="referrals">
                <p>{participant.numberOfReferrals}</p>
                <p>Referrals</p>
              </section>
            </section>
          ))}
        </section>
      </>
    );
  }
}

export default ParticipantsListContent;
