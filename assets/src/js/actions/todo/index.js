export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export function addTodo(obj) {
    return {
        type: ADD_TODO,
        payload: obj
    }
}

export function removeTodo(obj) {
    return {
        type: REMOVE_TODO,
        payload: obj
    }
}
