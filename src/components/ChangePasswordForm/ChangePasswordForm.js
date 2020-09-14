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
		const user_name = document.getElementById('change-username-input').value;
		const password = document.getElementById('change-password-input').value;
		//const { user_name, password } = ev.target;
		console.log(user_name, password);
		const user = { user_name: user_name, password: password };

		this.setState({ error: null });

		GenerateApiService.updateUser({
			user_name: user_name,
			password: password,
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
		//const { error } = this.state;
		return (
			<form className="ChangePasswordForm" onSubmit={this.handleSubmit}>
				{/* <div role="alert">{error && <p>{error}</p>}</div> */}
				<div>
					<label htmlFor="change-username-input" hidden>
						User Name
					</label>
					<Input
						ref={this.firstInput}
						id="change-username-input"
						name="user_name"
						type="user_name"
						placeholder="User Name"
						required
					/>

					<label htmlFor="change-password-input" hidden>
						New Password
					</label>

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
				<div className="space" />
				<Button id="erase-me" type="submit">
					Erase Me
				</Button>
			</form>
		);
	}
}

export default ChangePasswordForm;
