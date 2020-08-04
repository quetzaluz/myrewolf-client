import React, { Component } from 'react'
import { Input } from '../Utils/Utils'
//import ApiService from '../../services/api-service'

export default class DiscoveryQuestion extends Component {
    // handleSubmit = ev => {
    //     ev.preventDefault()
    //     const { question } = this.context
    //     const { answer } = ev.target
    //     console.log(answer)

    //     ApiService.postAnswer(question.id, answer.value)
    //         .then(this.context.postAnswer)
    //         .then(() => {
    //             answer.value = ''
    //         })
    //         .catch(this.context.setError)

    // }

    render() {
        const { question } = this.props

        return (

            <div className='DiscoveryQuestion__details'>

                <div className='DiscoveryQuestion__text'>
                    <h2 className='DiscoveryQuestion__heading'>{question.question}</h2>

                    <Input required name='answer' id='answer'></Input>
                </div>

            </div>



        )
    }
}
