class StorageService {
  constructor() {
    this.AUTH_KEY = 'TODO_AUTH';
  }

  getAuth() {
    localStorage.getItem(this.AUTH_KEY);
  }

  setAuth(data) {
    localStorage.setItem(this.AUTH_KEY, data);
  }

  clean() {
    localStorage.clean();
  }
}

export default StorageService;
