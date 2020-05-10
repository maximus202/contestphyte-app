import React, { Component } from 'react';
import CONTESTS from '../../CONTESTS';

class InactiveContestList extends Component {
  render() {
    const inactiveContests = [];

    for (let i = 0; i < CONTESTS.length; i++) {
      if (CONTESTS[i].isActive == 'false') {
        inactiveContests.push(CONTESTS[i]);
      }
    }

    console.log(inactiveContests);

    return (
      <section>
        {inactiveContests.map((contest) => (
          <p>
            <a href={`/contest-profile/${contest.id}`}>
              {contest.contestName}
              {' '}
              &gt;
            </a>

          </p>
        ))}
      </section>
    );
  }
}

export default InactiveContestList;
