/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import LoggedOut from './LoggedOut';

describe('LoggedOut', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><LoggedOut /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
