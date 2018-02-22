import axios from 'axios';
import StorageService from '../StorageService';
import store from '../../store';
import { setAlert } from '../../actions/alert-message';
import { logoutUser } from '../../actions/user';


class APIService {
  constructor() {
    this.API_URL = 'api/v1.0';

    this.get = this.get.bind(this);
    this.post = this.post.bind(this);
    this.put = this.put.bind(this);
    this.delete = this.delete.bind(this);
    this.request = this.request.bind(this);

    this.storage = new StorageService();
  }

  verifyToken(data) {
    return this.post(`${this.API_URL}/users/api-token-verify/`, data);
  }

  login(data) {
    return this.post(`${this.API_URL}/users/api-token-auth/`, data);
  }

  signup(data) {
    return this.post(`${this.API_URL}/users/signup/`, data);
  }

  listTodos(params) {
    return this.get(`${this.API_URL}/todo/todo-lists/`, params);
  }

  createTodo(data) {
    return this.post(`${this.API_URL}/todo/todo-lists/`, data);
  }

  getTodo(id) {
    return this.get(`${this.API_URL}/todo/todo-lists/${id}/`);
  }

  updateTodo(data) {
    return this.put(`${this.API_URL}/todo/todo-lists/${data.id}/`, data);
  }

  deleteTodo(id) {
    return this.delete(`${this.API_URL}/todo/todo-lists/${id}/`);
  }

  // Service methods

  get(url, params = {}) {
    return this.request(url, 'GET', params);
  }

  post(url, data) {
    return this.request(url, 'POST', null, data);
  }

  put(url, data) {
    return this.request(url, 'PUT', null, data);
  }

  delete(url) {
    return this.request(url, 'DELETE');
  }

  request(url, method, params = {}, data = {}) {
    return new Promise((resolve, reject) => {
      const headers = this.getHeaders();
      axios({
        url,
        method,
        headers,
        params,
        data: JSON.stringify(data),
      })
        .then(response => resolve(response.data))
        .catch(reason => reject(this.processError(reason)));
    });
  }

  getHeaders() {
    const token = this.storage.getAuth();

    const headers = {
      'Content-type': 'application/json',
    };
    if (token) {
      headers.Authorization = `JWT ${token}`;
    }
    return headers;
  }

  processError(error) {
    const { response } = error;

    if (response.status === 401) {
      if (response.data.detail === 'Signature has expired.') {
        store.dispatch(setAlert({
          type: 'ERROR',
          message: 'Your session has expired. Please login again.',
        }));
      }
      this.storage.setAuth('');
      store.dispatch(logoutUser());
    }

    return response.data;
  }
}

export default APIService;
