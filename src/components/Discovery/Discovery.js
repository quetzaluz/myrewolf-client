import React, { Component } from 'react'
import './Discovery.css'
import ApiService from '../../services/api-service'
import DiscoveryContext from '../../contexts/DiscoveryContext'
import { Section } from '../Utils/Utils'

export default class Discovery extends Component {
    static defaultProps = {
        match: { params: {} },
    }
    static contextType = DiscoveryContext

    componentDidMount() {
        console.log(this.props.match.params)
        const { questionId } = this.props.match.params
        this.context.clearError()
        ApiService.getQuestions(questionId)
            .then(this.context.setList)
            .then(console.log(this.context))
            .catch(this.context.setError)

    }

    renderQuestions() {
        const { question } = this.context
        console.log(question)
        return <>

            <div className="DiscoveryPage">
                <h2>{question}</h2>
                <DiscoveryContext question={question} />

            </div>
        </>
    }

    render() {
        const { error, question } = this.context
        let content
        if (error) {
            content = (error.error === `This doesn't exist`)
                ? <p className='red'>Not found</p>
                : <p className='red'>There was an error</p>
            console.log('work dammit')
        } else if (!question) {
            content = <div className='loading' />
            console.log('working yet?')
        } else {
            content = this.renderQuestions()
        }
        return (
            <Section className="Discovery">
                {content}
            </Section>

        )
    }
}