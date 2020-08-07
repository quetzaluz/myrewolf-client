import React, { Component } from 'react'
import Login from '../../components/Login/Login'
import { Section } from '../../components/Utils/Utils'
import './LoginPage.css'


export default class LoginPage extends Component {
    static defaultProps = {
        location: {},
        history: {
            push: () => { },
        },
    }

    handleLoginSuccess = () => {
        const { location, history } = this.props
        const destination = (location.state || {}).from || '/home'
        history.push(destination)
    }

    render() {
        return (
            <Section className='LoginPage'>
                <div className='LoginHeader'>
                    <h2>Log in</h2>
                </div>
                <Login
                    onLoginSuccess={this.handleLoginSuccess} />
            </Section>
        )
    }
}