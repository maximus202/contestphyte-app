import React from 'react';
import './Loading.css';

function Loading() {
  return (
    <section className="loading-page">
      <img src="https://github.com/maximus202/contestphyte-app/blob/styling/public/running-circle-2.gif?raw=true" alt="loading icon" />
      <p>Loading...</p>
    </section>
  );
}

export default Loading;
