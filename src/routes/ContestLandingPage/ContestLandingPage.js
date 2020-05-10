import React, { Component } from 'react';
import ContestLandingPageContent from '../../components/ContestLandingPageContent/ContestLandingPageContent';

class ContestLandingPage extends Component {
  render() {
    return (
      <>
        <ContestLandingPageContent contest={this.props.match.params} />
      </>
    );
  }
}

export default ContestLandingPage;
