/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import LandingPageBody from './LandingPageBody';

describe('LandingPageBody', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LandingPageBody />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
