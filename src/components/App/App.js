import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import PublicOnlyRoute from '../PublicOnlyRoute/PublicOnlyRoute';
import RegistrationRoute from '../../routes/RegistrationRoute/RegistrationRoute';
import LoginRoute from '../../routes/LoginRoute/LoginRoute';
import HomePageRoute from '../../routes/HomePageRoute/HomePageRoute';
import GeneratorRoute from '../../routes/GeneratorRoute/GeneratorRoute';
import ChangePasswordRoute from '../../routes/ChangePasswordRoute/ChangePasswordRoute';
import NotFoundRoute from '../../routes/NotFoundRoute/NotFoundRoute';
import './App.css';
import Footer from '../Footer/Footer';
import Review from '../../routes/Review/Review';
import DiscoveryRoute from '../../routes/DiscoveryRoute/DiscoveryRoute';

export default class App extends Component {
	state = {
		hasError: false,
		user: {},
	};

	static getDerivedStateFromError(error) {
		console.error(error);
		return { hasError: true };
	}

	render() {
		const { hasError, user } = this.state;
		return (
			<div className="App">
				<header className="App_header">
					<Header />
				</header>

				<main className="App_main">
					{hasError && <p>There was an error! Oh no!</p>}
					<Switch>
						<PrivateRoute
							exact
							path={'/'}
							component={user.admin === true ? HomePageRoute : GeneratorRoute}
						/>
						<PublicOnlyRoute path={'/change'} component={ChangePasswordRoute} />
						<PublicOnlyRoute path={'/home'} component={HomePageRoute} />
						<PublicOnlyRoute path={'/register'} component={RegistrationRoute} />
						<PublicOnlyRoute path={'/login'} component={LoginRoute} />
						<PublicOnlyRoute path={'/reviews'} component={Review} />
						<PublicOnlyRoute path={'/discovery'} component={DiscoveryRoute} />
						<Route component={NotFoundRoute} />
					</Switch>
				</main>
				<Footer />
			</div>
		);
	}
}
