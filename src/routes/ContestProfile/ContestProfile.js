import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import ContestProfileDetails from '../../components/ContestProfileDetails/ContestProfileDetails';

class ContestProfile extends Component {
  render() {
    return (
      <>
        <NavBar />
        <header className="with-margins">
          <h1>Contest Profile</h1>
        </header>
        <main>
          <ContestProfileDetails contest={this.props.match.params} />
        </main>
      </>
    );
  }
}

export default ContestProfile;
