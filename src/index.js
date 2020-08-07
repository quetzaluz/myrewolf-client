import React from 'react';
import ReactDOM from 'react-dom';
import { DiscoveryProvider } from '../src/contexts/DiscoveryContext'
import App from './components/App/App';
import { BrowserRouter } from "react-router-dom";
import { LoginProvider } from '../src/contexts/LoginContext'

ReactDOM.render(
  <BrowserRouter>
    <DiscoveryProvider>
      <LoginProvider>
        <App />
      </LoginProvider>
    </DiscoveryProvider>
  </BrowserRouter>
  ,
  document.getElementById('root')
);


