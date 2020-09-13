import React, { Component } from 'react';
import './DiscoveryRoute.css';
import ApiService from '../../services/generator-api-service';
import DiscoveryContext from '../../contexts/DiscoveryContext';
import { Section, Button } from '../../components/Utils/Utils';
import DiscoveryQuestion from '../../components/Discovery/DiscoveryQuestion';

export default class DiscoveryRoute extends Component {
	static contextType = DiscoveryContext;

	static defaultProps = {
		location: {},
		history: {
			push: () => {},
		},
	};

	componentDidMount() {
		this.context.clearError();
		ApiService.getQuestions()
			.then(this.context.setQuestions)
			.catch(this.context.setError);
	}

	renderHomePage = () => {
		const { location, history } = this.props;
		const destination = (location.state || {}).from || '/home';
		history.push(destination);
	};

	handleSubmit = (ev) => {
		ev.preventDefault();
		const { answer } = ev.target;
		//const answer = [answers].value;

		ApiService.postAnswer(answer)
			.then(this.context.setAnswers)
			.then(() => {
				answer.value = '';
			})
			.then(() => {
				this.renderHomePage();
			})
			.catch(this.context.setError);
	};

	renderQuestions() {
		const { questions = [] } = this.context;
		console.log(questions);
		return questions.map((question) => (
			<DiscoveryQuestion key={question.id} question={question} />
		));
	}

	render() {
		const { error } = this.context;
		return (
			<Section list className="Discovery">
				<form className="DiscoverySubmit" onSubmit={this.handleSubmit}>
					{error ? (
						<p className="red">There was an error, try again</p>
					) : (
						this.renderQuestions()
					)}
					<Button id="submit-btn" type="submit">
						Submit
					</Button>
				</form>
			</Section>
		);
	}
}
