import APIService from '../APIService';
import StorageService from '../StorageService';
import store from '../../store';
import { loginUser, logoutUser } from '../../actions/user';


class AuthService {
  constructor() {
    this.storage = new StorageService();
    this.api = new APIService();

    this.loginUser = this.loginUser.bind(this);
    this.signupUser = this.signupUser.bind(this);
    this.logoutUser = this.logoutUser.bind(this);
    this.verifyLoggedUser = this.verifyLoggedUser.bind(this);
    this.handleAuthenticatedUser = this.handleAuthenticatedUser.bind(this);
    this.handleAnonymousUser = this.handleAnonymousUser.bind(this);
  }

  loginUser(data) {
    return new Promise((resolve, reject) => {
      this.api.login(data)
        .then((response) => {
          this.handleAuthenticatedUser(response);
          resolve(response);
        })
        .catch(reason => reject(reason));
    });
  }

  logoutUser() {
    return new Promise((resolve) => {
      this.handleAnonymousUser();
      resolve();
    });
  }

  signupUser(data) {
    return new Promise((resolve, reject) => {
      this.api.signup(data)
        .then((response) => {
          this.handleAuthenticatedUser(response);
          resolve(response);
        })
        .catch(reason => reject(reason));
    });
  }

  handleAuthenticatedUser(response) {
    this.storage.setAuth(response.token);
    store.dispatch(loginUser({
      email: response.user.email,
      name: response.user.name,
    }));
  }

  handleAnonymousUser() {
    this.storage.clear();
    store.dispatch(logoutUser());
  }

  verifyLoggedUser() {
    const token = this.storage.getAuth();
    if (token) {
      this.api.verifyToken({ token })
        .then(response => this.handleAuthenticatedUser(response))
        .catch(() => this.handleAnonymousUser());
    }
  }
}

export default AuthService;
