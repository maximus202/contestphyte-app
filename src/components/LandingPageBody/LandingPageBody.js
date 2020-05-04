import React from 'react';
import './LandingPageBody.css';

function LandingPageBody() {
  return (
    <>
      <header>
        <section className="two-column-section image-right">
          <section className="individual-column">
            <img src="https://github.com/maximus202/contestphyte-app/blob/master/public/iphonetemplate.png?raw=true" alt="Contestphyte screenshot on iPhone." />
          </section>
          <section className="individual-column">
            <h1>Encourage brand awareness from your biggest fans.</h1>
            <p>
              Easily run contests for your business that engage new
              visitors, mobilizes your followers, and gets your
              name trending!
            </p>
            <p><a href="/">Run a contest &gt;</a></p>
            <p><a href="/">Login &gt;</a></p>
          </section>
        </section>
      </header>
      <section className="two-column-section image-left">
        <section className="individual-column">
          <img src="https://github.com/maximus202/contestphyte-app/blob/master/public/network.png?raw=true" alt="Network of people." />
        </section>
        <section className="individual-column">
          <h2>Shareability too tempting not to act on</h2>
          <p>
            What&apos;s a better way to encourage shares? By rewarding it.
            Contestphyte allows participants to amp up their number of entries
            for your contest by simply sharing it. The more referrals,
            the more entries into the contest!
          </p>
        </section>
      </section>
      <section className="two-column-section image-right">
        <section className="individual-column">
          <img src="https://github.com/maximus202/contestphyte-app/blob/master/public/email.png?raw=true" alt="Email envelope." />
        </section>
        <section className="individual-column">
          <h2>Build your email list</h2>
          <p>
            It&apos;s not the first time you&apos;ve heard it, but it&apos;s been
            your goal many times. During the contest sign-up form,
            participants are given the option to opt-in to your
            company&apos;s marketing list, allowing you to engage with
            all those new, fresh visitors!
          </p>
        </section>
      </section>
      <section className="call-to-action">
        <h2>
          Try it out!
        </h2>
        <p>
          <a href="/">
            Get started &gt;
          </a>
        </p>
      </section>
    </>
  );
}

export default LandingPageBody;
