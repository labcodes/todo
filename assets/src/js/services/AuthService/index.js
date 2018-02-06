import APIService from '../APIService';
import StorageService from '../StorageService';


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
              storage = this.storage;

        return new Promise((resolve, reject) => {
            api.login(data)
            .then(response => {
                storage.setAuth(response);
                resolve(response);
            })
            .catch(reason => reject(reason))
        })
    }

    signupUser(data) {
        const api = this.api,
              storage = this.storage;

        return new Promise((resolve, reject) => {
            api.signup(data)
            .then(response => {
                storage.setAuth(response);
                resolve(response);
            })
            .catch(reason => reject(reason))
        })
    }

    logoutUser() {
        return new Promise((resolve, reject) => {
            this.storage.setAuth({});
            resolve();
        })
    }

    getLoggedUser() {
        const auth = this.storage.getAuth();
        return auth && auth.user
    }

}

export default AuthService;
