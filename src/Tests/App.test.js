import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from '../routes/HomePage/HomePage.js';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});