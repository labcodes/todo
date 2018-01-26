import {
    LOGIN_USER,
    LOGOUT_USER
} from '../../actions/user';


const initialState = {
    username: null,
    token: null
};

export const user = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                username: action.username,
                token: 'token'
            }
        case LOGOUT_USER:
            return initialState
        default:
            return state
    }
}
