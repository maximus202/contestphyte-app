/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import LoggedIn from './LoggedIn';

describe('LoggedIn', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><LoggedIn /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
