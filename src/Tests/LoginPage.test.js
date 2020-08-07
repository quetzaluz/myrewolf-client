import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from '../routes/Login/LoginPage';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LoginPage />, div);
});