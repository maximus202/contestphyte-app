import React from 'react';
import './ContestLandingPageContent.css';

function ContestLandingPageContent() {
  return (
    <section className="contest-landing-page-content">
      <header>
        <h1>Enter to win a pair of sweatpants!</h1>
        <p>
          by
          {' '}
          <a href="/">SweatpantsUSA</a>
        </p>
        <section className="contest-banner">
          <img
            src="https://contest-landing-page--maximus222.repl.co/SWEATPANTS%20USA.jpg"
            alt="Contest banner."
          />
        </section>
      </header>
      <main>
        <section>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam.

          </p>
          <p>
            Eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo.

          </p>
          <p>
            Read the
            {' '}
            <a href="/">official rules</a>
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
                <a href="/">Sweatpants USA</a>
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
          <a href="/">Sweatpants USA</a>
          {' '}
          at
          {' '}
          <a href="mailto:customerservice@sweatpantsusa.com">customerservice@sweatpantsusa.com</a>
          .
        </p>
      </footer>
    </section>
  );
}

export default ContestLandingPageContent;
