export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export function loginUser(username, password) {
    return {
        type: LOGIN_USER,
        username,
        password
    }
}

export function logoutUser() {
    return {
        type: LOGOUT_USER
    }
}
