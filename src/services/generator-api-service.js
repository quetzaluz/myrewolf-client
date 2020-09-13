import config from '../config';
import TokenService from './token-service';

const GeneratorApiService = {
	getUsers() {
		return fetch(`${config.API_ENDPOINT}/api/users`, {
			headers: {},
		}).then((res) =>
			!res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
		);
	},
	getUser() {
		return fetch(`${config.API_ENDPOINT}/api/users/user`, {
			headers: {
				Authorization: `Bearer ${TokenService.getAuthToken()}`,
			},
		}).then((res) =>
			!res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
		);
	},
	postUser(user) {
		return fetch(`${config.API_ENDPOINT}/api/user`, {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
				Authorization: `Bearer ${TokenService.getAuthToken()}`,
			},
			body: JSON.stringify(user),
		}).then((res) =>
			!res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
		);
	},
	updateUser(userId) {
		return fetch(`${config.API_ENDPOINT}/api/user/${userId}`, {
			method: 'PATCH',
			headers: {
				'content-type': 'application/json',
				Authorization: `Bearer ${TokenService.getAuthToken()}`,
			},
		}).then((res) =>
			!res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
		);
	},
	postReview(text, rating) {
		return fetch(`${config.API_ENDPOINT}/reviews`, {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
				authorization: `Bearer ${TokenService.getAuthToken()}`,
			},
			body: JSON.stringify({
				text,
				rating,
			}),
			// }).then((res) =>
			// 	!res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
			//);
		});
	},
	getQuestions() {
		return fetch(`${config.API_ENDPOINT}/discovery`, {
			headers: {},
		}).then((res) =>
			!res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
		);
	},
	postAnswer(answer) {
		console.log(answer);
		return fetch(`${config.API_ENDPOINT}/discovery/${answer}`, {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
				authorization: `Bearer ${TokenService.getAuthToken()}`,
			},
			body: JSON.stringify({
				answer,
			}),
		}).then((res) =>
			!res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
		);
	},
};

export default GeneratorApiService;