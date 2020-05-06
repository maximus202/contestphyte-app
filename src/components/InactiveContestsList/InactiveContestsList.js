import React from 'react';
import INACTIVECONTESTS from '../../INACTIVECONTESTS';

function InactiveContestList() {
  return (
    <section>
      {INACTIVECONTESTS.map((contest) => (
        <p>
          <a href="/">
            {contest.contestName}
            {' '}
            &gt;
          </a>

        </p>
      ))}
    </section>
  );
}

export default InactiveContestList;
