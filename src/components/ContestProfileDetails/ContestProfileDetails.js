import React, { Component } from 'react';
import './ContestProfileDetails.css';
import CONTESTS from '/Users/maxxratto/Code_Projects/contestphyte-app/src/CONTESTS.js';

class ContestProfileDetails extends Component {
  render() {
    const { contestId } = this.props.contest;
    console.log(contestId);

    const selectedContest = CONTESTS.find((contest) => contest.id == contestId);
    console.log(selectedContest);

    return (
      <main className="with-margins">
        <h2>{selectedContest.contestName}</h2>
        <section className="contest-profile-buttons">
          <a href={`/participants-list/${contestId}`}>See participants list &gt;</a>
          <a href="/edit-contest/1">Edit contest &gt;</a>
          <a href="/">Delete contest &gt;</a>
          <a href="/contest/1">View landing page &gt;</a>
        </section>
        <h2>Details</h2>
        <section>
          <p>
            Start:
            {' '}
            {selectedContest.startDate}
            {' '}

            {selectedContest.startTime}
          </p>
          <p>
            End:
            {' '}
            {selectedContest.endDate}
            {' '}
            {selectedContest.endTime}
          </p>
        </section>
        <h2>Metrics</h2>
        <section className="thirty-day-stats">
          <section className="single-stat">
            <p>{selectedContest.impressions}</p>
            <p>Contest views</p>
          </section>
          <section className="single-stat">
            <p>{selectedContest.participants}</p>
            <p>Contest participants</p>
          </section>
          <section className="single-stat">
            <p>{selectedContest.referredParticipants}</p>
            <p>Referred participants</p>
          </section>
          <section className="single-stat">
            <p>{selectedContest.conversionRate}</p>
            <p>Conversion Rate</p>
          </section>
        </section>
      </main>
    );
  }
}

export default ContestProfileDetails;
