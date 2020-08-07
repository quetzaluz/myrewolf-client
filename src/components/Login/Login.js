import React, { Component } from 'react';
import TokenService from '../../services/token-service';
import { Button, Input } from '../Utils/Utils';
import '../../routes/Login/LoginPage.css'
import LoginContext from '../../contexts/LoginContext'

export default class Login extends Component {
    static contextType = LoginContext

    static defaultProps = {
        onLoginSuccess: () => { },
        handleLoginState: () => { },
    }

    state = {
        error: null,
        loading: false,
    };

    handleSubmit = (ev) => {
        this.setState(
            {
                error: null,
                loading: true,
            },
            this.handleSubmitBasicAuth(ev)
        );
    };

    handleSubmitBasicAuth = (ev) => {
        ev.preventDefault();
        const { user_name, password } = ev.target;

        TokenService.saveAuthToken(
            TokenService.makeBasicAuthToken(user_name.value, password.value)
        )
        user_name.value = '';
        password.value = '';
        this.props.onLoginSuccess();
        this.context.handleLoginState(true);
    }

    render() {
        const { error } = this.state;
        return (
            <form className="LoginForm" onSubmit={this.handleSubmit}>
                <div role="alert">{error && <p className="red">{error}</p>}</div>
                <div className="user_name">
                    <label htmlFor="LoginForm_user_name">User Name</label>
                    <Input required name="user_name" id="LoginForm_user_name"></Input>
                </div>
                <div className="password">
                    <label htmlFor="LoginForm_password">Password</label>
                    <Input required name="password" type="password" id="LoginForm_password"></Input>
                </div>
                <Button id='submit-btn' type="submit">Log in</Button>
            </form>



        )
    }
}