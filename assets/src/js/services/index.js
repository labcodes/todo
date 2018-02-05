import axios from 'axios';


class APIService {
    constructor () {
        this.LOGIN_URL = 'api/v1.0/users/api-token-auth/';
        this.SIGNUP_URL = 'api/v1.0/users/signup/';

        this.post = this.post.bind(this);
    }

    post (url, data) {
        return new Promise((resolve, reject) => {
            axios({
                url: url,
                method: 'POST',
                headers: {
                  "Content-type": "application/json"
                },
                data: JSON.stringify(data)
            })
            .then(response => resolve(response.data))
            .catch(reason => reject(reason.response.data))
        })
    }

}


class StorageService {
    constructor () {
        this.TOKEN_KEY = 'TOKEN';
    }

    getToken () {
        return localStorage.getItem(this.TOKEN_KEY, '');
    }

    setToken (token) {
        return localStorage.setItem(this.TOKEN_KEY, token);
    }

}

class AuthService {
    constructor () {
        this.storage = new StorageService();
        this.api = new APIService();

        this.loginUser = this.loginUser.bind(this);
        this.signupUser = this.signupUser.bind(this);
        this.logoutUser = this.logoutUser.bind(this);
    }

    loginUser(data) {
        const api = this.api,
              url = this.api.LOGIN_URL,
              storage = this.storage;

        return new Promise((resolve, reject) => {
            api.post(url, data)
            .then(response => {
                storage.setToken(response.token);
                resolve(response);
            })
            .catch(reason => reject(reason))
        })
    }

    signupUser(data) {
        const api = this.api,
              url = this.api.SIGNUP_URL,
              storage = this.storage;

        return new Promise((resolve, reject) => {
            api.post(url, data)
            .then(response => {
                storage.setToken(response.token);
                resolve(response);
            })
            .catch(reason => reject(reason))
        })
    }

    logoutUser() {
        return new Promise((resolve, reject) => {
            this.storage.setToken('');
            resolve();
        })
    }
}

export { APIService, StorageService, AuthService };
