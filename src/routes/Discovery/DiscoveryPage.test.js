import React from 'react';
import ReactDOM from 'react-dom';
import DiscoveryPage from './DiscoveryPage';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DiscoveryPage />, div);
});