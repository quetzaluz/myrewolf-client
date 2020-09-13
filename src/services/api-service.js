import TokenService from '../services/token-service';
import config from '../config';

const ApiService = {
    getQuestions() {
        return fetch(`${config.API_ENDPOINT}discovery`, {
            headers: {},

        }).then((res) =>
            !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
        )
    },
    getQuestion(questionId) {
        return fetch(`${config.API_ENDPOINT}discovery/${questionId}`, {
            headers: {
                "Authorization": `basic ${TokenService.getAuthToken()}`,
            }
        }).then((res) =>
            !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
        );
    },
    postAnswer(answer) {
        return fetch(`${config.API_ENDPOINT}/discovery/${answer}`, {
            method: 'POST',
            headers: {
                "content-type": "application/json",
                authorization: `basic ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify({
                answer
            }),
        }).then((res) =>
            !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
        );
    },
    postReview(text, rating) {
        return fetch(`${config.API_ENDPOINT}reviews`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `basic ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify({
                text,
                rating
            }),
        }).then((res) =>
            !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
        );
    },
    postUser(user) {
        return fetch(`${config.API_ENDPOINT}api/user`, {
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
    deleteQuestion(question, id) {
        return fetch(`${config.API_ENDPOINT}discovery/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'authorization': `Basic ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(question)
        })
            .then((res) =>
                !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
            );
    },
    updateQuestion(question, id) {
        return fetch(`${config.API_ENDPOINT}discovery/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `Basic ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(question)
        })
            .then((res) =>
                !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
            );
    }
};

export default ApiService;