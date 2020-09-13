import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input, Required, Label } from '../Form/Form';
import GeneratorApiService from '../../services/generator-api-service';
import Button from '../Button/Button';
import './RegistrationForm.css';

class RegistrationForm extends Component {
	static defaultProps = {
		onRegistrationSuccess: () => {},
	};

	state = { error: null };

	firstInput = React.createRef();

	handleSubmit = (ev) => {
		ev.preventDefault();
		const { full_name, nick_name, user_name, password } = ev.target;

		GeneratorApiService.postUser({
			full_name: full_name.value,
			nick_name: nick_name.value,
			password: password.value,
			user_name: user_name.value,
		})
			.then((user) => {
				full_name.value = '';
				nick_name.value = '';
				password.value = '';
				user_name.value = '';
				this.props.onRegistrationSuccess();
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
			<form className="RegistrationForm" onSubmit={this.handleSubmit}>
				<div role="alert">{error && <p className="red">{error}</p>}</div>
				<div className="full_name">
					<label htmlFor="Registration_full_name">
						Full name <Required />
					</label>
					<Input
						ref={this.firstInput}
						name="full_name"
						type="text"
						required
						id="RegistrationForm_full_name"
					></Input>
				</div>
				<div className="user_name">
					<label htmlFor="RegistrationForm_user_name">
						User name <Required />
					</label>
					<Input
						name="user_name"
						type="text"
						required
						id="RegistrationForm_user_name"
					></Input>
				</div>
				<div className="password">
					<label htmlFor="RegistrationForm_password">
						Password <Required />
					</label>
					<Input
						name="password"
						type="password"
						required
						id="RegistrationForm_password"
					></Input>
				</div>
				<div className="nick_name">
					<label htmlFor="RegistrationForm_nick_name">Nickname</label>
					<Input
						name="nick_name"
						type="text"
						id="RegistrationForm_nick_name"
					></Input>
				</div>
				<Button type="submit">Register</Button>
			</form>
		);
	}
}

export default RegistrationForm;
