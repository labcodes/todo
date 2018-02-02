import { user } from './index';

describe('user reducer', () => {

    const undefinedUser = {
        name: null,
        email: null,
        token: null
    };

    const loggedUser = {
        name: 'Name',
        email: 'mail@mail.com',
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
            payload: loggedUser
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
