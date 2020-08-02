import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header'
import Discovery from '../Discovery/Discovery'
import Footer from '../Footer/Footer'
import Review from '../Review/Review'
import HomePage from '../HomePage/HomePage';
import NotFoundPage from '../routes/NotFoundPage'
import LoginPage from '../routes/LoginPage'
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
            <PrivateRoute path={'/discovery'} component={Discovery} />
            <PrivateRoute path={'/review'} component={Review} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
        <Footer />

      </div>
    );
  }
}
