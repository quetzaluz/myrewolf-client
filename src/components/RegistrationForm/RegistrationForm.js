import React, { Component } from 'react'
import { Button, Input, Required } from '../Utils/Utils'

export default class RegistrationForm extends Component {
    static defaultProps = {
        onRegistrationSuccess: () => { }
    }

    state = { error: null }

    handleSubmit = ev => {
        ev.preventDefault()
        const { full_name, nick_name, user_name, password } = ev.target

        console.log('registration form submittee')
        console.log({ full_name, nick_name, user_name, password })

        full_name.value = ''
        nick_name.value = ''
        user_name.value = ''
        password.value = ''
        this.props.onRegistrationSuccess()
    }

    render() {
        const { error } = this.state
        return (
            <form
                className='RegistrationForm'
                onSubmit={this.handleSubmit} >
                <div role='alert'>
                    {error && <p className='red'>{error}</p>}
                </div>
                <div className='full_name'>
                    <label htmlFor='Registration_full_name'>
                        Full name <Required />
                    </label>
                    <Input
                        name='full_name'
                        type='text'
                        required
                        id='RegistrationForm_full_name'>
                    </Input>
                </div>
                <div className='user_name'>
                    <label htmlFor='RegistrationForm_user_name'>
                        User name <Required />
                    </label>
                    <Input
                        name='user_name'
                        type='text'
                        required
                        id='RegistrationForm_user_name'>
                    </Input>
                </div>
                <div className='password'>
                    <label htmlFor='RegistrationForm_password'>
                        Password <Required />
                    </label>
                    <Input
                        name='password'
                        type='password'
                        required
                        id='RegistrationForm_password'>
                    </Input>
                </div>
                <div className='nick_name'>
                    <label htmlFor='RegistrationForm_nick_name'>
                        Nickname
          </label>
                    <Input
                        name='nick_name'
                        type='text'
                        required
                        id='RegistrationForm_nick_name'>
                    </Input>
                </div>
                <Button type='submit'>
                    Register
        </Button>
            </form>
        )
    }
}