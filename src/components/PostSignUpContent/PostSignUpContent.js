import React from 'react';

function PostSignUpContent() {
  return (
    <section className="contest-landing-page-content">
      <section className="contest-banner">
        <img
          src="https://contest-landing-page--maximus222.repl.co/SWEATPANTS%20USA.jpg"
          alt="Contest banner."
        />
      </section>
      <header>
        <h1>Don&apos;t forget to confirm your entry!</h1>
        <p>To finish your entry, open the email we just sent you!</p>
      </header>
      <main>
        <section>
          <h2>
            You have 1 entry, cool! Share with your friends and earn 10 additional
            entires for every friend that joins!

          </h2>
          <form>
            <label htmlFor="friend-email-1">1st friend&apos;s email address:</label>
            <input type="text" name="friend-email-1" />
            <label htmlFor="friend-email-2">2nd friend&apos;s email address:</label>
            <input type="text" name="friend-email-2" />
            <label htmlFor="friend-email-3">3rd friend&apos;s email address:</label>
            <input type="text" name="friend-email-3" />
            <button type="submit">Send invites</button>
          </form>
          <p>You can also share your personalized link to invite friends:</p>
          {' '}
          <p className="personal-link">
            Just joined to win a free pair of sweatpants from SweatpantsUSA, join here:
            {' '}
            <a href="/">contestphyte.com/24895237849234</a>
            .
          </p>
          <p><a href="/">Share on Facebook &gt;</a></p>
        </section>
      </main>
      <footer>
        <p>
          Powered by Contestphyte. Contestphyte does not sponsor, administer or endorse
          this promotion. Contestphyte is not responsible for notifying winners of this
          promotion or to provide the prizes/incentives for participants selected as
          &ldquo;winner(s)&ldquo;. For more information, contact
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

export default PostSignUpContent;
