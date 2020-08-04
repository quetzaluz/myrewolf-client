import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import './Header.css';
export default class Header extends Component {
    handleLogoutClick = () => {
        TokenService.clearAuthToken();
    };

    renderLogoutLink() {
        return (
            <div className="Header_logged-in">
                <Link onClick={this.handleLogoutClick} to="/">
                    Logout
                </Link>
            </div>
        );
    }

    renderLoginLink() {
        return (
            <div className="Header_not-logged-in">
                <Link to="/">Log in</Link>
                <Link to="/register">Register</Link>
            </div>
        )
    }
    render() {
        return (
            <div className="Header">
                <h1>
                    <Link to='/home'>
                        My Rewolf
                        {/* <FontAwesomeIcon className='paw' icon='paw' /> */}
                        </Link>
                </h1>
                <span className="Header_tagline-wide">Actualize your potential</span>
                {TokenService.hasAuthToken()
                    ? this.renderLogoutLink()
                    : this.renderLoginLink()}

            </div>

        )
    }
}