import { ADD_FILE, CLEAR_ALL_QUACTION,ADD_All_QUACTIONS } from '../../actions/types';

const intialState={
  fileQuactions:[],
  allQuactions:[],
};

export default (state = intialState, action) => {
  switch (action.type) {
    case ADD_FILE:
      console.log(action);
      return {
        ...state,
        fileQuactions: [...state.fileQuactions,action.data],
      };
      case ADD_All_QUACTIONS:
        return {
        ...state,
        allQuactions: [...state.allQuactions,action.data],
      };
    case CLEAR_ALL_QUACTION:
      return {
        ...state,
        allQuactions: [],
        fileQuactions: [],
      };
    default:
      return {...state};
  }
};
