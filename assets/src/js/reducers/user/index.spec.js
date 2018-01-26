import { user } from './index';

describe('user reducer', () => {

    const undefinedUser = {
        username: null,
        token: null
    };

    const loggedUser = {
        username: 'username',
        token: 'token'
    };

    it('should handle initial state', () => {
        expect(
            user(undefined, {})
        ).toEqual(
            undefinedUser
        )
    })

    it('should handle LOGIN_USER', () => {
        const loginAction = {
            type: 'LOGIN_USER',
            username: 'username',
            password: 'password'
        }

        expect(
            user(undefinedUser, loginAction)
        ).toEqual(
            loggedUser
        )
    })

    it('should handle LOGOUT_USER', () => {
        const logoutAction = {
            type: 'LOGOUT_USER'
        }

        expect(
            user(loggedUser, logoutAction)
        ).toEqual(
            undefinedUser
        )
    })

})
