import axios from 'axios';


class APIService {
    constructor () {
        this.AUTH_TOKEN = localStorage.getItem('TOKEN', '');

        this.LOGIN_URL = 'api/v1.0/users/api-token-auth/';
        this.SIGNUP_URL = 'api/v1.0/users/signup/';

        this.post = this.post.bind(this);
        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
    }

    post (url, data, authenticated=false) {
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

    login (data) {
        return this.post(this.LOGIN_URL, data)
    }

    signup (data) {
        return this.post(this.SIGNUP_URL, data)
    }

}

export default APIService;
