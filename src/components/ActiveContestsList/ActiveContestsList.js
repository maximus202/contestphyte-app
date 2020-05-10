import React, { Component } from 'react';
import CONTESTS from '../../CONTESTS';

class ActiveContestsList extends Component {
  render() {
    const activeContests = [];

    for (let i = 0; i < CONTESTS.length; i++) {
      if (CONTESTS[i].isActive == 'true') {
        activeContests.push(CONTESTS[i]);
      }
    }

    return (
      <section>
        {activeContests.map((contest) => (
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

export default ActiveContestsList;
