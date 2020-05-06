import React from 'react';
import './ThirtyDayStats.css';

function ThirtyDayStats() {
  return (
    <section className="thirty-day-stats">
      <section className="single-stat">
        <p>5003</p>
        <p>Total views</p>
      </section>
      <section className="single-stat">
        <p>910</p>
        <p>Total participants</p>
      </section>
      <section className="single-stat">
        <p>18%</p>
        <p>Avg. Conversion Rate</p>
      </section>
      <section className="single-stat">
        <p>39%</p>
        <p>Referrals</p>
      </section>
    </section>
  );
}

export default ThirtyDayStats;
