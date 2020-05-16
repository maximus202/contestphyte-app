import React, { Component } from 'react';
import CONTESTS from '/Users/maxxratto/Code_Projects/contestphyte-app/src/CONTESTS.js';
import ConfirmationEmailMessage from '../ConfirmationEmailMessage/ConfirmationEmailMessage';

class PostSignUpContent extends Component {
  render() {
    const contestDetails = CONTESTS.find((contest) => contest.id == this.props.contest);
    console.log('contestDetails', contestDetails);

    const participantDetails = contestDetails.participantsList.find((participant) => participant.participantId == this.props.participant);
    console.log('participantDetails', participantDetails);

    return (
      <section className="contest-landing-page-content">
        <section className="contest-banner">
          <header>
            <img
              src={`${contestDetails.imageUrl}`}
              alt={`${contestDetails.contestName}`}
            />
          </header>
        </section>
        <ConfirmationEmailMessage participantDetails={participantDetails} />
        <main>
          <section>
            <form className="contest-entry-form">
              <h2>
                Your entries:
                {' '}
                {participantDetails.numberOfEntries}
                .
                {' '}
                Share with your friends and earn 10 additional
                entires for every friend that joins!

              </h2>
              <label htmlFor="friend-email-1">1st friend&apos;s email address:</label>
              <input type="text" name="friend-email-1" />
              <label htmlFor="friend-email-2">2nd friend&apos;s email address:</label>
              <input type="text" name="friend-email-2" />
              <label htmlFor="friend-email-3">3rd friend&apos;s email address:</label>
              <input type="text" name="friend-email-3" />
              <input type="submit" value="Send invites" />
              <section>
                <p>You can also share your personalized link to invite friends:</p>
                {' '}
                <p className="personal-link">
                  Just joined to win a free pair of sweatpants from SweatpantsUSA, join here:
                  {' '}
                  <a href={`http://www.contestphyte.com/contest/${contestDetails.id}/${participantDetails.participantId}`}>
                    contestphyte.com/contests/
                    {contestDetails.id}
                    /
                    {participantDetails.participantId}
                  </a>
                  .
                </p>
                <p><a href="http://www.facebook.com">Share on Facebook &gt;</a></p>
              </section>
            </form>
          </section>
        </main>
        <footer className="contest-landing-page-footer">
          <p>
            Powered by Contestphyte. Contestphyte does not sponsor, administer or endorse
            this promotion. Contestphyte is not responsible for notifying winners of this
            promotion or to provide the prizes/incentives for participants selected as
            &ldquo;winner(s)&ldquo;. For more information, contact
            {' '}
            <a href={`${contestDetails.companyUrl}`}>{contestDetails.companyName}</a>
            {' '}
            at
            {' '}
            <a href={`mailto:${contestDetails.companyEmail}`}>{contestDetails.companyEmail}</a>
            .
          </p>
        </footer>
      </section>
    );
  }
}

export default PostSignUpContent;
