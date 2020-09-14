import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import './LoginRoute.css';

class LoginRoute extends Component {
	static defaultProps = {
		location: {},
		history: {
			push: () => {},
		},
	};

	handleLoginSuccess = () => {
		const { location, history } = this.props;
		const destination = (location.state || {}).from || '/home';
		history.push(destination);
	};

	render() {
		return (
			<section className="LoginPage">
				<div className="LoginHeader">
					<h2>Log in</h2>
				</div>
				<LoginForm onLoginSuccess={this.handleLoginSuccess} />
				<p>
					This project was made for a creative agency to help them gather
					information on how they can better serve their customers' needs. Once
					you create a free account you will be able to answer their
					questionnaire and then leave a review.
				</p>
			</section>
		);
	}
}

export default LoginRoute;
