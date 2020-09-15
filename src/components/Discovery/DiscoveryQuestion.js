import React, { Component } from 'react';
import { Input } from '../Utils/Utils';
import DiscoveryContext from '../../contexts/DiscoveryContext';
import ApiService from '../../services/generator-api-service';

export default class DiscoveryQuestion extends Component {
	static contextType = DiscoveryContext;

	// handleSubmit = (ev) => {
	// 	ev.preventDefault();
	// 	const { answer } = ev.target;
	// 	//const answer = [answers].value;

	// 	ApiService.postAnswer(answer)
	// 		.then(this.context.setAnswers)
	// 		.then(() => {
	// 			answer.value = '';
	// 		})
	// 		.then(() => {
	// 			this.renderHomePage();
	// 		})
	// 		.catch(this.context.setError);
	// };
	render() {
		const { question } = this.props;
		console.log(question);

		return (
			<div className="DiscoveryQuestion__details">
				<div className="DiscoveryQuestion__text">
					<h4 className="DiscoveryQuestion__heading">{question.question}</h4>

					<Input required name={question.id} id={question.id}></Input>
				</div>
			</div>
		);
	}
}
