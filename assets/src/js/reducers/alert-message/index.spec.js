import { alert } from './index';

describe('alert reducer', () => {

    const alertMessage = {
        type: 'SUCCESS',
        message: 'Hi!'
    };
    const emptyState = {
        type: '',
        message: ''
    };

    it('should handle initial state', () => {
        expect(
            alert(undefined, {})
        ).toEqual(
            emptyState
        )
    })

    it('should handle SET_ALERT', () => {
        const setAlertAction = {
            type: 'SET_ALERT',
            payload: alertMessage
        }

        expect(
            alert(emptyState, setAlertAction)
        ).toEqual(
            alertMessage
        )
    })

    it('should handle REMOVE_ALERT', () => {
        const removeAlertAction = {
            type: 'REMOVE_ALERT',
        }

        expect(
            alert(alertMessage, removeAlertAction)
        ).toEqual(
            emptyState
        )
    })

})
