import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import ParticipantsListContent from '../../components/ParticipantsListContent/ParticipantsListContent';

function ParticipantsList() {
  return (
    <>
      <NavBar />
      <header>
        <h1>Participants List</h1>
      </header>
      <ParticipantsListContent />
    </>
  );
}

export default ParticipantsList;
