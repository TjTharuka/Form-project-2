import { LOADING } from '../../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    default:
      return { ...state };
  }
};
