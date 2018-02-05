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

export default StorageService;
