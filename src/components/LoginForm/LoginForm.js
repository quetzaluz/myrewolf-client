import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input, Label } from '../Form/Form';
import AuthApiService from '../../services/auth-api-service';
import UserContext from '../../contexts/UserContext';
import Button from '../Button/Button';
import '../App/App.css';

class LoginForm extends Component {
	static defaultProps = {
		onLoginSuccess: () => {},
	};

	static contextType = UserContext;

	state = { error: null };

	firstInput = React.createRef();

	handleSubmit = (ev) => {
		ev.preventDefault();
		const { user_name, password } = ev.target;

		this.setState({ error: null });

		AuthApiService.postLogin({
			user_name: user_name.value,
			password: password.value,
		})
			.then((res) => {
				user_name.value = '';
				password.value = '';
				this.context.processLogin(res.authToken);
				this.props.onLoginSuccess();
			})
			.catch((res) => {
				this.setState({ error: res.error });
			});
	};

	componentDidMount() {
		this.firstInput.current.focus();
	}

	render() {
		const { error } = this.state;
		return (
			<form className="LoginForm" onSubmit={this.handleSubmit}>
				<div role="alert">{error && <p>{error}</p>}</div>
				<div className="user_name">
					<label htmlFor="LoginForm_user_name">User Name</label>
					<Input
						ref={this.firstInput}
						required
						name="user_name"
						id="LoginForm_user_name"
					></Input>
				</div>
				<div className="password">
					<label htmlFor="LoginForm_password">Password</label>
					<Input
						required
						name="password"
						type="password"
						id="LoginForm_password"
					></Input>
				</div>
				<Button id="submit-btn" type="submit">
					Log in
				</Button>
			</form>
		);
	}
}

export default LoginForm;
