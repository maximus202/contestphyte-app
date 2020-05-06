import React from 'react';
import CONTESTS from '../../CONTESTS';

function ActiveContestsList() {
  return (
    <section>
      {CONTESTS.map((contest) => (
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

export default ActiveContestsList;
