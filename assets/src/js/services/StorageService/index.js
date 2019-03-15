class StorageService {
  constructor() {
    this.AUTH_KEY = 'TODO_AUTH';
  }

  getAuth() {
    return localStorage.getItem(this.AUTH_KEY);
  }

  setAuth(data) {
    localStorage.setItem(this.AUTH_KEY, data);
  }

  /* eslint-disable class-methods-use-this */
  clear() {
    localStorage.clear();
  }
  /* eslint-disable class-methods-use-this */
}

export default StorageService;
