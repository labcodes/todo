class StorageService {
    constructor () {
        this.AUTH_KEY = 'AUTH';
    }

    getAuth () {
        return localStorage.getItem(this.AUTH_KEY);
    }

    setAuth (data) {
        return localStorage.setItem(this.AUTH_KEY, data);
    }

}

export default StorageService;
