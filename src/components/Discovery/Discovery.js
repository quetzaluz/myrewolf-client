import React, { Component } from 'react'
import './Discovery.css'
import ApiService from '../../services/api-service'
import DiscoveryContext from '../../contexts/DiscoveryContext'
import { Section } from '../Utils/Utils'
import DiscoveryQuestion from './DiscoveryQuestions'

export default class Discovery extends Component {
    static contextType = DiscoveryContext

    componentDidMount() {
        this.context.clearError()
        ApiService.getQuestions()
            .then(this.context.setList)
            .catch(this.context.setError)

    }

    renderQuestions() {
        const { List = [] } = this.context
        return List.map(question =>
            <DiscoveryQuestion
                key={question.id}
                question={question}
            />
        )
    }

    render() {
        const { error } = this.context
        return (
            <Section list className='Discovery'>

                {error
                    ? <p className='red'>There was an error, try again</p>
                    : this.renderQuestions()}
            </Section>
        )
    }
}