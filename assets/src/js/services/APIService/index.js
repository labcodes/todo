import axios from 'axios';
import StorageService from '../StorageService';
import store from '../../store';
import { setAlert } from '../../actions/alert-message';
import { logoutUser } from '../../actions/user';


class APIService {
    constructor () {
        this.API_URL = 'api/v1.0';

        this.get = this.get.bind(this);
        this.post = this.post.bind(this);
        this.put = this.put.bind(this);

        this.storage = new StorageService();
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

    deleteTodo(id) {
        return this.delete(`${this.API_URL}/todo/todo-lists/${id}/`)
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
            .catch(reason => reject(this.processError(reason)))
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
            .catch(reason => reject(this.processError(reason)))
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
            .catch(reason => reject(this.processError(reason)))
        })
    }

    delete (url) {
        return new Promise((resolve, reject) => {
            const headers = this.getHeaders();
            axios({
                url: url,
                method: 'DELETE',
                headers: headers,
            })
            .then(response => resolve(response.data))
            .catch(reason => reject(this.processError(reason)))
        })
    }

    getHeaders() {
        const token = this.storage.getAuth().token;

        let headers = {
          "Content-type": "application/json",
        }
        if (token) {
            headers["Authorization"] = "JWT " + token
        }
        return headers
    }

    processError (error) {
        const response = error.response;

        if (response.status == 401) {
            if (response.data.detail == "Signature has expired.") {
                store.dispatch(setAlert({
                    type: 'ERROR',
                    message: 'Your session has expired. Please login again.'
                }))
            }
            this.storage.setAuth({});
            store.dispatch(logoutUser());
        }

        return response.data
    }

}

export default APIService;
