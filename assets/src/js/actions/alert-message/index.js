export const SET_ALERT = 'SET_ALERT';
export const REMOVE_ALERT = 'REMOVE_ALERT';

export function setAlert(obj) {
    return {
        type: SET_ALERT,
        payload: obj
    }
}

export function removeAlert() {
    return {
        type: REMOVE_ALERT
    }
}
