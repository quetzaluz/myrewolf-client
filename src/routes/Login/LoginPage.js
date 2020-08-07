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
                <p>This project was made for a creative agency to help them gather information on how they can better help serve their customers' needs. Once you create a free account and log in you will have access to a discovery form and a review page.</p>
            </Section>
        )
    }
}