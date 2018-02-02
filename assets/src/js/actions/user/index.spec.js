import {
    LOGIN_USER,
    LOGOUT_USER,
    loginUser,
    logoutUser
} from './index';

describe('login user action', () => {
    it('loginUser should create LOGIN_USER action', () => {
        expect(
            loginUser({name: 'name', email: 'email', token: 'token'})
        ).toEqual({
            type: 'LOGIN_USER',
            payload: {name: 'name', email: 'email', token: 'token'}
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
