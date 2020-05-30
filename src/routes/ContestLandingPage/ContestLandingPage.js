import React, { Component } from 'react';
import { Context } from '../../Context/Context';
import ApiService from '../../services/api-service';
import Loading from '../../components/Loading/Loading';
import ContestEntryForm from '../../components/ContestEntryForm/ContestEntryForm';
import './ContestLandingPage.css';

class ContestLandingPage extends Component {
  static contextType = Context;

  componentDidMount() {
    const { match } = this.props;

    const {
      setContest,
      setError,
      clearError,
    } = this.context;
    
    clearError();
    
    ApiService.getPublicContest(match.params.contestId)
      .then(setContest)
      .catch(setError);
  }

  renderContest() {
    const { contest } = this.context;
    const { match } = this.props;
    return (
      <section className="contest-landing-page-content">
        <header>
          <h1>{contest[0].contest_name}</h1>
          <p>
            by
            {' '}
            <a href={`${contest[0].company_url}`}>{contest[0].company_name}</a>
          </p>
          <section className="contest-banner">
            <img
              src={`${contest[0].image_url}`}
              alt="Contest banner."
            />
          </section>
        </header>
        <main>
          <section className="contest-body-copy">
            <p>
              {contest[0].contest_description}
            </p>
            <p>
              Official rules:
              {' '}
              <a href={`${contest[0].official_rules_url}`}>click here</a>
            </p>
            <p>
              Prize value: ${contest[0].prize_value}
            </p>
            <p>
              End date/time: {contest[0].end_datetime}
            </p>
          </section>
          <section>
            <ContestEntryForm
              history={this.props.history}
              contest={contest}
              contestId={match.params.contestId}
              referrerId={match.params.referrerId}/>
          </section>
        </main>
        <footer className="contest-landing-page-footer">
          <p>
            Powered by Contestphyte. Contestphyte does not sponsor, administer or
            endorse this promotion. Contestphyte is not responsible for
            notifying winners of this promotion or to provide the prizes/incentives
            for participants selected as &quot;winner(s)&quot;. For more information, contact
            {' '}
            <a href={`${contest[0].company_url}`}>{contest[0].company_name}</a>
            {' '}
            at
            {' '}
            <a href={`mailto:${contest[0].company_email}`}>{contest[0].company_email}</a>
            .
          </p>
        </footer>
      </section>
    )
  }

  render() {
    const { error, contest } = this.context;
    let content;
    if (error) {
      content = (error.error === 'contest does not exist')
        ? <p>contest not found</p>
        : <p>there was an error</p>;
    } else if (!contest[0]) {
      content = <Loading />;
    } else {
      content = this.renderContest();
    }
    return (
      <>
        {content}
      </>
    );
  }
}

export default ContestLandingPage;
