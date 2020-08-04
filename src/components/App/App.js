import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import Header from '../Header/Header'
import DiscoveryPage from '../../routes/Discovery/DiscoveryPage'
import Footer from '../Footer/Footer'
import Review from '../../routes/Review/Review'
import HomePage from '../../routes/HomePage/HomePage';
// import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage'
import LoginPage from '../../routes/Login/LoginPage'
import PublicOnlyRoute from '../Utils/PublicOnlyRoute';
import PrivateRoute from '../Utils/PrivateRoute'
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import './App.css'

export default class App extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };

  }
  render() {
    return (
      <div className="App">
        <header className="App_header">
          <Header />
        </header>
        <main className="App_main">
          {this.state.hasError && (
            <p className="red">There was an error! Oh no!</p>
          )}
          <Switch>
            <PublicOnlyRoute exact path={'/'} component={LoginPage} />
            <PublicOnlyRoute path={'/register'} component={RegistrationForm} />
            <PrivateRoute path={'/home'} component={HomePage} />
            <PrivateRoute path={'/discovery'} component={DiscoveryPage} />
            <PrivateRoute path={'/reviews'} component={Review} />
            {/* <Route component={NotFoundPage} /> */}
          </Switch>
        </main>
        <Footer />

      </div>
    );
  }
}
