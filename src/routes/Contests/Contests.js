import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import { Context } from '../../Context/Context';
import ApiService from '../../services/api-service';
import './Contests.css';

class Contests extends Component {
  static contextType = Context

  componentDidMount() {
    const {
      setContestsList,
      setError,
      clearError,
    } = this.context;

    clearError();

    ApiService.getContests()
      .then(setContestsList)
      .catch(setError);
  }

  renderActiveContests() {
    const { contestsList } = this.context;
    return contestsList.map((contest) => {
      if (contest.is_active === true) {
        return (
          <li key={contest.id}>
            <a href={`/contest-profile/${contest.id}`}>
              {contest.contest_name}
              {' '}
              &gt;
            </a>
          </li>
        )
      }
    })
  }

  render() {
    const { error } = this.context;
    return (
      <>
        <NavBar />
        <header className="with-margins">
          <h1>Contests</h1>
        </header>
        <main className="with-margins">
          <section className="section-header">
            <h2>Active Contests</h2>
            <p><a href="/create-contest">Add Contest</a></p>
          </section>
          <section className="contest-list">
            <ul>
              {error
                ? <p>No active contests</p>
                : this.renderActiveContests()
              }
            </ul>
          </section>
        </main>
      </>
    );
  }
}

export default Contests;
