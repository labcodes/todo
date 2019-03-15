export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export function loginUser(obj) {
  return {
    type: LOGIN_USER,
    payload: obj,
  };
}

export function logoutUser() {
  return {
    type: LOGOUT_USER,
  };
}
