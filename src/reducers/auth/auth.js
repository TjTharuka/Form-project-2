import { EMPTY_STATE, LOGIN, LOGOUT } from '../../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        user: action.data,
      };
    case LOGOUT:
      return {
        user: {},
      };
    case EMPTY_STATE:
      return {};
    default:
      return state;
  }
};
