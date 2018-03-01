import {
  LOGIN_USER,
  LOGOUT_USER,
} from '../../actions/user';


const initialState = {};

const user = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_USER:
      return Object.assign({}, state, payload);
    case LOGOUT_USER:
      return Object.assign({}, state, initialState);
    default:
      return state;
  }
};

export default user;
