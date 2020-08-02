import React from 'react';
import ReactDOM from 'react-dom';
import { DiscoveryProvider } from '../src/contexts/DiscoveryContext'
import App from './components/App/App';
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
  <BrowserRouter>
    <DiscoveryProvider>
      <App />
    </DiscoveryProvider>
  </BrowserRouter>
  ,
  document.getElementById('root')
);


