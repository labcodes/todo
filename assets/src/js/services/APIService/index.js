import axios from 'axios';
import StorageService from '../StorageService';


class APIService {
    constructor () {
        this.API_URL = 'api/v1.0';

        this.get = this.get.bind(this);
        this.post = this.post.bind(this);
        this.put = this.put.bind(this);
    }

    login(data) {
        return this.post(`${this.API_URL}/users/api-token-auth/`, data)
    }

    signup(data) {
        return this.post(`${this.API_URL}/users/signup/`, data)
    }

    listTodos(params) {
        return this.get(`${this.API_URL}/todo/todo-lists/`, params)
    }

    createTodo(data) {
        return this.post(`${this.API_URL}/todo/todo-lists/`, data)
    }

    getTodo(id) {
        return this.get(`${this.API_URL}/todo/todo-lists/${id}/`)
    }

    updateTodo(data) {
        return this.put(`${this.API_URL}/todo/todo-lists/${data.id}/`, data)
    }

    get (url, params={}) {
        return new Promise((resolve, reject) => {
            const headers = this.getHeaders();
            axios({
                url: url,
                method: 'GET',
                headers: headers,
                params: params,
            })
            .then(response => resolve(response.data))
            .catch(reason => reject(reason.response.data))
        })
    }

    post (url, data) {
        return new Promise((resolve, reject) => {
            const headers = this.getHeaders();
            axios({
                url: url,
                method: 'POST',
                headers: headers,
                data: JSON.stringify(data),
            })
            .then(response => resolve(response.data))
            .catch(reason => reject(reason.response.data))
        })
    }

    put (url, data) {
        return new Promise((resolve, reject) => {
            const headers = this.getHeaders();
            axios({
                url: url,
                method: 'PUT',
                headers: headers,
                data: JSON.stringify(data),
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
