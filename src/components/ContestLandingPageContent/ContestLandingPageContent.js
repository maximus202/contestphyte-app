import React, { Component } from 'react';
import './ContestLandingPageContent.css';
import CONTESTS from '/Users/maxxratto/Code_Projects/contestphyte-app/src/CONTESTS.js';

class ContestLandingPageContent extends Component {
  render() {
    const { contestId } = this.props.contest;

    const contestDetails = CONTESTS.find((contest) => contest.id == contestId);

    return (
      <section className="contest-landing-page-content">
        <header>
          <h1>{contestDetails.contestName}</h1>
          <p>
            by
            {' '}
            <a href={`${contestDetails.companyUrl}`}>{contestDetails.companyName}</a>
          </p>
          <section className="contest-banner">
            <img
              src={`${contestDetails.imageUrl}`}
              alt="Contest banner."
            />
          </section>
        </header>
        <main>
          <section>
            <p>
              {contestDetails.contestDescription}
            </p>
            <p>
              Read the
              {' '}
              <a href={`${contestDetails.officialRulesUrl}`}>official rules</a>
              .
            </p>
          </section>
          <section>
            <h2>Enter your details below!</h2>
            <form>
              <label htmlFor="first-name">First Name</label>
              <input type="name" name="first-name" />
              <label htmlFor="last-name">Last Name</label>
              <input type="name" name="last-name" />
              <label htmlFor="email">Email Address</label>
              <input type="email" name="email" />
              <span className="checkbox">
                <input type="checkbox" name="marketing-optin" />
                <label htmlFor="marketing-optin">
                  I want to receive emails from
                  {' '}
                  <a href={`${contestDetails.companyUrl}`}>{contestDetails.companyName}</a>
                  .
                </label>
              </span>
              <input type="submit" value="Create" />
            </form>
          </section>
        </main>
        <footer>
          <p>
            Powered by Contestphyte. Contestphyte does not sponsor, administer or
            endorse this promotion. Contestphyte is not responsible for
            notifying winners of this promotion or to provide the prizes/incentives
            for participants selected as &quot;winner(s)&quot;. For more information, contact
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

export default ContestLandingPageContent;
