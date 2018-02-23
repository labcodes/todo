import {
  SET_ALERT,
  REMOVE_ALERT,
  setAlert,
  removeAlert,
} from './index';

describe('set alert action', () => {
  it('setAlert should create SET_ALERT action', () => {
    expect(
      setAlert({ type: 'SUCCESS', message: 'Hi!' })
    ).toEqual({
      type: 'SET_ALERT',
      payload: { type: 'SUCCESS', message: 'Hi!' },
    });
  });
});

describe('remove alert action', () => {
  it('removeAlert should create REMOVE_ALERT action', () => {
    expect(
      removeAlert()
    ).toEqual({
      type: 'REMOVE_ALERT',
    });
  });
});
