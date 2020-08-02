import TokenService from '../services/token-service';
import config from '../config';

const ApiService = {
    getQuestions() {
        return fetch(`${config.API_ENDPOINT}/discovery`, {
            headers: {},

        }).then((res) =>
            !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
        );
    },
    getQuestions(questionId) {
        return fetch(`${config.API_ENDPOINT}/discovery/${questionId}`, {
            headers: {
                authorization: `basic ${TokenService.getAuthToken()}`,
            }
        }).then((res) =>
            !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
        );
    },
    postAnswer(id, answers) {
        return fetch(`${config.API_ENDPOINT}/discovery`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `basic ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify({
                id: id,
                answers,
            }),
        }).then((res) =>
            !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
        );
    },
    postReview(text, rating) {
        return fetch(`${config.API_ENDPOINT}/reviews`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `basic ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify({
                text,
                rating,
            }),
        }).then((res) =>
            !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
        );
    },
};

export default ApiService;