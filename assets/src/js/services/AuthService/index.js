import APIService from '../APIService';
import StorageService from '../StorageService';
import store from '../../store';
import { loginUser, logoutUser } from '../../actions/user';


class AuthService {
    constructor () {
        this.storage = new StorageService();
        this.api = new APIService();

        this.loginUser = this.loginUser.bind(this);
        this.signupUser = this.signupUser.bind(this);
        this.logoutUser = this.logoutUser.bind(this);
        this.getLoggedUser = this.getLoggedUser.bind(this);
        this.handleAuthenticatedUser = this.handleAuthenticatedUser.bind(this);
        this.handleAnonymousUser = this.handleAnonymousUser.bind(this);
    }

    loginUser(data) {
        const api = this.api,
              storage = this.storage;

        return new Promise((resolve, reject) => {
            api.login(data)
            .then(response => {
                this.handleAuthenticatedUser(response);
                resolve(response);
            })
            .catch(reason => reject(reason))
        })
    }

    logoutUser() {
        return new Promise((resolve, reject) => {
            this.handleAnonymousUser();
            resolve();
        })
    }

    signupUser(data) {
        const api = this.api,
              storage = this.storage;

        return new Promise((resolve, reject) => {
            api.signup(data)
            .then(response => {
                this.handleAuthenticatedUser(response);
                resolve(response);
            })
            .catch(reason => reject(reason))
        })
    }

    handleAuthenticatedUser (response) {
        this.storage.setAuth(response.token);
        store.dispatch(loginUser({
            email: response.user.email,
            name: response.user.name,
        }))
    }

    handleAnonymousUser () {
        this.storage.setAuth('');
        store.dispatch(logoutUser());
    }

    getLoggedUser() {
        const auth = this.storage.getAuth();
        return auth && auth.user
    }

}

export default AuthService;
