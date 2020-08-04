import TokenService from '../services/token-service';
import config from '../config';

const ApiService = {
    getQuestions() {
        return fetch(`${config.API_ENDPOINT}/discovery`, {
            headers: {},

        }).then((res) =>
            !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
        )
    },
    getQuestion(questionId) {
        return fetch(`${config.API_ENDPOINT}/discovery/${questionId}`, {
            headers: {
                "Authorization": `basic ${TokenService.getAuthToken()}`,
            }
        }).then((res) =>
            !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
        );
    },
    postAnswer(questionId, answer) {
        return fetch(`${config.API_ENDPOINT}/discovery`, {
            method: 'POST',
            headers: {
                "content-type": "application/json",
                "Authorization": `basic ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify({
                question_id: questionId,
                answer,
            }),
        }).then((res) =>
            !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
        );
    },
    postReview(text, rating) {
        console.log(`basic ${TokenService.getAuthToken()}`)
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
    postUser(user) {
        return fetch(`${config.API_ENDPOINT}/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
};

export default ApiService;