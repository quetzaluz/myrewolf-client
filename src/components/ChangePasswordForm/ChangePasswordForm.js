import React, { Component } from 'react';
import { Input, Label } from '../Form/Form';
import GenerateApiService from '../../services/generator-api-service';
import UserContext from '../../contexts/UserContext';
import Button from '../Button/Button';
import '../App/App.css';
import './ChangePassword.css';

class ChangePasswordForm extends Component {
	static defaultProps = {
		onPasswordChangeSuccess: () => {},
	};

	static contextType = UserContext;

	state = { error: null };

	firstInput = React.createRef();

	handleSubmit = (ev) => {
		ev.preventDefault();
		const user_name = ['user_name'].value; //maybe?
		const password = ['password'].value;
		console.log(user_name);

		this.setState({ error: null });

		GenerateApiService.updateUser({
			user_name: user_name.value,
			password: password.value,
		})
			.then((res) => {
				user_name.value = '';
				password.value = '';
				this.context.processLogin(res.authToken); //change processLogin
				this.props.onLoginSuccess(); //change onLoginSuccess
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
			<form className="ChangePasswordForm" onSubmit={this.handleSubmit}>
				<div role="alert">{error && <p>{error}</p>}</div>
				<div>
					<Label htmlFor="change-username-input" hidden>
						User Name
					</Label>
					<Input
						ref={this.firstInput}
						id="change-username-input"
						name="user_name"
						type="user_name"
						placeholder="User Name"
						required
					/>

					<Label htmlFor="change-password-input" hidden>
						New Password
					</Label>

					<Input
						id="change-password-input"
						name="password"
						type="password"
						placeholder="new password*"
						required
					/>
				</div>
				<Button id="submit-btn" type="submit">
					Save Password
				</Button>
			</form>
		);
	}
}

export default ChangePasswordForm;
