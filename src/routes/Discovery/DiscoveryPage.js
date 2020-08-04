import React, { Component } from 'react'
import './DiscoveryPage.css'
import ApiService from '../../services/api-service'
import DiscoveryContext from '../../contexts/DiscoveryContext'
import { Section, Button } from '../../components/Utils/Utils'
import DiscoveryQuestion from '../../components/Discovery/DiscoveryQuestions'

export default class DiscoveryPage extends Component {
    static contextType = DiscoveryContext


    componentDidMount() {
        this.context.clearError()
        ApiService.getQuestions()
            .then(this.context.setQuestions)
            .catch(this.context.setError)

    }

    handleSubmit = ev => {
        ev.preventDefault()
        const { questions } = this.context
        const { answer } = ev.target
        console.log(answer)

        ApiService.postAnswer(questions.id, answer.value)
            .then(this.context.setAnswers)
            .then(() => {
                answer.value = ''
            })
            .catch(this.context.setError)

    }

    renderQuestions() {
        const { questions = [] } = this.context
        return questions.map(question =>
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
                <form className='DiscoverySubmit' onSubmit={this.handleSubmit}>
                    {error
                        ? <p className='red'>There was an error, try again</p>
                        : this.renderQuestions()}
                    <Button type='submit'>Submit</Button>
                </form>
            </Section>
        )
    }
}