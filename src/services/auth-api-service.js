import config from '../config';
import TokenService from './token-service';

const AuthApiService = {
	postLogin({ user_name, password }) {
		return fetch(`${config.API_ENDPOINT}/auth/token`, {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify({ user_name, password }),
		}).then((res) =>
			!res.ok ? res.json().then((err) => Promise.reject(err)) : res.json()
		);
	},
	refreshToken() {
		return fetch(`${config.API_ENDPOINT}/auth/token`, {
			method: 'PUT',
			headers: {
				authorization: `Bearer ${TokenService.getAuthToken()}`,
			},
		}).then((res) =>
			!res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
		);
	},
};

export default AuthApiService;
