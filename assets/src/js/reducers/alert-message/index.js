import {
  SET_ALERT,
  REMOVE_ALERT,
} from '../../actions/alert-message';


const initialState = {};

const alert = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_ALERT:
      return Object.assign({}, state, payload);
    case REMOVE_ALERT:
      return initialState;
    default:
      return state;
  }
};

export default alert;
