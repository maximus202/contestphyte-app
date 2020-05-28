import React from 'react';
import ReactDOM from 'react-dom';
import CreateContestForm from './CreateContestForm';

describe('CreateContestForm', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CreateContestForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
