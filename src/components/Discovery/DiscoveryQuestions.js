import React, { Component } from 'react'
import { Input } from '../Utils/Utils'

export default class DiscoveryQuestion extends Component {

    render() {
        const { question } = this.props

        return (

            <div className='DiscoveryQuestion__details'>

                <div className='DiscoveryQuestion__text'>
                    <h4 className='DiscoveryQuestion__heading'>{question.question}</h4>

                    <Input required name='answers' id='answers'></Input>
                </div>

            </div>



        )
    }
}
