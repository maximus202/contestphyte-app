import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import ParticipantsListContent from '../../components/ParticipantsListContent/ParticipantsListContent';

class ParticipantsList extends Component {
  render() {
    return (
      <>
        <NavBar />
        <header>
          <h1>Participants List</h1>
        </header>
        <ParticipantsListContent contest={this.props.match.params} />
      </>
    );
  }
}

export default ParticipantsList;
