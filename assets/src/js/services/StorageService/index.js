class StorageService {
    constructor () {
        this.AUTH_KEY = 'AUTH';
    }

    getAuth () {
        const auth = localStorage.getItem(this.AUTH_KEY) || "{}";
        return JSON.parse(auth);
    }

    setAuth (data) {
        return localStorage.setItem(this.AUTH_KEY, JSON.stringify(data));
    }

}

export default StorageService;
