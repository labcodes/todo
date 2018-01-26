import {
    LOGIN_USER,
    LOGOUT_USER,
    loginUser,
    logoutUser
} from './index';

describe('login user action', () => {
    it('loginUser should create LOGIN_USER action', () => {
        expect(loginUser('username', 'password')).toEqual({
            type: 'LOGIN_USER',
            username: 'username',
            password: 'password'
        })
    })
})

describe('logout user action', () => {
    it('logoutUser should create LOGOUT_USER action', () => {
        expect(logoutUser()).toEqual({
            type: 'LOGOUT_USER'
        })
    })
})
