import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import ThirtyDayStats from '../../components/ThirtyDayStats/ThirtyDayStats';
import ActiveContestsList from '../../components/ActiveContestsList/ActiveContestsList';
import InactiveContestsList from '../../components/InactiveContestsList/InactiveContestsList';

function Contests() {
  return (
    <>
      <NavBar />
      <header className="with-margins">
        <h1>Contests</h1>
      </header>
      <main className="with-margins">
        <section className="section-header">
          <h2>30 Day Stats</h2>
        </section>
        <ThirtyDayStats />
        <section className="section-header">
          <h2>Active Contests</h2>
          <p><a href="/create-contest">Add Contest</a></p>
        </section>
        <ActiveContestsList />
        <section className="section-header">
          <h2>Inactive Contests</h2>
        </section>
        <InactiveContestsList />
      </main>
    </>
  );
}

export default Contests;
