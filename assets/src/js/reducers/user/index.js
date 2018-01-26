import {
    LOGIN_USER,
    LOGOUT_USER
} from '../../actions/user';


const initialState = {
    username: null,
    token: null
};

export const user = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case LOGIN_USER:
            return Object.assign({}, state, {
                username: payload.username,
                token: payload.token
            })
        case LOGOUT_USER:
            return Object.assign({}, state, initialState)
        default:
            return state
    }
}
