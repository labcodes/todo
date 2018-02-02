import {
    ADD_TODO,
    REMOVE_TODO
} from '../../actions/todo';


const initialState = [];

export const todo = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case ADD_TODO:
            return [
                ...state,
                payload
            ]
        case REMOVE_TODO:
            return state.filter(item => item.id != payload.id);
        default:
            return state
    }
}
