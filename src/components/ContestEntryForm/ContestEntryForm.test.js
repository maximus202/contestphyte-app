import React from 'react';
import ReactDOM from 'react-dom';
import ContestEntryForm from './ContestEntryForm';

describe('ContestEntryForm', () => {
  it('renders without crashing', () => {
    const contest = [{
      company_name: 'test',
    }];
    const div = document.createElement('div');
    ReactDOM.render(<ContestEntryForm contest={contest} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
