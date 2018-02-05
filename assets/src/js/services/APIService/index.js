import axios from 'axios';
import StorageService from '../StorageService';


class APIService {
    constructor () {
        this.LOGIN_URL = 'api/v1.0/users/api-token-auth/';
        this.SIGNUP_URL = 'api/v1.0/users/signup/';

        this.post = this.post.bind(this);
    }

    post (url, data) {
        const headers = this.getHeaders();
        return new Promise((resolve, reject) => {
            axios({
                url: url,
                method: 'POST',
                headers: headers,
                data: JSON.stringify(data)
            })
            .then(response => resolve(response.data))
            .catch(reason => reject(reason.response.data))
        })
    }

    getHeaders() {
        const storage = new StorageService();
        const token = storage.getToken();

        return {
          "Content-type": "application/json",
          "Authorization": "JWT " + token
        }
    }

}

export default APIService;
