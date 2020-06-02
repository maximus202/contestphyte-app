/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import LoginFailed from './LoginFailed';

describe('LoginFailed', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LoginFailed />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
