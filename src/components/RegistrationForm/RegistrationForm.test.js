/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import RegistrationForm from './RegistrationForm';

describe('RegistrationForm', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RegistrationForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
