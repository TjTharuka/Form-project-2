import { TOAST_MESSAGE } from '../../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case TOAST_MESSAGE:
      return {
        message: action.message,
        status: action.status,
      };
    default:
      return { ...state };
  }
};
