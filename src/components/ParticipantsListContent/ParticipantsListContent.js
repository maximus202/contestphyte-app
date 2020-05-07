import React from 'react';
import './ParticipantsListContent.css';

function ParticipantsListContent() {
  return (
    <>
      <section className="participants-list-title">
        <h2>April 2020 Sweatpants Giveaway</h2>
        <button type="button">Export</button>
      </section>
      <section>
        <section className="participant-item">
          <section className="confirmed-icon">
            &#10003;
          </section>
          <section className="participant-info">
            <p>Bob Smith (Entries: 11)</p>
            <p>bsmith@email.com</p>
            <p>Referred by: No one</p>
          </section>
          <section className="referrals">
            <p>1</p>
            <p>Referrals</p>
          </section>
        </section>
      </section>
    </>
  );
}

export default ParticipantsListContent;
