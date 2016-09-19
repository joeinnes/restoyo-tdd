import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/components/App.js';

describe('the core app', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
});