class StorageService {
    constructor () {
        this.AUTH_KEY = 'AUTH';
    }

    getAuth () {
        return JSON.parse(localStorage.getItem(this.AUTH_KEY));
    }

    setAuth (data) {
        return localStorage.setItem(this.AUTH_KEY, JSON.stringify(data));
    }

}

export default StorageService;
