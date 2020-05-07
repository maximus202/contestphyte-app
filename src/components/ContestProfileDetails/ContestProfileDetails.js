import React, { Component } from 'react';
import './ContestProfileDetails.css';

class ContestProfileDetails extends Component {
  render() {
    const contestId = this.props.contest;
    return (
      <>
        <h2>April 2020 Sweatpant Giveaway</h2>
        <section className="contest-profile-buttons">
          <button type="button">See participants list &gt;</button>
          <button type="button">Edit contest &gt;</button>
          <button type="button">Delete contest &gt;</button>
          <button type="button">View landing page &gt;</button>
        </section>
        <h2>Details</h2>
        <section>
          <p>Start: 4/1/2020 12:00:00 AM, MT</p>
          <p>End: 4/30/2020 11:59:59 PM, MT</p>
        </section>
        <h2>Stats</h2>
        <section className="thirty-day-stats">
          <section className="single-stat">
            <p>5003</p>
            <p>Contest views</p>
          </section>
          <section className="single-stat">
            <p>910</p>
            <p>Contest participants</p>
          </section>
          <section className="single-stat">
            <p>320</p>
            <p>Referred participants</p>
          </section>
          <section className="single-stat">
            <p>18%</p>
            <p>Conversion Rate</p>
          </section>
        </section>
      </>
    );
  }
}

export default ContestProfileDetails;