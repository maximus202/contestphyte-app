import { API_BASE_URL } from '../config';
import TokenService from './token-service';

const ApiService = {
  submitNewUser(data) {
    return fetch(`${API_BASE_URL}/api/users/`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => (((!res.ok))
        ? res.json().then((e) => Promise.reject(e))
        : res.json()));
  },
  getContests() {
    return fetch(`${API_BASE_URL}/api/contests/`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((res) => ((!res.ok)
        ? res.json().then((e) => Promise.reject(e))
        : res.json()));
  },
  submitNewContest(data) {
    return fetch(`${API_BASE_URL}/api/contests/`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => (((!res.ok))
        ? res.json().then((e) => Promise.reject(e))
        : res.json()));
  },
  getContestById(contestId) {
    return fetch(`${API_BASE_URL}/api/contests/${contestId}`, {
      method: 'GET',
      headers: {
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((res) => (((!res.ok))
        ? res.json().then((e) => Promise.reject(e))
        : res.json()));
  },
  getPublicContest(contestId) {
    return fetch(`${API_BASE_URL}/api/contests/public/landing/${contestId}`, {
      method: 'GET',
    })
      .then((res) => (((!res.ok))
        ? res.json().then((e) => Promise.reject(e))
        : res.json()));
  },
  submitParticipant(data, contestId) {
    return fetch(`${API_BASE_URL}/api/participants/new/${contestId}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => (((!res.ok))
        ? res.json().then((e) => Promise.reject(e))
        : res.json()));
  },
  getParticipant(participantId) {
    return fetch(`${API_BASE_URL}/api/participants/contest/${participantId}`, {
      method: 'GET',
    })
      .then((res) => (((!res.ok))
        ? res.json().then((e) => Promise.reject(e))
        : res.json()));
  },
  getParticipantsByContest(contestId) {
    return fetch(`${API_BASE_URL}/api/participants/${contestId}`, {
      method: 'GET',
      headers: {
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((res) => (((!res.ok))
        ? res.json().then((e) => Promise.reject(e))
        : res.json()));
  },
  deleteContest(contestId) {
    return fetch(`${API_BASE_URL}/api/contests/${contestId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    });
  },
};

export default ApiService;
