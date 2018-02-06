import {
    LOGIN_USER,
    LOGOUT_USER
} from '../../actions/user';


const initialState = {
    email: null,
    name: null,
};

export const user = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case LOGIN_USER:
            return Object.assign({}, state, {
                email: payload.email,
                name: payload.name,
            })
        case LOGOUT_USER:
            return Object.assign({}, state, initialState)
        default:
            return state
    }
}
