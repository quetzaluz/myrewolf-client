import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import './Header.css';

export default class Header extends Component {
    state = {
        loggedIn: false
    }


    handleLogoutClick = () => {
        TokenService.clearAuthToken();
    };

    handleLoginClick = () => {
        this.setState({ loggedIn: true })
    };

    renderLogoutLink() {

        return (
            <div className="Header_logged-in">
                <Link onClick={this.handleLogoutClick} to="/">Log out</Link>
            </div>
        );
    }

    renderLoginLink() {

        return (
            <div className="Header_not-logged-in">
                <Link onClick={this.handleLoginClick} to="/">Log in</Link>
                <Link to="/register">Register</Link>
            </div>
        )
    }

    render() {

        return (
            <>
                <nav className='Nav'>
                    <div className="Header">
                        <h1>
                            <Link to='/'>
                                My Rewolf
                        </Link>
                        </h1>
                        <span className="Header_tagline-wide">Actualize your potential</span>
                        {TokenService.hasAuthToken()
                            ? this.renderLogoutLink()
                            : this.renderLoginLink()}
                    </div>
                </nav>

            </>
        )
    }
}