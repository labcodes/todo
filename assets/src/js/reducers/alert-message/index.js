import {
    SET_ALERT,
    REMOVE_ALERT,
} from '../../actions/alert-message';


const initialState = {
    type: '',
    message: ''
};

export const alert = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case SET_ALERT:
            return Object.assign({}, state, payload);
        case REMOVE_ALERT:
            return Object.assign({}, state, initialState);
        default:
            return state
    }
}
